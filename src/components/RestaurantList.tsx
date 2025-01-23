import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone } from "lucide-react";
import Menu from "./Menu";
import Cart from "./Cart";
import { useToast } from "@/hooks/use-toast";

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  address: string;
  phone: string;
}

interface RestaurantListProps {
  station: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const RestaurantList = ({ station }: RestaurantListProps) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  // Mock data - replace with actual API call
  const restaurants: Restaurant[] = [
    {
      id: 1,
      name: "Station Express",
      cuisine: "North Indian, Chinese",
      rating: 4.2,
      deliveryTime: "30-40 min",
      address: "Platform 1, Delhi Junction",
      phone: "+91 98765 43210"
    },
    {
      id: 2,
      name: "Railway Bites",
      cuisine: "South Indian",
      rating: 4.5,
      deliveryTime: "25-35 min",
      address: "Platform 2, Delhi Junction",
      phone: "+91 98765 43211"
    }
  ];

  const handleAddToCart = (item: any, quantity: number) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const handleRemoveFromCart = (itemId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handlePlaceOrder = () => {
    // Mock order placement - replace with actual API call
    toast({
      title: "Order Placed Successfully!",
      description: "Your order will be delivered to your seat.",
    });
    setCartItems([]);
    setSelectedRestaurant(null);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">
        Restaurants at {station}
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{restaurant.name}</CardTitle>
              <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{restaurant.deliveryTime}</span>
                  <span className="mx-2">•</span>
                  <span>⭐ {restaurant.rating}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{restaurant.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{restaurant.phone}</span>
                </div>
                <Button 
                  className="w-full mt-4"
                  onClick={() => setSelectedRestaurant(restaurant.id)}
                >
                  View Menu
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedRestaurant && (
        <div className="grid gap-4 md:grid-cols-2">
          <Menu
            restaurantId={selectedRestaurant}
            onAddToCart={handleAddToCart}
          />
          <Cart
            items={cartItems}
            onRemoveItem={handleRemoveFromCart}
            onPlaceOrder={handlePlaceOrder}
          />
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
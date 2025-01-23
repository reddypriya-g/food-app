import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Plus, Minus } from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface MenuProps {
  restaurantId: number;
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

const Menu = ({ restaurantId, onAddToCart }: MenuProps) => {
  const { toast } = useToast();
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  // Mock menu data - replace with API call
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Butter Chicken",
      description: "Creamy, rich curry with tender chicken pieces",
      price: 280,
      category: "Main Course"
    },
    {
      id: 2,
      name: "Dal Makhani",
      description: "Black lentils cooked overnight",
      price: 220,
      category: "Main Course"
    },
    {
      id: 3,
      name: "Naan",
      description: "Freshly baked Indian bread",
      price: 40,
      category: "Breads"
    }
  ];

  const updateQuantity = (itemId: number, delta: number) => {
    setQuantities(prev => {
      const newQuantity = (prev[itemId] || 0) + delta;
      if (newQuantity < 0) return prev;
      return { ...prev, [itemId]: newQuantity };
    });
  };

  const handleAddToCart = (item: MenuItem) => {
    const quantity = quantities[item.id] || 0;
    if (quantity > 0) {
      onAddToCart(item, quantity);
      setQuantities(prev => ({ ...prev, [item.id]: 0 }));
      toast({
        title: "Added to cart",
        description: `${quantity}x ${item.name} added to cart`,
      });
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Menu</h3>
      <div className="grid gap-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 flex justify-between items-center"
          >
            <div className="space-y-1">
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="font-medium">₹{item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateQuantity(item.id, -1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">
                {quantities[item.id] || 0}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateQuantity(item.id, 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => handleAddToCart(item)}
                disabled={!quantities[item.id]}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
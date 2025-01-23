import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2 } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onRemoveItem: (itemId: number) => void;
  onPlaceOrder: () => void;
}

const Cart = ({ items, onRemoveItem, onPlaceOrder }: CartProps) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-gray-500">Your cart is empty</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Cart</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">
                {item.quantity} × ₹{item.price}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-medium">₹{item.price * item.quantity}</p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onRemoveItem(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          <p className="text-sm text-gray-600">Total</p>
          <p className="text-xl font-bold">₹{total}</p>
        </div>
        <Button onClick={onPlaceOrder}>Place Order</Button>
      </CardFooter>
    </Card>
  );
};

export default Cart;
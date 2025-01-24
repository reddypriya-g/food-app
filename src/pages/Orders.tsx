import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

const Orders = () => {
  // Mock orders data - replace with actual orders data later
  const orders = [
    {
      id: "ORD001",
      restaurant: "Biryani House",
      items: ["Chicken Biryani", "Raita"],
      total: 250,
      status: "Delivered",
      date: "2024-02-20",
      deliveryTime: "12:30 PM",
      station: "New Delhi Railway Station",
    },
    {
      id: "ORD002",
      restaurant: "Punjab Express",
      items: ["Butter Naan", "Paneer Butter Masala"],
      total: 300,
      status: "In Transit",
      date: "2024-02-19",
      deliveryTime: "7:45 PM",
      station: "Mumbai Central",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-4">
              <div className="flex flex-col items-start">
                <span className="text-xl font-bold text-blue-700">IRCTC</span>
                <span className="text-sm text-gray-600">e-Catering</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
          <div className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex justify-between">
                    <span>{order.restaurant}</span>
                    <span className="text-sm font-normal px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                      {order.status}
                    </span>
                  </CardTitle>
                  <p className="text-sm text-gray-500">Order ID: {order.id}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{new Date(order.date).toLocaleDateString()} at {order.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{order.station}</span>
                    </div>
                    <div className="pt-2">
                      <h4 className="text-sm font-medium mb-1">Items:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {order.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <IndianRupee className="h-4 w-4" />
                      <span>₹{order.total}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orders;
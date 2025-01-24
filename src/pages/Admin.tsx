import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckSquare, XSquare, List } from "lucide-react";
import { Link } from "react-router-dom";

const Admin = () => {
  // Mock data - replace with actual data later
  const vendors = [
    {
      id: 1,
      name: "Biryani House",
      restaurantName: "Biryani House",
      email: "contact@biryanihouse.com",
      phone: "+91 9876543210",
      location: "New Delhi Railway Station",
      rdsThreshold: 5000,
      status: "accepted",
    },
    {
      id: 2,
      name: "Punjab Express",
      restaurantName: "Punjab Express",
      email: "info@punjabexpress.com",
      phone: "+91 9876543211",
      location: "Mumbai Central",
      rdsThreshold: 3000,
      status: "pending",
    },
  ];

  const orders = [
    {
      id: "ORD001",
      restaurant: "Biryani House",
      customer: "John Doe",
      items: ["Chicken Biryani", "Raita"],
      total: 250,
      status: "delivered",
      date: "2024-02-20",
    },
    {
      id: "ORD002",
      restaurant: "Punjab Express",
      customer: "Jane Smith",
      items: ["Butter Naan", "Paneer Butter Masala"],
      total: 300,
      status: "placed",
      date: "2024-02-19",
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
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        
        <Tabs defaultValue="vendors" className="space-y-6">
          <TabsList>
            <TabsTrigger value="vendors">Vendors</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
          </TabsList>

          <TabsContent value="vendors">
            <Card>
              <CardHeader>
                <CardTitle>Registered Vendors</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Restaurant Name</TableHead>
                      <TableHead>Owner Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>RDS Threshold</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vendors.map((vendor) => (
                      <TableRow key={vendor.id}>
                        <TableCell>{vendor.restaurantName}</TableCell>
                        <TableCell>{vendor.name}</TableCell>
                        <TableCell>{vendor.email}</TableCell>
                        <TableCell>{vendor.phone}</TableCell>
                        <TableCell>{vendor.location}</TableCell>
                        <TableCell>₹{vendor.rdsThreshold}</TableCell>
                        <TableCell>{vendor.status}</TableCell>
                        <TableCell>
                          <Select defaultValue={vendor.status}>
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="accepted">
                                <div className="flex items-center gap-2">
                                  <CheckSquare className="h-4 w-4 text-green-500" />
                                  Accept
                                </div>
                              </SelectItem>
                              <SelectItem value="rejected">
                                <div className="flex items-center gap-2">
                                  <XSquare className="h-4 w-4 text-red-500" />
                                  Reject
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>All Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Restaurant</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>{order.restaurant}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.items.join(", ")}</TableCell>
                        <TableCell>₹{order.total}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>{order.status}</TableCell>
                        <TableCell>
                          <Select defaultValue={order.status}>
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="placed">Placed</SelectItem>
                              <SelectItem value="preparing">Preparing</SelectItem>
                              <SelectItem value="ready">Ready</SelectItem>
                              <SelectItem value="delivered">Delivered</SelectItem>
                              <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const OrderManagement = () => {
  // Mock data - replace with actual data later
  const orders = [
    {
      orderNo: "37359",
      orderId: "#62746833",
      outletDetails: {
        name: "Outletid - 991",
        location: "Vatan Shri Bhojnalaya",
        vendor: "Zoop",
        contact: "null"
      },
      customerDetails: {
        name: "Testing",
        pnr: "9865321245",
        contact: "2709375375 51/29"
      },
      trainStation: "11841/KURJ KKDE EXP Station: LAR LALITPUR JN",
      paymentType: "CASH_N_DELIVERY",
      totalAmount: "₹ 1491",
      bookingDate: "22nd Jan 2025, 11:50 AM",
      deliveryDate: "9th Mar 2025, 10:05 PM",
      remarks: "NA",
      bookedFrom: "System",
      status: "Delivered",
      updatedBy: "14th Feb 2018, 12:50 AM",
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Active Orders</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order No</TableHead>
              <TableHead>Order Id</TableHead>
              <TableHead>Outlet Details</TableHead>
              <TableHead>Customer Details</TableHead>
              <TableHead>Train/Station</TableHead>
              <TableHead>Payment Type</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Booking Date</TableHead>
              <TableHead>Delivery Date(ETA)</TableHead>
              <TableHead>Remarks</TableHead>
              <TableHead>Booked From</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Updated By</TableHead>
              <TableHead>Change status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell>{order.orderNo}</TableCell>
                <TableCell>{order.orderId}</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div>{order.outletDetails.name}</div>
                    <div className="text-sm text-gray-500">{order.outletDetails.location}</div>
                    <div className="text-sm text-gray-500">Vendor: {order.outletDetails.vendor}</div>
                    <div className="text-sm text-gray-500">Contact: {order.outletDetails.contact}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div>{order.customerDetails.name}</div>
                    <div className="text-sm text-gray-500">PNR: {order.customerDetails.pnr}</div>
                    <div className="text-sm text-gray-500">{order.customerDetails.contact}</div>
                  </div>
                </TableCell>
                <TableCell>{order.trainStation}</TableCell>
                <TableCell>{order.paymentType}</TableCell>
                <TableCell>{order.totalAmount}</TableCell>
                <TableCell>{order.bookingDate}</TableCell>
                <TableCell>{order.deliveryDate}</TableCell>
                <TableCell>{order.remarks}</TableCell>
                <TableCell>{order.bookedFrom}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {order.status}
                  </span>
                </TableCell>
                <TableCell>{order.updatedBy}</TableCell>
                <TableCell>
                  <Select defaultValue={order.status.toLowerCase()}>
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
      </div>
    </div>
  );
};

export default OrderManagement;
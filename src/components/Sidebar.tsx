import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  CreditCard,
  Receipt,
  UserCircle,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    {
      title: "Dashboards",
      icon: <LayoutDashboard className="h-5 w-5" />,
      path: "/",
    },
    {
      title: "Vendors",
      icon: <Users className="h-5 w-5" />,
      path: "/vendors",
      submenu: [
        { title: "Add Vendors", path: "/vendors/add" },
        { title: "Manage Vendors", path: "/vendors/manage" },
        { title: "Vendor Performance", path: "/vendors/performance" },
      ],
    },
    {
      title: "Order",
      icon: <ClipboardList className="h-5 w-5" />,
      path: "/orders",
      submenu: [
        { title: "Track Order", path: "/orders/track" },
        { title: "Active Order", path: "/orders/active" },
        { title: "Pending Order", path: "/orders/pending" },
        { title: "Order Feedback", path: "/orders/feedback" },
      ],
    },
    {
      title: "Delivery Card",
      icon: <CreditCard className="h-5 w-5" />,
      path: "/delivery-card",
      submenu: [
        { title: "Apply Delivery Card", path: "/delivery-card/apply" },
        { title: "Manage Delivery Card", path: "/delivery-card/manage" },
      ],
    },
    {
      title: "Transaction",
      icon: <Receipt className="h-5 w-5" />,
      path: "/transactions",
      submenu: [
        { title: "Vendor Invoice", path: "/transactions/invoice" },
        { title: "Bill of Supply", path: "/transactions/bill" },
        { title: "Delivery Report", path: "/transactions/report" },
      ],
    },
    {
      title: "Customer",
      icon: <UserCircle className="h-5 w-5" />,
      path: "/customers",
    },
  ];

  return (
    <div className="w-64 bg-white border-r h-screen overflow-y-auto">
      <div className="p-4 border-b">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/10f77c52-bcff-4977-8b05-49c963ce05e6.png" alt="Food on Track" className="h-8" />
          <span className="font-bold text-xl">Food on Track</span>
        </Link>
      </div>
      <nav className="p-4">
        {menuItems.map((item) => (
          <div key={item.path} className="mb-2">
            <Link
              to={item.path}
              className={cn(
                "flex items-center justify-between p-2 rounded-lg hover:bg-gray-100",
                location.pathname === item.path && "bg-blue-50 text-blue-600"
              )}
            >
              <div className="flex items-center space-x-2">
                {item.icon}
                <span>{item.title}</span>
              </div>
              {item.submenu && <ChevronDown className="h-4 w-4" />}
            </Link>
            {item.submenu && (
              <div className="ml-6 mt-1 space-y-1">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.path}
                    to={subItem.path}
                    className={cn(
                      "block p-2 rounded-lg hover:bg-gray-100 text-sm",
                      location.pathname === subItem.path && "bg-blue-50 text-blue-600"
                    )}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
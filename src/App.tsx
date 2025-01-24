import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import VendorManagement from "./pages/VendorManagement";
import OrderManagement from "./pages/OrderManagement";
import DeliveryCard from "./pages/DeliveryCard";
import Transactions from "./pages/Transactions";
import Customer from "./pages/Customer";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="vendors/*" element={<VendorManagement />} />
            <Route path="orders/*" element={<OrderManagement />} />
            <Route path="delivery-card/*" element={<DeliveryCard />} />
            <Route path="transactions/*" element={<Transactions />} />
            <Route path="customers" element={<Customer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
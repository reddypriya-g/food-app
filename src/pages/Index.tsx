import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import RestaurantList from "@/components/RestaurantList";
import { User, List } from "lucide-react";
import { Link } from "react-router-dom";
import VendorRegistrationForm from "@/components/VendorRegistrationForm";

const Index = () => {
  const [pnr, setPnr] = useState("");
  const [station, setStation] = useState("");
  const { toast } = useToast();

  const handlePnrSubmit = async () => {
    if (pnr.length !== 10) {
      toast({
        title: "Invalid PNR",
        description: "Please enter a valid 10-digit PNR number",
        variant: "destructive",
      });
      return;
    }
    
    // Mock station data - replace with actual API call
    setStation("Delhi Junction");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-start">
                <span className="text-xl font-bold text-blue-700">IRCTC</span>
                <span className="text-sm text-gray-600">e-Catering</span>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-primary">Train Food Express</h1>
            </div>
            <div className="flex items-center space-x-6">
              <VendorRegistrationForm />
              <Link to="/orders" className="flex items-center space-x-2 text-gray-600 hover:text-primary">
                <List className="h-5 w-5" />
                <span>Orders</span>
              </Link>
              <Link to="/account" className="flex items-center space-x-2 text-gray-600 hover:text-primary">
                <User className="h-5 w-5" />
                <span>Account</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Order Food for Your Journey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="pnr" className="text-sm font-medium">
                  Enter PNR Number
                </label>
                <div className="flex gap-2">
                  <Input
                    id="pnr"
                    placeholder="10-digit PNR number"
                    value={pnr}
                    onChange={(e) => setPnr(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handlePnrSubmit}>Search</Button>
                </div>
              </div>

              {station && <RestaurantList station={station} />}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;

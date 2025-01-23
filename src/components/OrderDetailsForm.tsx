import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  alternatePhone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  coachNumber: z.string().min(1, "Coach number is required"),
  berthNumber: z.string().min(1, "Berth number is required"),
});

type OrderDetailsFormData = z.infer<typeof formSchema>;

interface OrderDetailsFormProps {
  onSubmit: (data: OrderDetailsFormData) => void;
  isLoading?: boolean;
}

const OrderDetailsForm = ({ onSubmit, isLoading }: OrderDetailsFormProps) => {
  const form = useForm<OrderDetailsFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      alternatePhone: "",
      coachNumber: "",
      berthNumber: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="alternatePhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alternate Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter alternate phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="coachNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Coach Number</FormLabel>
              <FormControl>
                <Input placeholder="e.g., B1, S4, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="berthNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Berth Number</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 23, 45, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Processing..." : "Proceed to Payment"}
        </Button>
      </form>
    </Form>
  );
};

export default OrderDetailsForm;
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SelectComponent, SelectData } from "./select";

const CryptoEnum = z.enum(["Bitcoin", "Ethereum", "Hedera"]);
type CryptoEnum = z.infer<typeof CryptoEnum>;
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Must have a valid amount",
  }),
  crypto: CryptoEnum,
});

export default function LoanForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      crypto: "Bitcoin",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  let data: SelectData = {
    placeholder: "",
    label: "Select Your Crypto Collateral",
    values: ["Bitcoin", "Ethereum", "Hedera"],
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <div>
              <FormItem>
                <FormLabel>Loan Amount</FormLabel>
                <FormControl>
                  <Input placeholder="$" {...field} />
                </FormControl>
                <FormDescription>
                  This is your desired amount for the loan in USD.
                </FormDescription>
                <FormMessage />
              </FormItem>
            </div>
          )}
        />
        <FormField
          control={form.control}
          name="crypto"
          render={({ field }) => (
            <div>
              <FormItem>
                <FormLabel>Crypto Type</FormLabel>
                <FormControl>
                  <SelectComponent data={data} ref={field.ref} />
                  {/* <Input placeholder="BTC/ETH" type="" {...field} /> */}
                </FormControl>
                <FormDescription>
                  This is your crypto collateral
                </FormDescription>
                <FormMessage />
              </FormItem>
            </div>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

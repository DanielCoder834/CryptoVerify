"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { TermSheet } from "@/components/term-sheet";

const formSchema = z.object({
  loanAmount: z.string().min(1, "Loan amount is required"),
  loanTerm: z.string().min(1, "Loan term is required"),
  purpose: z.string().min(1, "Loan purpose is required"),
  income: z.string().min(1, "Annual income is required"),
  name: z.string().min(1, "Full name is required"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(1, "Phone number is required"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

const defaultValues = {
  loanAmount: "",
  loanTerm: "",
  purpose: "",
  income: "",
  name: "",
  address: "",
  phone: "",
  terms: false,
};

export function LoanTab() {
  const [showTermSheet, setShowTermSheet] = useState(false);
  const [loanDetails, setLoanDetails] = useState<any>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Generate a random loan ID
    const loanId = Math.floor(Math.random() * 90000000) + 10000000;

    // Calculate arbitrage price (70% of loan amount)
    const arbitragePrice = Number.parseFloat(values.loanAmount) * 0.7;

    const loanDetails = {
      loanId: loanId.toString(),
      accountNumber: `1234 ${Math.floor(Math.random() * 9999)} ${Math.floor(
        Math.random() * 9999
      )} ${Math.floor(Math.random() * 9999)}`,
      borrowerName: values.name,
      address: values.address,
      phoneNumber: values.phone,
      loanAmount: Number.parseFloat(values.loanAmount).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      }),
      loanType: "Interest rate",
      interestRate: "100%",
      fromDate: new Date().toLocaleDateString(),
      dueDate: new Date(
        new Date().setFullYear(
          new Date().getFullYear() + Number.parseInt(values.loanTerm) / 12
        )
      ).toLocaleDateString(),
      riskRating: "600/700",
      status: "Approved",
      arbitragePrice: arbitragePrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };

    setLoanDetails(loanDetails);
    setShowTermSheet(true);

    fetch("http://localhost:8080/api/form", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loanDetails),
    });
  }

  const resetForm = () => {
    form.reset(defaultValues);
    setShowTermSheet(false);
    setLoanDetails(null);
  };

  if (showTermSheet && loanDetails) {
    return <TermSheet loanDetails={loanDetails} onBack={resetForm} />;
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-[#f1f2f6] p-6">
        <h2 className="text-lg font-medium mb-6">Loan Application</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
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
                      <Input placeholder="Enter phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="loanAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loan Amount</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter loan amount"
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="loanTerm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loan Term</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select loan term" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="12">12 months</SelectItem>
                      <SelectItem value="24">24 months</SelectItem>
                      <SelectItem value="36">36 months</SelectItem>
                      <SelectItem value="48">48 months</SelectItem>
                      <SelectItem value="60">60 months</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="purpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loan Purpose</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select loan purpose" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="home">Home Improvement</SelectItem>
                      <SelectItem value="debt">Debt Consolidation</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="income"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Annual Income</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter annual income"
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-[#f1f2f6] p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Terms and Conditions</FormLabel>
                    <FormDescription>
                      By checking this box, you agree to our terms of service
                      and privacy policy. You acknowledge that your loan
                      application will be subject to credit approval and that
                      the final loan terms may vary based on your
                      creditworthiness.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-[#939ef3] hover:bg-[#7f63f1]"
            >
              Submit Application
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

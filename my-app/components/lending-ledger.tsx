"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Toaster } from "@/components/ui/sonner"

export function LendingLedger() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const loanData = {
    userId: "123129429",
    accountNumber: "1234 5652 7890-0987",
    borrowerName: "Small Mason Dixon",
    address: "95 Brooklyn Ave\nMA-02128, US",
    phoneNumber: "(202) 456-1111",
    loanAmount: "$10,000",
    loanTitle: "Business",
    interestRate: "100%",
    fromDate: "12/15/2020",
    dueDate: "12/15/2030",
    riskRating: "800/750",
    status: "Active",
  };

  const copyToClipboard = (key: string, value: string) => {
    navigator.clipboard.writeText(`${key}: ${value}`).then(() => {
      setCopiedField(key);
      // toast({
      //   title: "Copied to clipboard",
      //   description: `${key}: ${value}`,
      // });
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lending Ledger</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Field</TableHead>
                <TableHead>Value</TableHead>
                <TableHead className="w-[100px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(loanData).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell className="font-medium capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </TableCell>
                  <TableCell>{value}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(key, value)}
                    >
                      {copiedField === key ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      <span className="sr-only">Copy</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

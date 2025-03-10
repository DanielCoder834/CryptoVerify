"use client";
import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, HandCoins } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function LoanDetails({ slug }: any) {
  const [loans, setLoans] = useState<any>([]);
  const router = useRouter();

  function acceptEndPoint() {
    let amount = loans.find((loan: any) => loan.loanId == slug)?.loanAmount;

    fetch("http://localhost:8080/api/form-delete-accept", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ loanId: slug, loanAmount: amount }),
    });
    router.back();
  }
  function rejectEndPoint() {
    let amount = loans.find((loan: any) => loan.loanId == slug)?.loanAmount;

    fetch("http://localhost:8080/api/form-delete-refund", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ loanId: slug, loanAmount: amount }),
    });
    router.back();
  }
  // console.log(slug);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/form");
        setLoans(await res.json());
      } catch (e) {
        console.error(e);
        throw new Error("error in get request");
      }
    };

    fetchData();
  }, [setLoans]);
  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Top Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-full bg-blue-50 p-3">
                <DollarSign className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Your holding</p>
                <p className="text-2xl font-bold">$160,000.00</p>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-50 p-3">
                  <HandCoins className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Loan funds</p>
                  <p className="text-2xl font-bold">$5,069,231.00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold">Jason Bourne</span>
                <Avatar>
                  <AvatarImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-23%20at%202.24.29%E2%80%AFAM-VqvJRY6lHBVq8ehq2IcqUElqYrkXmo.png"
                    alt="Profile"
                  />
                  <AvatarFallback>JB</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Loan Details Card */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">Loan details</h2>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <DetailRow label="Loan ID" value={slug} />
              <DetailRow label="Account number" value="1234 4567 7890 0987" />
              <DetailRow label="Borrower name" value="Jason Mason Dason" />
              <DetailRow
                label="Address"
                value="59 Shepard St, Cambridge, MA 02138, US"
              />
              <DetailRow label="Phone number" value="(202) 456-1111" />
              <DetailRow
                label="Loan amount"
                value={
                  loans &&
                  loans.find((loan: any) => loan.loanId == slug)?.loanAmount
                }
              />
              <DetailRow label="Loan type" value="Interest rate" />
              <DetailRow label="Interest rate" value="100%" />
              <DetailRow label="From date" value="12/31/2020" />
              <DetailRow
                label="Due date"
                value={
                  loans &&
                  loans.find((loan: any) => loan.loanId == slug)?.dueDate
                }
              />
              <DetailRow label="Risk rating" value="600/700" />
              <DetailRow
                label="Status"
                value={
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-600 border-green-200"
                  >
                    {loans &&
                      loans.find((loan: any) => loan.loanId == slug)?.status}
                  </Badge>
                }
              />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="h-full mt-[3rem] flex">
        <div className="w-[50%] mx-20">
          {" "}
          <Button className="w-full bg-green-800" onClick={acceptEndPoint}>
            Accept
          </Button>
        </div>
        <div className="w-[50%] mx-20">
          <Button className="w-full bg-red-800" onClick={rejectEndPoint}>
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex justify-between py-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

export function LoansList() {
  const [loans, setLoans] = useState<any>([]);

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
    <Card>
      <CardHeader>
        <CardTitle>Loans</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4" key={2}>
          {loans &&
            loans.map((loan: any) => (
              <div
                key={loan.loanId}
                className="flex items-center justify-between space-x-4"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Loan #{loan.loanId}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Due {loan.dueDate}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="font-mono">
                    {loan.loanAmount.toLocaleString()}
                  </div>
                  <Badge
                  // variant={
                  //   loan.status === "Approved"
                  //     ? "success"
                  //     : loan.status === "Denied"
                  //     ? "destructive"
                  //     : "secondary"
                  // }
                  >
                    {loan.status}
                  </Badge>
                  <Link
                    href={`/admin/loan-info/${loan.loanId}`}
                    id="services-link"
                  >
                    <Button variant="secondary" size="sm">
                      Review
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}

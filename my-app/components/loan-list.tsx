import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const loans = [
  {
    id: "243242432",
    amount: 102000,
    status: "Approved",
    dueDate: "2/12/2022",
  },
  {
    id: "32425235",
    amount: 520000,
    status: "Denied",
    dueDate: "4/11/2025",
  },
  {
    id: "4346546",
    amount: 547231,
    status: "Pending",
    dueDate: "12/12/2030",
  },
  {
    id: "657567567",
    amount: 1300000,
    status: "Pending",
    dueDate: "1/1/2019",
  },
  {
    id: "7876868",
    amount: 1300000,
    status: "Denied",
    dueDate: "12/30/3000",
  },
  {
    id: "123981378",
    amount: 1300000,
    status: "Approved",
    dueDate: "01/23/4567",
  },
];

export function LoansList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Loans</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {loans.map((loan) => (
            <div
              key={loan.id}
              className="flex items-center justify-between space-x-4"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Loan #{loan.id}
                </p>
                <p className="text-sm text-muted-foreground">
                  Due {loan.dueDate}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="font-mono">${loan.amount.toLocaleString()}</div>
                <Badge
                  variant={
                    loan.status === "Approved"
                      ? "success"
                      : loan.status === "Denied"
                      ? "destructive"
                      : "secondary"
                  }
                >
                  {loan.status}
                </Badge>
                <Button variant="secondary" size="sm">
                  Review
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

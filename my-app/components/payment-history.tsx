import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const payments = [
  {
    id: "01239213",
    date: "29 September 2024 09:30",
    amount: 500,
  },
  {
    id: "2498234",
    date: "28 September 2024 11:25",
    amount: 34.8,
  },
  {
    id: "8912123",
    date: "27 September 2024 21:10",
    amount: 194.25,
  },
];

export function PaymentHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment history</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {payments.map((payment) => (
            <div key={payment.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-primary/10">
                  {payment.id.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Loan #{payment.id}
                </p>
                <p className="text-sm text-muted-foreground">{payment.date}</p>
              </div>
              <div className="ml-auto font-medium">
                ${payment.amount.toFixed(2)}
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="font-medium">Balance due this month</div>
            <div className="font-medium">$264.35</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

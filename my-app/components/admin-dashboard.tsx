import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from "./overview";
import { CryptoHoldings } from "./crypto-holding";
import { LoansList } from "./loan-list";
import { PaymentHistory } from "./payment-history";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col gap-4 p-4 md:p-8">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Your holding</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">$</span>
              <div className="text-2xl font-bold">160,000.00</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Loan funds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">$</span>
              <div className="text-2xl font-bold">5,069,231.00</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-23%20at%201.49.15%E2%80%AFAM-ok9noWD6Aw3vqI70ReJiK7iVAeOlxo.png"
                  alt="User"
                />
                <AvatarFallback>JB</AvatarFallback>
              </Avatar>
              <div className="font-semibold">Jason Bourne</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <CryptoHoldings />
          <LoansList />
        </div>
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Balance due</CardTitle>
            </CardHeader>
            <CardContent>
              <Overview />
            </CardContent>
          </Card>
          <PaymentHistory />
        </div>
      </div>
    </div>
  );
}

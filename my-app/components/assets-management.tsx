import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineCharts } from "@/components/line-charts"

export function AssetsManagement() {
  const loans = [
    { id: "45452342", amount: "$102,000", status: "Approved" },
    { id: "45467345", amount: "$250,000", status: "Pending" },
    { id: "45468645", amount: "$647,251", status: "Pending" },
    { id: "89756745", amount: "$1,360,000", status: "Pending" },
    { id: "67657890", amount: "$1,360,000", status: "Pending" },
    { id: "12398175", amount: "$1,360,000", status: "Pending" },
  ]

  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <CardTitle className="text-xl font-bold">Assets Under Management</CardTitle>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-[#616371]">$140,000,000</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#616371]">$5,069,231.00</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div>
            <div className="text-sm font-medium mb-1">BTC</div>
            <div className="text-2xl font-bold">$10,000</div>
          </div>
          <div>
            <div className="text-sm font-medium mb-1">ETH</div>
            <div className="text-2xl font-bold">$50,000</div>
          </div>
          <div>
            <div className="text-sm font-medium mb-1">USDT</div>
            <div className="text-2xl font-bold">$100,000</div>
          </div>
        </div>
        <div className="h-[200px] mb-8">
          <LineCharts />
        </div>
        <div className="space-y-4">
          <div className="text-lg font-semibold">Total Loans</div>
          {loans.map((loan) => (
            <div key={loan.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-[#616371]">Loan #{loan.id}</span>
                <span className="font-medium">{loan.amount}</span>
              </div>
              <Button variant="outline" className="bg-[#939ef3] text-white hover:bg-[#939ef3]/90">
                {loan.status}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


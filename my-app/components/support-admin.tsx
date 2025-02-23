import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function SupportAdmin() {
  const adminData = {
    userId: "123129429",
    accountNumber: "0987 6754 5432 1098",
    userName: "Mark Johnson",
    address: "1650 Pennsylvania Avenue NW\nWashington, DC 20502, US",
    loanAmount: "$999,999,999.99",
    loanTitle: "Business",
    interestRate: "2%",
    fromDate: "2/2/2020",
    dueDate: "12/2/2030",
    riskRating: "800/750",
    status: "Pending",
  }

  return (
    <Card className="max-w-3xl">
      <CardHeader>
        <CardTitle>Support Admin</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {Object.entries(adminData).map(([key, value]) => (
            <div key={key} className="space-y-1.5">
              <Label className="text-[#616371] capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</Label>
              <p className="text-[#363844]">{value}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <Button className="bg-[#ff0a0a] hover:bg-[#ff0a0a]/90">Deny</Button>
          <Button className="bg-[#0aff1a] hover:bg-[#0aff1a]/90">Approve</Button>
          <Button className="bg-[#0790ff] hover:bg-[#0790ff]/90">Review</Button>
        </div>
      </CardContent>
    </Card>
  )
}


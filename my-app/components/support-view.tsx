import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SupportView() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Loan Request</h2>
      <div className="grid gap-6">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="loan-id">Loan ID</Label>
            <Input id="loan-id" value="123128429" readOnly />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="borrower-name">Borrower name</Label>
            <Input id="borrower-name" value="Penny Grace Poe" readOnly />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" value="1600 Pennsylvania Avenue NW Washington, DC 20500, US" readOnly />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input id="phone" value="1-800-CAL-1234" readOnly />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="loan-amount">Loan amount</Label>
            <Input id="loan-amount" value="$500,000.00" readOnly />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="interest">Interest rate</Label>
            <Input id="interest" value="2%" readOnly />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="risk">Risk rating</Label>
            <Input id="risk" value="600/700" readOnly />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="destructive" className="bg-[#ff0a0a] hover:bg-[#ff0a0a]/90">
            Deny
          </Button>
          <Button variant="secondary" className="bg-[#0790ff] text-white hover:bg-[#0790ff]/90">
            Review
          </Button>
          <Button variant="default" className="bg-[#0aff1a] hover:bg-[#0aff1a]/90">
            Approve
          </Button>
        </div>
      </div>
    </div>
  )
}


import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TermSheetProps {
  loanDetails: {
    loanId: string
    accountNumber: string
    borrowerName: string
    address: string
    phoneNumber: string
    loanAmount: string
    loanType: string
    interestRate: string
    fromDate: string
    dueDate: string
    riskRating: string
    status: string
    arbitragePrice: string
  }
  onBack: () => void
}

export function TermSheet({ loanDetails, onBack }: TermSheetProps) {
  return (
    <div className="space-y-6">
      <Button variant="ghost" className="mb-4" onClick={onBack}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Application
      </Button>

      <div className="rounded-lg border border-[#f1f2f6] p-6">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Loan Details</h2>
            <p className="text-[#8e8e99]">Term Sheet</p>
          </div>
          <div className="text-right">
            <p className="text-[#55ff00] font-medium">{loanDetails.status}</p>
            <p className="text-[#8e8e99] text-sm">Risk Rating: {loanDetails.riskRating}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <p className="text-[#8e8e99] text-sm mb-1">Loan ID</p>
            <p className="font-medium">{loanDetails.loanId}</p>
          </div>
          <div>
            <p className="text-[#8e8e99] text-sm mb-1">Account number</p>
            <p className="font-medium">{loanDetails.accountNumber}</p>
          </div>
          <div>
            <p className="text-[#8e8e99] text-sm mb-1">Borrower name</p>
            <p className="font-medium">{loanDetails.borrowerName}</p>
          </div>
          <div>
            <p className="text-[#8e8e99] text-sm mb-1">Address</p>
            <p className="font-medium">{loanDetails.address}</p>
          </div>
          <div>
            <p className="text-[#8e8e99] text-sm mb-1">Phone number</p>
            <p className="font-medium">{loanDetails.phoneNumber}</p>
          </div>
          <div>
            <p className="text-[#8e8e99] text-sm mb-1">Loan amount</p>
            <p className="font-medium">{loanDetails.loanAmount}</p>
          </div>
          <div>
            <p className="text-[#8e8e99] text-sm mb-1">Loan type</p>
            <p className="font-medium">{loanDetails.loanType}</p>
          </div>
          <div>
            <p className="text-[#8e8e99] text-sm mb-1">Interest rate</p>
            <p className="font-medium">{loanDetails.interestRate}</p>
          </div>
          <div>
            <p className="text-[#8e8e99] text-sm mb-1">From date</p>
            <p className="font-medium">{loanDetails.fromDate}</p>
          </div>
          <div>
            <p className="text-[#8e8e99] text-sm mb-1">Due date</p>
            <p className="font-medium">{loanDetails.dueDate}</p>
          </div>
          <div className="col-span-2 border-t border-[#f1f2f6] pt-6">
            <p className="text-[#8e8e99] text-sm mb-1">Arbitrage Price (70% of Loan Amount)</p>
            <p className="font-medium text-xl text-[#939ef3]">{loanDetails.arbitragePrice}</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#f1f2f6]">
          <Button className="w-full bg-[#939ef3] hover:bg-[#7f63f1]">Accept Terms & Proceed</Button>
        </div>
      </div>
    </div>
  )
}


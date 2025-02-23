import { cn } from "@/lib/utils"

export function AdminView() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Total Loans</h2>
      <div className="grid gap-4">
        <LoanDetailRow label="User ID" value="123128429" />
        <LoanDetailRow label="Account number" value="1234 4567 7890 0987" />
        <LoanDetailRow label="Borrower name" value="Jason Mason Dason" />
        <LoanDetailRow label="Address" value="59 Shepard St, Cambridge, MA 02138, US" />
        <LoanDetailRow label="Phone number" value="(202) 456-1111" />
        <LoanDetailRow label="Loan amount" value="$102,000" />
        <LoanDetailRow label="Loan type" value="Interest rate" />
        <LoanDetailRow label="Interest rate" value="100%" />
        <LoanDetailRow label="From date" value="12/31/2020" />
        <LoanDetailRow label="Due date" value="12/31/2030" />
        <LoanDetailRow label="Risk rating" value="600/700" />
        <LoanDetailRow label="Status" value="Approved" valueClassName="text-[#55ff00] font-medium" />
      </div>
    </div>
  )
}

function LoanDetailRow({
  label,
  value,
  valueClassName,
}: {
  label: string
  value: string
  valueClassName?: string
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-[#f1f2f6] last:border-0">
      <div className="text-[#616371]">{label}</div>
      <div className={cn("text-[#1a1a1a]", valueClassName)}>{value}</div>
    </div>
  )
}


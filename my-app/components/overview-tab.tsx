import { LineChart } from "@/components/line-chart"

export function OverviewTab() {
  return (
    <div className="grid gap-6">
      {/* Crypto Holdings Section */}
      <div className="rounded-lg border border-[#f1f2f6] p-6">
        <h2 className="text-lg font-medium mb-4">Crypto Holdings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">BTC</p>
              <p className="text-sm text-[#8e8e99]">Bitcoin</p>
            </div>
            <p className="font-medium">$32,000</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">USD</p>
              <p className="text-sm text-[#8e8e99]">USD</p>
            </div>
            <p className="font-medium">$8,500</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">HBAR</p>
              <p className="text-sm text-[#8e8e99]">Hedera</p>
            </div>
            <p className="font-medium">$8,500</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">BSL</p>
              <p className="text-sm text-[#8e8e99]">BankSocial</p>
            </div>
            <p className="font-medium">$8,500</p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="rounded-lg border border-[#f1f2f6] p-6">
        <LineChart />
      </div>

      {/* Loans Section */}
      <div className="rounded-lg border border-[#f1f2f6] p-6">
        <h2 className="text-lg font-medium mb-4">Loans</h2>
        <div className="space-y-4">
          {[
            { id: "LOAN#1234567", amount: "$120,000", status: "active" },
            { id: "LOAN#7654321", amount: "$85,000", status: "active" },
            { id: "LOAN#9876543", amount: "$67,000", status: "active" },
          ].map((loan) => (
            <div key={loan.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{loan.id}</p>
                <p className="text-sm text-[#8e8e99]">{loan.amount}</p>
              </div>
              <button className="px-4 py-1.5 rounded-full bg-[#939ef3] text-white text-sm">{loan.status}</button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment History */}
      <div className="rounded-lg border border-[#f1f2f6] p-6">
        <h2 className="text-lg font-medium mb-4">Payment History</h2>
        <div className="space-y-4">
          {[
            { id: "INV#123", date: "2024-02-22", amount: "$890" },
            { id: "INV#122", date: "2024-02-21", amount: "$1,200" },
            { id: "INV#121", date: "2024-02-20", amount: "$750" },
          ].map((payment) => (
            <div key={payment.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{payment.id}</p>
                <p className="text-sm text-[#8e8e99]">{payment.date}</p>
              </div>
              <p className="font-medium">{payment.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


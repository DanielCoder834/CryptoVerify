import { LineChart } from "@/components/line-chart"

export function CryptoTab() {
  return (
    <div className="space-y-6">
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
              <p className="font-medium">ETH</p>
              <p className="text-sm text-[#8e8e99]">Ethereum</p>
            </div>
            <p className="font-medium">$8,500</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-[#f1f2f6] p-6">
        <LineChart />
      </div>
    </div>
  )
}


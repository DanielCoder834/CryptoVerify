"use client"

import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { cn } from "@/lib/utils"

const chartData = [
  { date: "16", value1: 30, value2: 35 },
  { date: "17", value1: 25, value2: 40 },
  { date: "18", value1: 45, value2: 30 },
  { date: "19", value1: 30, value2: 45 },
  { date: "20", value1: 55, value2: 35 },
  { date: "21", value1: 40, value2: 40 },
]

const assets = [
  { name: "BTC", amount: "$30,000,000" },
  { name: "USD", amount: "$100,000,000" },
  { name: "HBAR", amount: "$15,000,000" },
  { name: "BSL", amount: "$15,000,000" },
]

const loans = [
  { id: "#242424242", amount: "$102,000", status: "Approved" },
  { id: "#32429235", amount: "$520,000", status: "Denied" },
  { id: "#4146546", amount: "$547,231", status: "Pending" },
  { id: "#65756756", amount: "$1,300,000", status: "Pending" },
  { id: "#7979868", amount: "$1,300,000", status: "Denied" },
  { id: "#123981378", amount: "$1,300,000", status: "Approved" },
]

export function RiskAnalysisView() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Assets and Loans */}
      <div className="space-y-6">
        {/* Assets Under Management */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Assets Under Management</h2>
          <div className="space-y-4">
            {assets.map((asset) => (
              <div key={asset.name} className="flex justify-between items-center">
                <span className="text-[#616371]">{asset.name}</span>
                <span className="font-medium">{asset.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Total Loans */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Total Loans</h2>
          <div className="space-y-4">
            {loans.map((loan) => (
              <div key={loan.id} className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-sm text-[#616371]">Loan {loan.id}</div>
                  <div className="font-medium">{loan.amount}</div>
                </div>
                <LoanStatusBadge status={loan.status} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Equity Curve</h2>
        <ChartContainer
          config={{
            line1: {
              label: "Growth",
              color: "hsl(var(--chart-1))",
            },
            line2: {
              label: "Revenue",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[400px]"
        >
          <LineChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={10} stroke="#9da0b6" />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              stroke="#9da0b6"
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<ChartTooltipContent />} />
            <Line type="monotone" dataKey="value1" stroke="var(--color-line1)" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="value2" stroke="var(--color-line2)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  )
}

function LoanStatusBadge({ status }: { status: string }) {
  const colors = {
    Approved: "bg-[#0aff1a]/10 text-[#0aff1a]",
    Denied: "bg-[#ff0a0a]/10 text-[#ff0a0a]",
    Pending: "bg-[#0790ff]/10 text-[#0790ff]",
    Review: "bg-[#939ef3]/10 text-[#939ef3]",
  }

  return (
    <Badge variant="secondary" className={cn("rounded-full font-medium", colors[status as keyof typeof colors])}>
      {status}
    </Badge>
  )
}


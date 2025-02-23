"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
]

const loans = [
  {
    id: "KASD142342",
    amount: "$102,000",
    status: "Approved",
    date: "2024-02-23",
    borrower: "Small Mason Dixon",
    risk: "Low",
  },
  {
    id: "ALSD452342",
    amount: "$420,000",
    status: "Pending",
    date: "2024-02-22",
    borrower: "Mark Johnson",
    risk: "Medium",
  },
  {
    id: "PASD445",
    amount: "$547,255",
    status: "Pending",
    date: "2024-02-21",
    borrower: "Sarah Williams",
    risk: "High",
  },
  {
    id: "XKTKT7567",
    amount: "$1,300,000",
    status: "Pending",
    date: "2024-02-20",
    borrower: "James Brown",
    risk: "Medium",
  },
  {
    id: "PKTK980",
    amount: "$1,350,000",
    status: "Pending",
    date: "2024-02-19",
    borrower: "Emily Davis",
    risk: "Low",
  },
  {
    id: "ETTK891375",
    amount: "$1,500,000",
    status: "Pending",
    date: "2024-02-18",
    borrower: "Michael Wilson",
    risk: "High",
  },
]

export function RiskAnalysis() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Assets Under Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {["BTC", "ETH", "USDT"].map((asset) => (
              <div key={asset} className="space-y-1">
                <p className="text-sm text-[#616371]">{asset}</p>
                <p className="text-lg font-medium">$10,000</p>
              </div>
            ))}
          </div>

          <div className="h-[300px] mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#939ef3" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Total Loans</h3>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Loan ID</TableHead>
                    <TableHead>Borrower</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loans.map((loan) => (
                    <TableRow key={loan.id}>
                      <TableCell className="font-medium">{loan.id}</TableCell>
                      <TableCell>{loan.borrower}</TableCell>
                      <TableCell>{loan.amount}</TableCell>
                      <TableCell>{loan.date}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                            loan.risk === "High"
                              ? "bg-red-100 text-red-700"
                              : loan.risk === "Medium"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                          }`}
                        >
                          {loan.risk}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          className={`${
                            loan.status === "Approved"
                              ? "bg-[#0aff1a] hover:bg-[#0aff1a]/90"
                              : "bg-[#939ef3] hover:bg-[#939ef3]/90"
                          } text-white`}
                        >
                          {loan.status}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


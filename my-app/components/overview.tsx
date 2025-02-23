"use client";
import SimpleLineChart, {
  SimpleLineChartBankData,
} from "@/components/ui/simpleLineChart";

const data: SimpleLineChartBankData[] = [
  { name: "Jan", profit: 500000, amt: 600000 },
  { name: "Feb", profit: 520000, amt: 620000 },
  { name: "Mar", profit: 510000, amt: 615000 },
  { name: "Apr", profit: 550000, amt: 650000 },
  { name: "May", profit: 580000, amt: 680000 },
  { name: "Jun", profit: 600000, amt: 700000 },
  { name: "Jul", profit: 650000, amt: 750000 },
  { name: "Aug", profit: 670000, amt: 770000 },
  { name: "Sep", profit: 640000, amt: 740000 },
  { name: "Oct", profit: 620000, amt: 720000 },
  { name: "Nov", profit: 610000, amt: 710000 },
  { name: "Dec", profit: 590000, amt: 690000 },
];

export function Overview() {
  return (
    <div className="h-[300px]">
      <SimpleLineChart data={data} />
    </div>
  );
}

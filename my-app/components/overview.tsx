"use client";
import SimpleLineChart, {
  SimpleLineChartData,
} from "@/components/ui/simpleLineChart";

const data: SimpleLineChartData[] = [
  { name: "Jan", uv: 12.5, pv: 200, amt: 300 },
  { name: "Feb", uv: 15.0, pv: 250, amt: 350 },
  { name: "Mar", uv: 14.8, pv: 230, amt: 330 },
  { name: "Apr", uv: 18.5, pv: 280, amt: 380 },
  { name: "May", uv: 20.0, pv: 300, amt: 400 },
  { name: "Jun", uv: 22.2, pv: 320, amt: 420 },
  { name: "Jul", uv: 24.8, pv: 350, amt: 450 },
  { name: "Aug", uv: 25.0, pv: 360, amt: 460 },
  { name: "Sep", uv: 23.6, pv: 340, amt: 440 },
  { name: "Oct", uv: 21.3, pv: 310, amt: 410 },
  { name: "Nov", uv: 19.1, pv: 290, amt: 390 },
  { name: "Dec", uv: 17.9, pv: 270, amt: 370 },
];

export function Overview() {
  return (
    <div className="h-[300px]">
      <SimpleLineChart data={data} />
    </div>
  );
}

import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "February",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "May",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "June",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "July",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "August",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Example() {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <LineChart data={data} margin={{ top: 20 }} accessibilityLayer>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        ></Line>
        <Line type="monotone" dataKey="uv" stroke="#82ca9d"></Line>
      </LineChart>
    </ResponsiveContainer>
  );
}

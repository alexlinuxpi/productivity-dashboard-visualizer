
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BarChartProps {
  title: string;
  data: any[];
  xAxisDataKey: string;
  bars: {
    dataKey: string;
    name: string;
    color: string;
  }[];
  height?: number;
}

export function BarChart({
  title,
  data,
  xAxisDataKey,
  bars,
  height = 300,
}: BarChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ width: "100%", height }}>
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart
              width={500}
              height={height}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={xAxisDataKey} />
              <YAxis />
              <Tooltip />
              <Legend />
              {bars.map((bar, index) => (
                <Bar
                  key={index}
                  dataKey={bar.dataKey}
                  name={bar.name}
                  fill={bar.color}
                />
              ))}
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

import { Pie, PieChart, LabelList, Tooltip } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { MoneyChartProps } from "@/interfaces/MoneyChartProps";

export function MoneyChart({ data }: { data: MoneyChartProps }) {
  const chartData = [
    { asset: "Obligacje", money: data.bonds, fill: "#227755" },
    { asset: "ETF", money: data.etf, fill: "#d70000" },
  ];

  const total = chartData.reduce((sum, d) => sum + d.money, 0);

  return (
    <Card className="flex flex-col w-80 xl:flex-1">
      <CardHeader className="text-center items-center pb-0">
        <CardTitle>Rozkład oszczędności</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <div className="mx-auto aspect-square flex justify-center items-center max-h-[250px] w-full">
          <PieChart width={250} height={250}>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  const percent = ((data.money / total) * 100).toFixed(1);
                  return (
                    <div className="bg-background p-2 rounded shadow text-sm">
                      <div>{data.asset}</div>
                      <div>
                        {data.money} zł ({percent}%)
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Pie
              data={chartData}
              dataKey="money"
              cx="50%"
              cy="50%"
              outerRadius="80%"
              paddingAngle={5}
              cornerRadius={8}
              labelLine={false}
            >
              <LabelList
                dataKey="money"
                position="inside"
                stroke="none"
                className="fill-white text-sm"
                formatter={(value: number) => {
                  const percent = ((value / total) * 100).toFixed(0);
                  return `${percent}%`;
                }}
              />
            </Pie>
          </PieChart>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 text-sm">
        {chartData.map((entry) => {
          const percent = ((entry.money / total) * 100).toFixed(0);
          return (
            <div key={entry.asset} className="flex items-center gap-2 w-full">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: entry.fill }}
              />
              <span className="text-muted-foreground">{entry.asset}</span>
              <span className="ml-auto font-medium">{percent}%</span>
            </div>
          );
        })}
      </CardFooter>
    </Card>
  );
}

export default MoneyChart;

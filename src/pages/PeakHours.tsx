
import { DashboardLayout } from "@/components/DashboardLayout";
import { LineChart } from "@/components/charts/LineChart";
import { BarChart } from "@/components/charts/BarChart";
import { StatCard } from "@/components/StatCard";
import { peakHoursData } from "@/data/mockData";
import { Clock, TrendingUp, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const PeakHours = () => {
  // Find peak hour
  const peakHour = [...peakHoursData].sort((a, b) => b.count - a.count)[0];
  
  // Calculate avg and identify hours above avg
  const totalCount = peakHoursData.reduce((acc, item) => acc + item.count, 0);
  const avgCount = totalCount / peakHoursData.length;
  
  const hoursWithTrend = peakHoursData.map((hour, index, array) => {
    let trend = 0;
    if (index > 0) {
      trend = ((hour.count - array[index - 1].count) / array[index - 1].count) * 100;
    }
    
    return {
      ...hour,
      trend: trend.toFixed(1),
      isAboveAvg: hour.count > avgCount
    };
  });

  return (
    <DashboardLayout title="Horários de Maior Movimento">
      <div className="animate-fade-in">
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <StatCard
            title="Horário de Pico"
            value={peakHour.time}
            icon={<Clock className="h-4 w-4" />}
            description={`${peakHour.count} processos`}
          />
          <StatCard
            title="Média por Hora"
            value={avgCount.toFixed(0)}
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <StatCard
            title="Variação Máxima"
            value="21%"
            icon={<AlertCircle className="h-4 w-4" />}
            description="Entre 09h e 10h"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <LineChart
            title="Fluxo de Processos por Horário"
            data={peakHoursData}
            xAxisDataKey="time"
            lines={[
              { dataKey: "count", name: "Quantidade", color: "#2563eb" },
            ]}
          />
          <BarChart
            title="Volume por Horário"
            data={peakHoursData}
            xAxisDataKey="time"
            bars={[
              { dataKey: "count", name: "Processos", color: "#7c3aed" },
            ]}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Análise Detalhada por Horário</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Horário</TableHead>
                  <TableHead className="text-right">Processos</TableHead>
                  <TableHead className="text-right">Variação</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {hoursWithTrend.map((hour) => (
                  <TableRow key={hour.time}>
                    <TableCell className="font-medium">{hour.time}</TableCell>
                    <TableCell className="text-right">{hour.count}</TableCell>
                    <TableCell className="text-right">
                      {hour.trend !== "0.0" && (
                        <Badge variant={parseFloat(hour.trend) > 0 ? "success" : "destructive"}>
                          {parseFloat(hour.trend) > 0 ? "+" : ""}{hour.trend}%
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {hour.isAboveAvg ? (
                        <Badge variant="default" className="bg-amber-500">Alto Volume</Badge>
                      ) : (
                        <Badge variant="outline">Volume Normal</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PeakHours;

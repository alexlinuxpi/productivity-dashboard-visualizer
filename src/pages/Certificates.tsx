
import { DashboardLayout } from "@/components/DashboardLayout";
import { PieChart } from "@/components/charts/PieChart";
import { BarChart } from "@/components/charts/BarChart";
import { certificateTypes, certificateStats } from "@/data/mockData";
import { StatCard } from "@/components/StatCard";
import { FileText, TrendingUp, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Certificates = () => {
  // Transform certificate data for bar chart
  const chartData = certificateTypes.map((cert) => ({
    name: cert.name,
    quantidade: cert.value,
  }));

  // Calculate percentages
  const total = certificateTypes.reduce((acc, item) => acc + item.value, 0);
  const withPercentages = certificateTypes.map((item) => ({
    ...item,
    percentage: ((item.value / total) * 100).toFixed(1),
  }));

  return (
    <DashboardLayout title="Certidões Emitidas">
      <div className="animate-fade-in">
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <StatCard
            title="Total de Certidões"
            value={certificateStats.totalIssued}
            icon={<FileText className="h-4 w-4" />}
          />
          <StatCard
            title="Mais Solicitada"
            value={certificateStats.mostRequested}
            icon={<Award className="h-4 w-4" />}
            description={`${certificateTypes[0].value} emissões`}
          />
          <StatCard
            title="Crescimento Mensal"
            value={`${certificateStats.percentageIncrease}%`}
            icon={<TrendingUp className="h-4 w-4" />}
            trend="positive"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <BarChart
            title="Quantidade por Tipo de Certidão"
            data={chartData}
            xAxisDataKey="name"
            bars={[
              { dataKey: "quantidade", name: "Quantidade", color: "#2563eb" },
            ]}
          />
          <PieChart
            title="Distribuição de Certidões por Tipo"
            data={certificateTypes}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Detalhes por Tipo de Certidão</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tipo de Certidão</TableHead>
                  <TableHead className="text-right">Quantidade</TableHead>
                  <TableHead className="text-right">Percentual</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {withPercentages.map((cert) => (
                  <TableRow key={cert.name}>
                    <TableCell className="font-medium">{cert.name}</TableCell>
                    <TableCell className="text-right">{cert.value}</TableCell>
                    <TableCell className="text-right">{cert.percentage}%</TableCell>
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

export default Certificates;

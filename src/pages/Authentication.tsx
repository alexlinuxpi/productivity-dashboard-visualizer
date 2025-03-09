
import { DashboardLayout } from "@/components/DashboardLayout";
import { BarChart } from "@/components/charts/BarChart";
import { StatCard } from "@/components/StatCard";
import { authenticationData, authenticationStats } from "@/data/mockData";
import { Folder, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const Authentication = () => {
  return (
    <DashboardLayout title="Autenticação e Registro de Livros">
      <div className="animate-fade-in">
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <StatCard
            title="Total de Eventos"
            value={authenticationStats.totalEvents}
            icon={<Folder className="h-4 w-4" />}
          />
          <StatCard
            title="Deferidos"
            value={`${authenticationStats.deferredPercentage}%`}
            icon={<CheckCircle className="h-4 w-4" />}
            trend="positive"
          />
          <StatCard
            title="Com Exigências"
            value={`${authenticationStats.requirementsPercentage}%`}
            icon={<AlertCircle className="h-4 w-4" />}
            trend="negative"
          />
        </div>

        <div className="mb-6">
          <BarChart
            title="Eventos por Tipo"
            data={authenticationData}
            xAxisDataKey="name"
            bars={[
              { dataKey: "deferidos", name: "Deferidos", color: "#10b981" },
              { dataKey: "exigencias", name: "Com Exigências", color: "#ef4444" },
            ]}
            height={400}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Detalhes por Tipo de Evento</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tipo de Evento</TableHead>
                  <TableHead className="text-right">Deferidos</TableHead>
                  <TableHead className="text-right">Com Exigências</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead>Taxa de Aprovação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {authenticationData.map((item) => {
                  const total = item.deferidos + item.exigencias;
                  const approvalRate = (item.deferidos / total) * 100;
                  
                  return (
                    <TableRow key={item.name}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell className="text-right">{item.deferidos}</TableCell>
                      <TableCell className="text-right">{item.exigencias}</TableCell>
                      <TableCell className="text-right">{total}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Progress value={approvalRate} className="h-2 mr-2" />
                          <span className="text-xs">{approvalRate.toFixed(1)}%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Authentication;

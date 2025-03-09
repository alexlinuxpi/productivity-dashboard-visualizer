
import { DashboardLayout } from "@/components/DashboardLayout";
import { BarChart } from "@/components/charts/BarChart";
import { RankingCard } from "@/components/RankingCard";
import { userProductivity } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Users = () => {
  // Transform user productivity data for bar chart
  const chartData = userProductivity.map((user) => ({
    name: user.name,
    processos: user.value,
  }));

  return (
    <DashboardLayout title="Produtividade por Usuário">
      <div className="animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-2">
            <BarChart
              title="Produtividade por Usuário"
              data={chartData}
              xAxisDataKey="name"
              bars={[
                { dataKey: "processos", name: "Processos Analisados", color: "#2563eb" },
              ]}
              height={400}
            />
          </div>
          <div>
            <RankingCard
              title="Ranking de Produtividade"
              items={userProductivity}
              valueLabel="processos"
            />
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Detalhes de Produtividade</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Usuário</TableHead>
                  <TableHead className="text-right">Processos Analisados</TableHead>
                  <TableHead className="text-right">Variação</TableHead>
                  <TableHead className="text-right">Ranking</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userProductivity.map((user, index) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="text-right">{user.value}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={user.change > 0 ? "success" : "destructive"}>
                        {user.change > 0 ? "+" : ""}{user.change}%
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{index + 1}</TableCell>
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

export default Users;

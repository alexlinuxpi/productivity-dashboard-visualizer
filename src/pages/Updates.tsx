
import { DashboardLayout } from "@/components/DashboardLayout";
import { BarChart } from "@/components/charts/BarChart";
import { cadastralUpdates } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const Updates = () => {
  // Transform cadastral updates data for chart
  const chartData = cadastralUpdates.map((user) => ({
    name: user.name,
    aceitas: user.accepted,
    rejeitadas: user.rejected
  }));

  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <DashboardLayout title="Atualização Cadastral">
      <div className="animate-fade-in">
        <div className="mb-6">
          <BarChart
            title="Atualizações por Usuário"
            data={chartData}
            xAxisDataKey="name"
            bars={[
              { dataKey: "aceitas", name: "Aceitas", color: "#10b981" },
              { dataKey: "rejeitadas", name: "Rejeitadas", color: "#ef4444" },
            ]}
            height={400}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Detalhes de Atualizações por Usuário</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Usuário</TableHead>
                  <TableHead className="text-right">Aceitas</TableHead>
                  <TableHead className="text-right">Rejeitadas</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead>Taxa de Aceitação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cadastralUpdates.map((user) => {
                  const total = user.accepted + user.rejected;
                  const acceptanceRate = (user.accepted / total) * 100;
                  
                  return (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{user.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">{user.accepted}</TableCell>
                      <TableCell className="text-right">{user.rejected}</TableCell>
                      <TableCell className="text-right">{total}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Progress value={acceptanceRate} className="h-2 mr-2" />
                          <span className="text-xs">{acceptanceRate.toFixed(1)}%</span>
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

export default Updates;


import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { RankingCard } from "@/components/RankingCard";
import { BarChart } from "@/components/charts/BarChart";
import { LineChart } from "@/components/charts/LineChart";
import { PieChart } from "@/components/charts/PieChart";
import { Users, FileText, Clock, TrendingUp } from "lucide-react";
import { 
  dashboardSummary, 
  userProductivity, 
  certificateTypes, 
  peakHoursData, 
  weeklyProductivityTrend 
} from "@/data/mockData";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard de Produtividade">
      <div className="animate-fade-in">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <StatCard
            title="Total de Processos"
            value={dashboardSummary.totalProcessed}
            icon={<TrendingUp className="h-4 w-4" />}
            trendValue={8.5}
            trend="positive"
          />
          <StatCard
            title="Usuários Ativos"
            value={dashboardSummary.totalUsers}
            icon={<Users className="h-4 w-4" />}
          />
          <StatCard
            title="Média por Usuário"
            value={dashboardSummary.averageProcessPerUser}
            icon={<FileText className="h-4 w-4" />}
            trendValue={4.2}
            trend="positive"
          />
          <StatCard
            title="Horário de Pico"
            value={dashboardSummary.peakHour}
            icon={<Clock className="h-4 w-4" />}
            description="95 processos"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-2">
            <LineChart
              title="Tendência de Produtividade Semanal"
              data={weeklyProductivityTrend}
              xAxisDataKey="day"
              lines={[
                { dataKey: "total", name: "Total de Processos", color: "#2563eb" },
              ]}
            />
          </div>
          <div>
            <RankingCard
              title="Usuários Mais Produtivos"
              items={userProductivity}
              valueLabel="processos"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BarChart
            title="Horários de Maior Movimento"
            data={peakHoursData}
            xAxisDataKey="time"
            bars={[
              { dataKey: "count", name: "Quantidade de Processos", color: "#7c3aed" },
            ]}
          />
          <PieChart
            title="Tipos de Certidões Emitidas"
            data={certificateTypes}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

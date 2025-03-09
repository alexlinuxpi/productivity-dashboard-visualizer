
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { CalendarIcon, Download, FileText, Filter } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";

type ReportPeriod = "daily" | "weekly" | "monthly" | "custom";
type ReportType = "productivity" | "certificates" | "authentication" | "updates" | "peakHours" | "complete";

const Reports = () => {
  const [reportType, setReportType] = useState<ReportType>("complete");
  const [reportPeriod, setReportPeriod] = useState<ReportPeriod>("monthly");
  const [dateRange, setDateRange] = useState<{ from: Date; to?: Date }>({
    from: new Date(),
  });
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleGenerateReport = () => {
    toast.success("Relatório gerado com sucesso!", {
      description: "O download começará em breve.",
    });
  };

  const handleExportExcel = () => {
    toast.success("Exportação para Excel iniciada", {
      description: "O download começará em breve.",
    });
  };

  const handleExportPDF = () => {
    toast.success("Exportação para PDF iniciada", {
      description: "O download começará em breve.",
    });
  };

  return (
    <DashboardLayout title="Relatórios">
      <div className="animate-fade-in">
        <Tabs defaultValue="generate" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="generate">Gerar Relatório</TabsTrigger>
            <TabsTrigger value="saved">Relatórios Salvos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="generate">
            <Card>
              <CardHeader>
                <CardTitle>Gerar Novo Relatório</CardTitle>
                <CardDescription>
                  Configure e gere relatórios detalhados sobre a produtividade do sistema.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Tipo de Relatório</label>
                      <Select
                        value={reportType}
                        onValueChange={(value) => setReportType(value as ReportType)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="complete">Relatório Completo</SelectItem>
                          <SelectItem value="productivity">Produtividade por Usuário</SelectItem>
                          <SelectItem value="certificates">Certidões Emitidas</SelectItem>
                          <SelectItem value="authentication">Autenticação e Registros</SelectItem>
                          <SelectItem value="updates">Atualização Cadastral</SelectItem>
                          <SelectItem value="peakHours">Horários de Pico</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Período</label>
                      <Select
                        value={reportPeriod}
                        onValueChange={(value) => setReportPeriod(value as ReportPeriod)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um período" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Diário</SelectItem>
                          <SelectItem value="weekly">Semanal</SelectItem>
                          <SelectItem value="monthly">Mensal</SelectItem>
                          <SelectItem value="custom">Personalizado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {reportPeriod === "custom" && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Intervalo de Datas</label>
                      <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dateRange?.from ? (
                              dateRange.to ? (
                                <>
                                  {format(dateRange.from, "dd/MM/yyyy", { locale: ptBR })} -{" "}
                                  {format(dateRange.to, "dd/MM/yyyy", { locale: ptBR })}
                                </>
                              ) : (
                                format(dateRange.from, "dd/MM/yyyy", { locale: ptBR })
                              )
                            ) : (
                              <span>Selecione um período</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="range"
                            selected={dateRange}
                            onSelect={(value) => value && setDateRange(value)}
                            initialFocus
                            locale={ptBR}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Filtros Adicionais</label>
                    <Button variant="outline" className="w-full justify-start">
                      <Filter className="mr-2 h-4 w-4" />
                      Adicionar Filtros
                    </Button>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button onClick={handleGenerateReport} className="flex-1">
                      <FileText className="mr-2 h-4 w-4" />
                      Gerar Relatório
                    </Button>
                    <Button variant="outline" onClick={handleExportExcel}>
                      <Download className="mr-2 h-4 w-4" />
                      Exportar Excel
                    </Button>
                    <Button variant="outline" onClick={handleExportPDF}>
                      <Download className="mr-2 h-4 w-4" />
                      Exportar PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="saved">
            <Card>
              <CardHeader>
                <CardTitle>Relatórios Salvos</CardTitle>
                <CardDescription>
                  Acesse relatórios gerados anteriormente.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Relatório Mensal - Outubro 2023</h3>
                      <p className="text-sm text-muted-foreground">Gerado em 01/11/2023</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Produtividade por Usuário - Q3 2023</h3>
                      <p className="text-sm text-muted-foreground">Gerado em 05/10/2023</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Análise de Horários de Pico - Setembro 2023</h3>
                      <p className="text-sm text-muted-foreground">Gerado em 02/10/2023</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Reports;

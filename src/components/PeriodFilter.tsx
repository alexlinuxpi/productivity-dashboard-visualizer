
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useDashboardStore } from "@/store/dashboard-store";

export function PeriodFilter() {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const { period, setPeriod, dateRange, setDateRange } = useDashboardStore();
  
  const handlePeriodChange = (value: string) => {
    setPeriod(value);
  };

  const handleDateSelect = (date: Date) => {
    if (!dateRange || !dateRange.from || (dateRange.from && dateRange.to)) {
      setDateRange({ from: date, to: undefined });
    } else {
      const from = dateRange.from;
      if (date < from) {
        setDateRange({ from: date, to: from });
      } else {
        setDateRange({ from, to: date });
      }
      setCalendarOpen(false);
    }
  };

  const formatDateRange = () => {
    if (!dateRange || !dateRange.from) return "Selecione um período";
    
    const fromDate = format(dateRange.from, "dd/MM/yyyy", { locale: ptBR });
    
    if (!dateRange.to) return `A partir de ${fromDate}`;
    
    const toDate = format(dateRange.to, "dd/MM/yyyy", { locale: ptBR });
    return `${fromDate} até ${toDate}`;
  };

  return (
    <div className="flex items-center space-x-2">
      <Tabs 
        defaultValue="daily" 
        value={period} 
        className="w-[300px]"
        onValueChange={handlePeriodChange}
      >
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="daily">Diário</TabsTrigger>
          <TabsTrigger value="weekly">Semanal</TabsTrigger>
          <TabsTrigger value="monthly">Mensal</TabsTrigger>
        </TabsList>
      </Tabs>

      <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="min-w-[240px] justify-start text-left"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {formatDateRange()}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={(range) => {
              if (range) setDateRange(range);
            }}
            locale={ptBR}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

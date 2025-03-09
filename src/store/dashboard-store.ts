
import { create } from 'zustand';
import type { DateRange } from 'react-day-picker';

interface DashboardState {
  period: string;
  setPeriod: (period: string) => void;
  dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  period: 'daily',
  setPeriod: (period) => set({ period }),
  dateRange: undefined,
  setDateRange: (dateRange) => set({ dateRange }),
}));

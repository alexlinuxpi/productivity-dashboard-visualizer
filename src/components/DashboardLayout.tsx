
import { ReactNode, useState } from 'react';
import { Sidebar } from './Sidebar';
import { PeriodFilter } from './PeriodFilter';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
}

export const DashboardLayout = ({ children, title = 'Dashboard' }: DashboardLayoutProps) => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-10">
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        )}
        <h1 className="text-2xl font-bold text-primary">{title}</h1>
        <PeriodFilter />
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className={cn(
          "flex-1 overflow-auto p-4 transition-all duration-300",
          !isMobile && sidebarOpen && "ml-64",
          !isMobile && !sidebarOpen && "ml-16"
        )}>
          {children}
        </main>
      </div>
    </div>
  );
};


import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  FileText, 
  Folder, 
  Home, 
  Users, 
  Clock, 
  FileEdit, 
  X,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  expanded: boolean;
}

const SidebarItem = ({ to, icon, children, expanded }: SidebarItemProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Link to={to} className="block">
      <div
        className={cn(
          "flex items-center h-10 px-3 my-1 rounded-md group transition-colors",
          isActive 
            ? "bg-primary text-white"
            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        )}
      >
        <div className="flex items-center">
          {icon}
        </div>
        {expanded && (
          <span className="ml-3 transition-opacity">{children}</span>
        )}
      </div>
    </Link>
  );
};

export const Sidebar = ({ open, onClose }: SidebarProps) => {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(true);

  const toggleExpand = () => {
    if (!isMobile) {
      setExpanded(!expanded);
    }
  };

  const sidebarContent = (
    <>
      <div className="flex items-center justify-between p-4">
        {(expanded || isMobile) && (
          <div className="font-bold text-xl text-white">Produtividade</div>
        )}
        
        {isMobile ? (
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white">
            <X className="h-5 w-5" />
          </Button>
        ) : (
          <Button variant="ghost" size="icon" onClick={toggleExpand} className="text-white">
            {expanded ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          </Button>
        )}
      </div>
      
      <div className="p-3">
        <SidebarItem to="/" icon={<Home className="h-5 w-5" />} expanded={expanded || isMobile}>
          Início
        </SidebarItem>
        <SidebarItem to="/users" icon={<Users className="h-5 w-5" />} expanded={expanded || isMobile}>
          Produtividade por Usuário
        </SidebarItem>
        <SidebarItem to="/certificates" icon={<FileText className="h-5 w-5" />} expanded={expanded || isMobile}>
          Certidões Emitidas
        </SidebarItem>
        <SidebarItem to="/authentication" icon={<Folder className="h-5 w-5" />} expanded={expanded || isMobile}>
          Autenticação e Registros
        </SidebarItem>
        <SidebarItem to="/updates" icon={<FileEdit className="h-5 w-5" />} expanded={expanded || isMobile}>
          Atualização Cadastral
        </SidebarItem>
        <SidebarItem to="/peak-hours" icon={<Clock className="h-5 w-5" />} expanded={expanded || isMobile}>
          Horários de Pico
        </SidebarItem>
        <SidebarItem to="/reports" icon={<BarChart3 className="h-5 w-5" />} expanded={expanded || isMobile}>
          Relatórios
        </SidebarItem>
      </div>
    </>
  );

  if (isMobile) {
    return (
      <div 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar transform transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {sidebarContent}
        
        {open && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
        )}
      </div>
    );
  }

  return (
    <div 
      className={cn(
        "h-screen bg-sidebar sticky top-0 transition-all duration-300",
        expanded ? "w-64" : "w-16"
      )}
    >
      {sidebarContent}
    </div>
  );
};

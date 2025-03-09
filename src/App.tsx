
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Index";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";
import Certificates from "./pages/Certificates";
import Authentication from "./pages/Authentication";
import Updates from "./pages/Updates";
import PeakHours from "./pages/PeakHours";
import Reports from "./pages/Reports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/peak-hours" element={<PeakHours />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Tentativa de acesso a rota inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Página não encontrada</p>
        <Button asChild>
          <Link to="/" className="flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Voltar para o Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

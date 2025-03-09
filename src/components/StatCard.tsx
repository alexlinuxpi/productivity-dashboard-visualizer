
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const statCardVariants = cva("", {
  variants: {
    trend: {
      positive: "text-success",
      negative: "text-destructive",
      neutral: "text-muted-foreground",
    },
  },
  defaultVariants: {
    trend: "neutral",
  },
});

interface StatCardProps extends VariantProps<typeof statCardVariants> {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  description?: string;
  trendValue?: number;
  className?: string;
}

export function StatCard({
  title,
  value,
  icon,
  description,
  trendValue,
  trend,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {trendValue !== undefined && (
          <p className={cn("text-xs mt-1 flex items-center", statCardVariants({ trend }))}>
            {trendValue > 0 ? "+" : ""}{trendValue}% desde último período
          </p>
        )}
      </CardContent>
    </Card>
  );
}

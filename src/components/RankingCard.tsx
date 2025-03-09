
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface RankingItem {
  id: string;
  name: string;
  value: number;
  change?: number;
}

interface RankingCardProps {
  title: string;
  items: RankingItem[];
  valueLabel?: string;
  maxItems?: number;
}

export function RankingCard({ 
  title, 
  items, 
  valueLabel = "Processos", 
  maxItems = 5 
}: RankingCardProps) {
  const displayItems = items.slice(0, maxItems);
  
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
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {displayItems.map((item, index) => (
          <div key={item.id} className="flex items-center">
            <div className="flex items-center flex-1">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-muted text-muted-foreground mr-3">
                {index + 1}
              </div>
              <Avatar className="h-9 w-9 mr-3">
                <AvatarFallback>{getInitials(item.name)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="text-sm font-semibold">{item.name}</div>
                <div className="text-xs text-muted-foreground flex items-center">
                  {item.value} {valueLabel}
                  {item.change && (
                    <Badge variant={item.change > 0 ? "success" : "destructive"} className="ml-2 text-[10px] py-0 h-4">
                      {item.change > 0 ? "+" : ""}{item.change}%
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

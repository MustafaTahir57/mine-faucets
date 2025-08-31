import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Zap, Shield } from "lucide-react";

const FaucetStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      label: "Total Distributed",
      value: "1,234.56 ETH",
      color: "text-success",
    },
    {
      icon: Users,
      label: "Active Users",
      value: "8,942",
      color: "text-primary",
    },
    {
      icon: Zap,
      label: "Daily Requests",
      value: "156",
      color: "text-warning",
    },
    {
      icon: Shield,
      label: "Success Rate",
      value: "99.8%",
      color: "text-success",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="card-gradient animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FaucetStats;
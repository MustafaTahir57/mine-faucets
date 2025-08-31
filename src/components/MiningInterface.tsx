import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StopCircle, Zap, Users, Trophy, Clock, Target, TrendingUp } from "lucide-react";

interface MiningInterfaceProps {
  walletAddress: string;
  onStopMining: () => void;
}

const MiningInterface = ({ walletAddress, onStopMining }: MiningInterfaceProps) => {
  const [miningReward, setMiningReward] = useState(5);
  const [hashrate] = useState(3.25);
  const [workers] = useState("2/2");
  const [totalShares] = useState(0);
  const [avgRewardPerHour] = useState(0.016);
  const [rewardBoost] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(118); // 1h 58min in minutes

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
      
      // Simulate reward accumulation
      setMiningReward((prev) => prev + 0.001);
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}min`;
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-6)}`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="card-gradient animate-fade-in border-primary/20">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto p-3 w-fit rounded-full bg-primary/10 border border-primary/20 animate-pulse">
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl gradient-text">Mining Active</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Mining Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="h-4 w-4" />
                Target Address:
              </div>
              <div className="font-mono text-sm font-medium">{truncateAddress(walletAddress)}</div>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Trophy className="h-4 w-4" />
                Your Mining Reward:
              </div>
              <div className="font-medium text-success">{miningReward.toFixed(3)} SepETH</div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Current Hashrate:</div>
              <div className="font-medium">{hashrate} H/s</div>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                Number of Workers:
              </div>
              <div className="font-medium">{workers}</div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Minimum Claim Reward:</div>
              <div className="font-medium">0.05 SepETH</div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Maximum Claim Reward:</div>
              <div className="font-medium">2.5 SepETH</div>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                Remaining Session Timer:
              </div>
              <div className="font-medium text-warning">{formatTime(timeRemaining)}</div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Total Shares:</div>
              <div className="font-medium">{totalShares}</div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Avg. Reward per Hour:</div>
              <div className="font-medium">{avgRewardPerHour.toFixed(3)} SepETH</div>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                Reward Boost:
              </div>
              <div className="font-medium">+{rewardBoost}%</div>
            </div>
          </div>
          
          {/* Stop Mining Button */}
          <Button
            onClick={onStopMining}
            variant="destructive"
            className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-medium py-3 transition-all duration-300"
          >
            <StopCircle className="mr-2 h-4 w-4" />
            STOP MINING
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MiningInterface;
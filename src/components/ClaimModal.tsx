import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ClaimModalProps {
  walletAddress: string;
  miningReward: number;
  onClaim: () => void;
  onClose: () => void;
}

const ClaimModal = ({ walletAddress, miningReward, onClaim, onClose }: ClaimModalProps) => {
  const { toast } = useToast();

  const handleClaim = () => {
    toast({
      title: "Tokens Claimed!",
      description: `Successfully claimed ${miningReward.toFixed(3)} SepETH to your wallet.`,
    });
    onClaim();
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-6)}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <Card className="w-full max-w-md card-gradient border-primary/20 animate-scale-in">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto p-3 w-fit rounded-full bg-success/10 border border-success/20 animate-glow-pulse">
            <Gift className="h-8 w-8 text-success" />
          </div>
          <CardTitle className="text-2xl gradient-text">Ready to Claim</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="h-4 w-4" />
                Target Address:
              </div>
              <div className="font-mono text-sm font-medium bg-input p-3 rounded-md border border-input-border">
                {truncateAddress(walletAddress)}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Your Mining Reward:</div>
              <div className="text-2xl font-bold text-success text-center">
                {miningReward.toFixed(3)} SepETH
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 border-input-border hover:bg-accent"
            >
              Cancel
            </Button>
            <Button
              onClick={handleClaim}
              className="flex-1 bg-success hover:bg-success/90 text-white font-medium glow-effect transition-all duration-300"
            >
              <Gift className="mr-2 h-4 w-4" />
              CLAIM
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClaimModal;
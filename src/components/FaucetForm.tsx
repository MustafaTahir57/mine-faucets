import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wallet, Send, Clock, AlertCircle, Droplets } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import MiningInterface from "./MiningInterface";
import ClaimModal from "./ClaimModal";

type AppState = "form" | "mining" | "claim";

const FaucetForm = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentState, setCurrentState] = useState<AppState>("form");
  const [miningReward, setMiningReward] = useState(0.06);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!walletAddress || !selectedNetwork) {
      toast({
        title: "Missing Information",
        description: "Please enter your wallet address and select a network.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate starting mining process
    setTimeout(() => {
      setIsLoading(false);
      setCurrentState("mining");
    }, 2000);
  };

  const handleStopMining = () => {
    setCurrentState("claim");
  };

  const handleClaim = () => {
    setCurrentState("form");
    setWalletAddress("");
    setSelectedNetwork("");
  };

  const handleCloseModal = () => {
    setCurrentState("mining");
  };

  if (currentState === "mining") {
    return (
      <MiningInterface
        walletAddress={walletAddress}
        onStopMining={handleStopMining}
      />
    );
  }

  if (currentState === "claim") {
    return (
      <ClaimModal
        walletAddress={walletAddress}
        miningReward={miningReward}
        onClaim={handleClaim}
        onClose={handleCloseModal}
      />
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card className="card-gradient animate-fade-in">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto p-3 w-fit rounded-full bg-primary/10 border border-primary/20 animate-glow-pulse">
            <Droplets className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl gradient-text">
            Get Testnet Tokens
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Receive free testnet tokens for development and testing purposes
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Wallet Address
              </label>
              <div className="relative">
                <Wallet className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="0xYourWalletAddress..."
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="pl-10 bg-input border-input-border focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Network
              </label>
              <Select
                value={selectedNetwork}
                onValueChange={setSelectedNetwork}
              >
                <SelectTrigger className="bg-input border-input-border focus:border-primary">
                  <SelectValue placeholder="Select a testnet" />
                </SelectTrigger>
                <SelectContent className="bg-card border-card-border">
                  <SelectItem value="sepolia">Sepolia Testnet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-medium py-3 glow-effect transition-all duration-300"
            >
              {isLoading ? (
                <>
                  <Clock className="mr-2 h-4 w-4 animate-spin" />
                  Starting Mining...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Request Testnet Tokens
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Limits & Information Card */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <AlertCircle className="mr-2 h-5 w-5 text-warning" />
            Usage Limits
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Daily Limit:</span>
                <span className="font-medium">0.5 ETH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Per Request:</span>
                <span className="font-medium">0.1 ETH</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cooldown:</span>
                <span className="font-medium">24 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Network Fee:</span>
                <span className="font-medium text-success">Free</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FaucetForm;

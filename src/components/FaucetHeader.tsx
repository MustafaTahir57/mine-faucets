import { Droplets } from "lucide-react";

const FaucetHeader = () => {
  return (
    <header className="w-full border-b border-card-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Droplets className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Mine Faucet</h1>
              <p className="text-xs text-muted-foreground">Testnet Token Distribution</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-sm text-muted-foreground">
              <span className="text-success font-medium">Active</span> • Sepolia Network
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FaucetHeader;
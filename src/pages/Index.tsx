import FaucetHeader from "@/components/FaucetHeader";
import FaucetForm from "@/components/FaucetForm";
import FaucetStats from "@/components/FaucetStats";
import FaucetFooter from "@/components/FaucetFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <FaucetHeader />
      
      <main className="flex-1 container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">
            Mine Testnet Faucet
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get free testnet tokens instantly for your blockchain development and testing needs
          </p>
        </div>
        
        <FaucetStats />
        <FaucetForm />
      </main>
      
      <FaucetFooter />
    </div>
  );
};

export default Index;

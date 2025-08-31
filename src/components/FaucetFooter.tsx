import { Github, Twitter, ExternalLink } from "lucide-react";

const FaucetFooter = () => {
  const links = [
    { name: "Documentation", href: "#", icon: ExternalLink },
    { name: "GitHub", href: "#", icon: Github },
    { name: "Twitter", href: "#", icon: Twitter },
  ];

  return (
    <footer className="w-full border-t border-card-border bg-card/30 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024 Mine Faucet. Powering the next generation of web3 development.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Free testnet tokens for developers worldwide
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="h-4 w-4" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-card-border">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              ⚠️ These are testnet tokens with no real value. Use only for development and testing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FaucetFooter;
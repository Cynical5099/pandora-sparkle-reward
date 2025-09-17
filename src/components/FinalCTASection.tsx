import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <Gift className="w-16 h-16 text-cta mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Claim Your{" "}
              <span className="bg-gradient-to-r from-cta to-primary bg-clip-text text-transparent">
                $500 Pandora Gift Card?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of satisfied members who have already received their rewards. 
              Your dream Pandora jewelry is just a few clicks away.
            </p>
          </div>
          
          <div className="space-y-6">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-xl py-8 px-16 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open("https://uplevelrewarded.com/aff_c?offer_id=174&aff_id=21664&source=tiktok2", "_blank")}
            >
              Start My Reward
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            
            <div className="flex justify-center items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                Free to Join
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                Trusted Partners
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                Real Rewards
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
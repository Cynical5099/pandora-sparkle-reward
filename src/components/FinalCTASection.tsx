import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-6 sm:px-8 lg:px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <Gift className="w-12 h-12 sm:w-16 sm:h-16 text-cta mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4 sm:px-0">
              Ready to Claim Your{" "}
              <span className="bg-gradient-to-r from-cta to-primary bg-clip-text text-transparent">
                $500 Pandora Gift Card?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Join thousands of satisfied members who have already received their rewards. 
              <span className="font-semibold text-cta">Complete more deals to earn higher rewards</span> – 
              your dream Pandora jewelry is just a few clicks away.
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-6 px-4 sm:px-0">
            <Button 
              variant="cta" 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-xl py-4 sm:py-8 px-8 sm:px-16 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 min-h-[56px] touch-manipulation"
              onClick={() => window.open("https://uplevelrewarded.com/aff_c?offer_id=174&aff_id=21664&source=tiktok2", "_blank")}
            >
              Start My Reward
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
            </Button>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-muted-foreground">
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
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/pandora-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      <div className="container mx-auto px-6 py-12 sm:px-8 lg:px-4 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Claim Your{" "}
              <span className="bg-gradient-to-r from-cta to-primary bg-clip-text text-transparent">
                $500 Pandora
              </span>{" "}
              Gift Card
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              Complete a few simple deals and enjoy your jewelry shopping spree.
            </p>
            <div className="px-4 sm:px-0">
              <Button 
                variant="cta" 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg py-4 sm:py-6 px-8 sm:px-12 rounded-full min-h-[56px] touch-manipulation"
                onClick={() => window.open("https://uplevelrewarded.com/aff_c?offer_id=174&aff_id=21664&source=tiktok2", "_blank")}
              >
                Start My Reward
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 relative order-first lg:order-last">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              <img
                src={heroImage}
                alt="Elegant Pandora jewelry display"
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl sm:rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Play, Gift, Mail } from "lucide-react";

const steps = [
  {
    icon: Play,
    title: "Click \"Start\"",
    description: "Begin your reward journey with a simple click of our Start button."
  },
  {
    icon: Gift,
    title: "Complete Deals",
    description: "Complete at least 3–5 sponsored deals. The more you complete, the faster your gift card arrives."
  },
  {
    icon: Mail,
    title: "Receive Reward",
    description: "Get your $500 Pandora Gift Card delivered straight to your email inbox."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4 sm:px-0">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Three simple steps to claim your Pandora gift card
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform translate-x-1/2 z-0"></div>
                )}
                
                {/* Step content */}
                <div className="relative z-10 bg-background rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border mx-4 sm:mx-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-cta text-cta-foreground rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 font-bold text-xs sm:text-sm shadow-md">
                    {index + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
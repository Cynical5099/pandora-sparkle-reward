import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "I couldn't believe it was real at first, but I received my Pandora gift card exactly as promised! Used it to buy the bracelet I'd been wanting for months."
  },
  {
    name: "Jessica L.", 
    rating: 5,
    text: "The deals were actually interesting and I discovered some great services. Getting the gift card was just the cherry on top!"
  },
  {
    name: "Amanda K.",
    rating: 5,
    text: "Simple process and genuine rewards. I've already recommended this to my friends. My new Pandora earrings are gorgeous!"
  }
];

const SocialProofSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Members Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people who claimed their Pandora rewards
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star 
                    key={starIndex} 
                    className="w-5 h-5 fill-cta text-cta" 
                  />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground italic text-center mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              {/* Name */}
              <div className="text-center">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
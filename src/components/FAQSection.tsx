import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How do I receive my reward?",
    answer: "Once you complete the required number of sponsored deals, your $500 Pandora Gift Card will be sent directly to the email address you provided during registration. This typically happens within 1-2 business days after completing all requirements."
  },
  {
    question: "How many deals must I complete?",
    answer: "You need to complete at least 3-5 sponsored deals to qualify for your Pandora gift card. The more deals you complete, the faster you'll receive your reward. Each deal has clear instructions and requirements that are easy to follow."
  },
  {
    question: "Is this legitimate?",
    answer: "Absolutely! This is a legitimate rewards program. We partner with trusted brands and sponsors to offer these rewards. Thousands of people have successfully received their Pandora gift cards through our program. All deals are from verified partners and sponsors."
  },
  {
    question: "Are there any costs involved?",
    answer: "The reward program itself is completely free to join. Some sponsored deals may require small purchases or subscriptions, but these are clearly marked and optional. You choose which deals to complete based on your preferences."
  },
  {
    question: "How long does it take to complete?",
    answer: "Most people complete the required deals within 30-60 minutes. The time depends on which deals you choose and how quickly you work through them. Remember, the more deals you complete, the faster your gift card arrives."
  },
  {
    question: "Can I use the gift card anywhere?",
    answer: "Yes! Your $500 Pandora Gift Card can be used at any official Pandora store, both online and in physical retail locations. It works just like cash for any Pandora jewelry, charms, or accessories."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about claiming your Pandora reward
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-cta py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
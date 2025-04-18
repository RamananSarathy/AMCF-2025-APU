
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

const faqs = [
  {
    question: "What is AMCF 2025?",
    answer: "AMCF 2025 is the Asian Malaysian Career Fair, an annual event connecting students with potential employers from both local and international companies. It offers internship and full-time job opportunities across various industries."
  },
  {
    question: "Do I need to register to attend?",
    answer: "Registration is recommended but not mandatory. Pre-registering gives you access to the express entry line and early notifications about participating companies and positions."
  },
  {
    question: "What should I bring to the career fair?",
    answer: "We recommend bringing multiple copies of your resume, a digital portfolio if applicable, and business cards if you have them. Dressing professionally is also advised."
  },
  {
    question: "Will there be on-the-spot interviews?",
    answer: "Yes, some companies may conduct preliminary interviews at the event. Come prepared to discuss your qualifications and career aspirations."
  },
  {
    question: "How can I prepare for the career fair?",
    answer: "Research participating companies beforehand, prepare a short elevator pitch about yourself, bring multiple copies of your resume, and dress professionally."
  },
];

const FaqSection = () => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <Accordion type="single" collapsible className="w-full divide-y divide-white/10">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left py-4 text-white hover:text-[#33C3F0] transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="py-4 text-gray-300">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqSection;

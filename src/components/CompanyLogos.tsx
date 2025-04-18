
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const companies = [
  { id: 1, name: "TechCorp", logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=100" },
  { id: 2, name: "InnovateLabs", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=100" },
  { id: 3, name: "FutureWorks", logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=100" },
  { id: 4, name: "EcoSolutions", logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=100" },
  { id: 5, name: "GlobalTech", logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=100" },
  { id: 6, name: "NexGen", logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=100" },
];

const CompanyLogos = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {companies.map((company) => (
          <CarouselItem key={company.id} className="md:basis-1/3 lg:basis-1/4">
            <div className="p-4">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-6 h-32 flex items-center justify-center hover:border-[#33C3F0]/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white/20 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4">
        <CarouselPrevious className="relative static translate-y-0 mx-2" />
        <CarouselNext className="relative static translate-y-0 mx-2" />
      </div>
    </Carousel>
  );
};

export default CompanyLogos;

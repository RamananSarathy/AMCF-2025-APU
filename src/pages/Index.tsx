
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Briefcase, Globe, ChevronRight } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import EventCountdown from "@/components/EventCountdown";
import LiveUpdates from "@/components/LiveUpdates";
import CompanyLogos from "@/components/CompanyLogos";
import FaqSection from "@/components/FaqSection";
import { toast } from "@/components/ui/sonner";

// Event date - May 7, 2025, 10:00 AM
const eventDate = new Date(2025, 4, 7, 10, 0, 0);

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for a smoother entrance
    const timer = setTimeout(() => {
      setIsLoaded(true);
      toast("Welcome to AMCF 2025", {
        description: "Explore opportunities and prepare for your future career!",
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1F2C] z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1170')] bg-cover bg-center opacity-10 z-0"></div>
        
        <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
          <div className="flex flex-col gap-2">
            <span className="bg-gradient-to-r from-[#33C3F0] to-[#8B5CF6] text-transparent bg-clip-text font-mono">
              May 7, 2025
            </span>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-[#f1f1f1] bg-clip-text text-transparent">
              AMCF 2025
            </h1>
            <p className="text-xl md:text-2xl font-medium text-white/80">
              Your Future Starts Here
            </p>
          </div>
          
          <EventCountdown targetDate={eventDate} />
          
          <p className="text-lg md:text-xl text-[#33C3F0] font-medium mt-6">
            Scan. Explore. Prepare.
          </p>
          
          <Button 
            className="bg-gradient-to-r from-[#8B5CF6] to-[#33C3F0] hover:opacity-90 mt-6 text-lg px-8 py-6 rounded-full"
            onClick={() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Event
            <ChevronRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Event Highlights */}
      <section id="highlights" className="px-4 py-16 bg-[#1A1F2C]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Event Highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Date Card */}
            <EventCard 
              icon={<Calendar className="h-6 w-6 text-[#33C3F0]" />}
              title="Date"
              description="7th of May, 2025"
              isLoaded={isLoaded}
            />
            
            {/* Time Card */}
            <EventCard 
              icon={<Clock className="h-6 w-6 text-[#F97316]" />}
              title="Time"
              description="10:00 AM – 3:00 PM"
              isLoaded={isLoaded}
            />
            
            {/* Location Card */}
            <EventCard 
              icon={<MapPin className="h-6 w-6 text-[#8B5CF6]" />}
              title="Location"
              description="Level 3, APU Campus"
              isLoaded={isLoaded}
            />
            
            {/* Opportunities Card */}
            <EventCard 
              icon={<Briefcase className="h-6 w-6 text-[#0EA5E9]" />}
              title="Opportunities"
              description="Over 10,000+ jobs"
              isLoaded={isLoaded}
            />
            
            {/* Includes Card */}
            <EventCard 
              icon={<ChevronRight className="h-6 w-6 text-[#F97316]" />}
              title="Includes"
              description="Internships & Full-Time roles"
              isLoaded={isLoaded}
            />
            
            {/* Employers Card */}
            <EventCard 
              icon={<Globe className="h-6 w-6 text-[#33C3F0]" />}
              title="Employers"
              description="International + Local Companies"
              isLoaded={isLoaded}
            />
          </div>
        </div>
      </section>
      
      {/* Live Updates Section */}
      <section className="px-4 py-16 bg-[#221F26]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Live Updates
          </h2>
          <LiveUpdates />
        </div>
      </section>
      
      {/* Company Logos */}
      <section className="px-4 py-16 bg-[#1A1F2C]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Featured Companies
          </h2>
          <CompanyLogos />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="px-4 py-16 bg-[#221F26]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FaqSection />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="px-4 py-12 bg-[#1A1F2C] border-t border-[#33C3F0]/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full"></div>
            <span className="font-bold text-lg">APU</span>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-[#33C3F0] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#33C3F0] transition-colors">Twitter</a>
              <a href="#" className="hover:text-[#33C3F0] transition-colors">LinkedIn</a>
            </div>
            
            <p className="text-sm text-gray-400 flex items-center">
              <span className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 inline-block mr-2"></span>
              Paperless. Powerful. Sustainable.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Event Card Component
const EventCard = ({ icon, title, description, isLoaded }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  isLoaded: boolean;
}) => {
  return (
    <Card className="bg-gradient-to-b from-[#1A1F2C] to-[#221F26] border border-white/10 overflow-hidden group transition duration-300 hover:border-[#33C3F0]/50 hover:shadow-lg hover:shadow-[#33C3F0]/10">
      <CardContent className="p-6">
        {isLoaded ? (
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-medium text-white/80">{title}</h3>
              <p className="text-white font-bold mt-1">{description}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <Skeleton className="w-12 h-12 rounded-xl bg-white/5" />
            <div>
              <Skeleton className="h-5 w-20 bg-white/5 mb-2" />
              <Skeleton className="h-7 w-40 bg-white/5" />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Index;

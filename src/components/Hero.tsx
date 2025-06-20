
import { Button } from "@/components/ui/button";
import { Sparkles, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 via-pink-100/20 to-purple-100/20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-rose-300/30 to-pink-400/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-purple-300/30 to-pink-400/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6 animate-fade-in">
          <Sparkles className="w-8 h-8 text-rose-500 mr-3 animate-pulse" />
          <span className="text-rose-600 font-medium tracking-wide uppercase text-sm">Professional Beauty Services</span>
          <Sparkles className="w-8 h-8 text-rose-500 ml-3 animate-pulse" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-fade-in delay-200">
          Elena Beauty Studio
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
          Transform your beauty with our expert services. Professional makeup, skincare treatments, and personalized beauty consultations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book Appointment
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
};

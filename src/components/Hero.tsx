
import { Button } from "@/components/ui/button";
import { Sparkles, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/60 via-pink-900/50 to-purple-900/60"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-rose-300/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-purple-300/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto pt-20">
        <div className="flex items-center justify-center mb-6 animate-fade-in">
          <Sparkles className="w-8 h-8 text-rose-300 mr-3 animate-pulse" />
          <span className="text-rose-200 font-medium tracking-wide uppercase text-sm">Professional Beauty Services</span>
          <Sparkles className="w-8 h-8 text-rose-300 ml-3 animate-pulse" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in delay-200 drop-shadow-lg">
          Elena Beauty Studio
        </h1>
        
        <p className="text-xl md:text-2xl text-rose-100 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300 drop-shadow-md">
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
            className="border-2 border-white text-white hover:bg-white hover:text-rose-600 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
};

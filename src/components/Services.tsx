
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Sparkles, Heart, Star } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Professional Makeup",
    description: "Flawless makeup for weddings, events, and special occasions. Using premium products for long-lasting results.",
    price: "From $80"
  },
  {
    icon: Sparkles,
    title: "Skincare Treatments",
    description: "Rejuvenating facials, chemical peels, and personalized skincare routines for glowing, healthy skin.",
    price: "From $120"
  },
  {
    icon: Heart,
    title: "Bridal Packages",
    description: "Complete bridal beauty services including trial sessions, wedding day makeup, and skincare preparation.",
    price: "From $300"
  },
  {
    icon: Star,
    title: "Beauty Consultations",
    description: "Personalized beauty advice, color analysis, and product recommendations tailored to your unique features.",
    price: "From $60"
  }
];

export const Services = () => {
  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of professional beauty services designed to enhance your natural beauty
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                  {service.title}
                </CardTitle>
                <div className="text-2xl font-bold text-rose-500">{service.price}</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Professional Makeup",
    description: "Flawless makeup for weddings, events, and special occasions. Using premium products for long-lasting results that enhance your natural beauty."
  },
  {
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Skincare Treatments", 
    description: "Rejuvenating facials, chemical peels, and personalized skincare routines for glowing, healthy skin that radiates from within."
  },
  {
    image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Bridal Packages",
    description: "Complete bridal beauty services including trial sessions, wedding day makeup, and skincare preparation for your special day."
  },
  {
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Beauty Consultations",
    description: "Personalized beauty advice, color analysis, and product recommendations tailored to your unique features and lifestyle."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-rose-50/50 via-pink-50/50 to-purple-50/50">
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
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:scale-105 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                  {service.title}
                </CardTitle>
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

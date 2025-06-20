
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email",
    details: "elena@beautystudio.com",
    action: "Send Email"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "123 Beauty Lane, City, State 12345",
    action: "Get Directions"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
    action: "Book Now"
  }
];

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your look? Contact us to schedule your appointment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={info.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-rose-50 to-pink-50 border-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  {info.details}
                </CardDescription>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 transition-colors"
                >
                  {info.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Look Amazing?</h3>
          <p className="text-xl mb-8 opacity-90">Book your appointment today and let's create your perfect look</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg"
              className="bg-white text-rose-600 hover:bg-gray-50 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Book Online
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-rose-600 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 rounded-full p-3">
              <Instagram className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 rounded-full p-3">
              <Facebook className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

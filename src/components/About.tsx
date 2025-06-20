import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock, CheckCircle, Sparkles } from "lucide-react";

const achievements = [
  { icon: Award, text: "5+ Years Experience" },
  { icon: Users, text: "500+ Happy Clients" },
  { icon: Clock, text: "Expert Techniques" },
  { icon: CheckCircle, text: "Premium Products" }
];

export const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50/30 via-pink-50/30 to-rose-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-200 mb-4">About Elena</Badge>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Your Beauty Expert
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With over 5 years of professional experience in the beauty industry, I specialize in creating stunning looks that enhance your natural beauty. My passion lies in helping clients feel confident and beautiful for their most important moments.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I stay updated with the latest trends and techniques, using only premium products to ensure exceptional results. Every service is personalized to match your unique style and preferences.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.text}
                  className="flex items-center space-x-3 p-4 bg-white/60 rounded-lg backdrop-blur-sm animate-fade-in hover:bg-white/80 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                    <achievement.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-rose-200 via-pink-200 to-purple-200 rounded-3xl p-8 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Elena Martinez</h3>
                  <p className="text-rose-600 font-medium">Certified Beauty Master</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full blur-xl opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

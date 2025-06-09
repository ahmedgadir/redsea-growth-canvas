
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent"></div>
        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo/Company Name */}
            <div className="mb-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-2">
                Redsea <span className="text-red-600">Growth</span>
              </h1>
              <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
            </div>

            {/* Tagline */}
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-8 animate-fade-in">
              Backing Visionary Founders in High-Growth Markets
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in">
              We invest in exceptional businesses with strong cashflow and clear pathways to sustainable 
              expansion across emerging and established markets.
            </p>

            {/* CTA Button */}
            <div className="mb-16 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Let's Connect
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Partnership Message */}
            <p className="text-slate-500 text-base animate-fade-in">
              We welcome partnerships, founder introductions, and strategic conversations.
            </p>
          </div>
        </div>
      </div>

      {/* Investment Focus Section */}
      <div className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-slate-900 mb-16">
              Our Investment Focus
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">Strong Cashflow</h4>
                  <p className="text-slate-600">Businesses with proven revenue models and sustainable financial performance.</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">Clear Pathways</h4>
                  <p className="text-slate-600">Companies with defined strategies for sustainable growth and market expansion.</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">Visionary Leaders</h4>
                  <p className="text-slate-600">Exceptional founders with the vision and execution capability to transform markets.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Global Presence Section */}
      <div className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-white mb-16">
            Global Presence
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* London */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-4"></div>
                <h4 className="text-xl font-semibold text-white mb-2">London</h4>
                <p className="text-slate-300 text-sm">
                  25 Old Broad Street, London EC2N 1HN
                </p>
              </CardContent>
            </Card>

            {/* Abu Dhabi */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-4"></div>
                <h4 className="text-xl font-semibold text-white mb-2">Abu Dhabi</h4>
                <p className="text-slate-300 text-sm">
                  ADGM Square, Al Maryah Island, Abu Dhabi
                </p>
              </CardContent>
            </Card>

            {/* Nairobi */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-4"></div>
                <h4 className="text-xl font-semibold text-white mb-2">Nairobi</h4>
                <p className="text-slate-300 text-sm">
                  Westlands Business Park, Nairobi
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 Redsea Growth. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

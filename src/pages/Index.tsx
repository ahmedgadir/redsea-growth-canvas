
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
      {/* Main Content - Single Screen */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo/Company Name */}
            <div className="mb-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-2">
                Redsea <span className="text-red-600">Growth</span>
              </h1>
              <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
            </div>

            {/* Tagline */}
            <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4 animate-fade-in">
              Backing Visionary Founders in High-Growth Markets
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in">
              We invest in exceptional businesses with strong cashflow and clear pathways to sustainable expansion across emerging and established markets.
            </p>

            {/* Investment Focus Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 text-center">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-1">Strong Cashflow</h4>
                  <p className="text-xs text-slate-600">Proven revenue models</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 text-center">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-1">Clear Pathways</h4>
                  <p className="text-xs text-slate-600">Sustainable growth strategies</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 text-center">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-1">Visionary Leaders</h4>
                  <p className="text-xs text-slate-600">Exceptional founders</p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Button */}
            <div className="mb-6 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-base font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Let's Connect
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Partnership Message */}
            <p className="text-slate-500 text-sm animate-fade-in mb-4">
              We welcome partnerships, founder introductions, and strategic conversations.
            </p>

            {/* Global Presence - Compact */}
            <div className="flex justify-center space-x-8 text-xs text-slate-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <span>London</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <span>Abu Dhabi</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <span>Nairobi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-xs">
            © 2025 Redsea Growth. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

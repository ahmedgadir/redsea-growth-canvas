
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
            {/* Enhanced Logo/Company Name */}
            <div className="mb-8 animate-fade-in">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-sm transform rotate-45"></div>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold">
                  <span className="text-slate-900">Redsea</span>
                  <span className="text-red-600 ml-2">Growth</span>
                </h1>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"></div>
              <p className="text-sm text-slate-500 mt-2 tracking-widest uppercase">Investment Partners</p>
            </div>

            {/* Professional Tagline */}
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6 animate-fade-in leading-tight">
              Empowering Visionary Founders<br/>
              <span className="text-red-600">in High-Growth Markets</span>
            </h2>

            {/* Enhanced Description */}
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in">
              We partner with exceptional entrepreneurs who demonstrate strong financial fundamentals, 
              clear growth strategies, and the vision to transform industries across emerging and established markets.
            </p>

            {/* Investment Focus Cards - More Professional */}
            <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Proven Revenue</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Strong cashflow and sustainable business models</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-6 h-6 border-2 border-white rounded-sm transform rotate-45"></div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Growth Strategy</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Clear pathways to scalable expansion</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-6 h-6 border-2 border-white rounded-sm transform rotate-12"></div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Exceptional Leaders</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Visionary founders with proven execution</p>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced CTA Button */}
            <div className="mb-8 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0"
              >
                Partner With Us
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>

            {/* Professional Partnership Message */}
            <p className="text-slate-600 text-base animate-fade-in max-w-2xl mx-auto leading-relaxed">
              We welcome strategic partnerships, founder introductions, and meaningful conversations 
              about building the future of business across global markets.
            </p>
          </div>
        </div>
      </div>

      {/* Professional Footer with Locations */}
      <footer className="py-6 bg-slate-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 Redsea Growth. All rights reserved.
            </p>
            
            {/* Global Presence */}
            <div className="flex space-x-8 text-sm text-slate-300">
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
      </footer>
    </div>
  );
};

export default Index;

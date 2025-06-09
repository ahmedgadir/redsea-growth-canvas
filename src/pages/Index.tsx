
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-red-50 to-slate-100 flex flex-col">
      {/* Main Content - Single Screen */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Enhanced Logo */}
            <div className="mb-12 animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                <span className="text-slate-900">Redsea</span>
                <span className="text-red-600 ml-3">Growth</span>
              </h1>
              
              {/* Simple underline inspired by reference image */}
              <div className="flex items-center justify-center mb-4">
                <div className="h-0.5 bg-red-600 w-24"></div>
              </div>
              
              <p className="text-slate-500 text-sm tracking-wider uppercase font-medium">Investment Partners</p>
            </div>

            {/* Simple Tagline */}
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-8 animate-fade-in">
              Backing exceptional founders<br/>
              <span className="text-red-600 font-medium">across East Africa</span>
            </h2>

            {/* Simple Description */}
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in">
              We partner with visionary entrepreneurs building the future 
              of business across East Africa's most dynamic markets.
            </p>

            {/* Simple CTA */}
            <div className="animate-fade-in">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Connect
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="py-6 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 Redsea Growth. All rights reserved.
            </p>
            
            <div className="flex space-x-8 text-sm text-slate-300">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <span>London</span>
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

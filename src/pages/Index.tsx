
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-red-50 to-slate-100 flex flex-col">
      {/* Main Content - Single Screen */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced Logo with decorative elements */}
            <div className="mb-12 animate-fade-in">
              {/* Logo container with border and background */}
              <div className="relative inline-block px-8 py-6 mb-6">
                {/* Decorative border */}
                <div className="absolute inset-0 border-2 border-red-200 rounded-lg"></div>
                <div className="absolute inset-1 border border-red-300 rounded-md"></div>
                
                {/* Corner decorations */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-600 rounded-full"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-600 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-600 rounded-full"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-600 rounded-full"></div>
                
                <h1 className="text-5xl md:text-6xl font-bold relative z-10">
                  <span className="text-slate-900">Redsea</span>
                  <span className="ml-3 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent font-extrabold tracking-tight">
                    Growth
                  </span>
                </h1>
              </div>
              
              {/* Decorative underline with dots */}
              <div className="flex items-center justify-center mb-4">
                <div className="h-px bg-red-300 w-12"></div>
                <div className="h-1.5 w-1.5 bg-red-600 rounded-full mx-3"></div>
                <div className="h-0.5 bg-red-600 w-16"></div>
                <div className="h-1.5 w-1.5 bg-red-600 rounded-full mx-3"></div>
                <div className="h-px bg-red-300 w-12"></div>
              </div>
              
              <p className="text-slate-500 text-sm tracking-wider uppercase font-medium">Investment Partners</p>
            </div>

            {/* Balanced Tagline */}
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-8 animate-fade-in max-w-3xl mx-auto">
              Backing exceptional founders building the future 
              <span className="text-red-600 font-medium"> across East Africa's most dynamic markets</span>
            </h2>

            {/* Balanced Description */}
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in">
              We partner with visionary entrepreneurs who are transforming industries 
              and creating lasting impact across the region's emerging economies.
            </p>

            {/* CTA */}
            <div className="animate-fade-in">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="mailto:team@redseagrowth.com">
                  Let's Connect
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
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

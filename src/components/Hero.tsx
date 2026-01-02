import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className={`relative z-10 text-center px-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
            Shantanu Singh
          </h1>
          <div className="h-1 w-32 bg-blue-500 mx-auto mb-6 animate-expand"></div>
        </div>

        <div className="space-y-2 mb-8">
          <p className="text-2xl md:text-3xl text-blue-300 font-semibold animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Azure Developer | API Integration Engineer
          </p>
          <p className="text-xl md:text-2xl text-slate-300 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            DevOps Engineer
          </p>
          <p className="text-lg md:text-xl text-slate-400 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            Infinite Computer Solution Pvt. Ltd.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <span className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
            AZ-204 Certified
          </span>
          <span className="px-6 py-2 bg-slate-700 text-white rounded-full font-semibold hover:bg-slate-600 transition-colors">
            Azure Expert
          </span>
          <span className="px-6 py-2 bg-slate-700 text-white rounded-full font-semibold hover:bg-slate-600 transition-colors">
            DevOps Specialist
          </span>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce-slow inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
        >
          Explore My Work
          <ChevronDown size={20} />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white opacity-50" />
      </div>
    </section>
  );
}

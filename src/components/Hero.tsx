import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Github, Linkedin, Youtube, Sparkles, ArrowRight, Code2, Camera, Film, Palette, ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import useEmblaCarousel from "embla-carousel-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const roles = [
    { 
      title: "Full-Stack Developer", 
      icon: Code2, 
      gradient: "from-cyan-400 via-blue-500 to-sky-600",
      description: "Building modern web applications"
    },
    { 
      title: "Photographer", 
      icon: Camera, 
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      description: "Capturing moments & stories"
    },
    { 
      title: "Video Editor", 
      icon: Film, 
      gradient: "from-pink-500 via-purple-500 to-fuchsia-600",
      description: "Creating cinematic content"
    },
    { 
      title: "Canva Designer", 
      icon: Palette, 
      gradient: "from-cyan-500 via-teal-500 to-emerald-500",
      description: "Designing stunning visuals"
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
      {/* Background Slider */}
      <BackgroundSlider />
      
      {/* Enhanced Text Readability Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-background/60 to-background/50 pointer-events-none"></div>
      <div className="absolute inset-0 z-10 bg-gradient-hero animate-gradient-shift bg-[length:200%_200%] opacity-40 pointer-events-none"></div>
      
      {/* Refined Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-primary/12 rounded-full blur-[150px] animate-float z-10 opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[160px] animate-float z-10 opacity-50" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent/10 rounded-full blur-[130px] animate-float z-10 opacity-40" style={{ animationDelay: "4s" }}></div>
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] animate-float z-10 opacity-50" style={{ animationDelay: "1s" }}></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Premium Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-8 bg-card/70 backdrop-blur-xl border border-primary/50 rounded-full animate-fade-in shadow-2xl group hover:border-primary/80 transition-all duration-500 hover:scale-105">
            <div className="relative">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-xs md:text-sm font-bold text-foreground tracking-wide" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
              Multi-Creative Professional
            </span>
            <div className="relative">
              <Sparkles className="w-4 h-4 text-secondary animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute inset-0 bg-secondary/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
          
          {/* Enhanced Main Heading */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1]">
            <span className="block mb-2 pb-2 animate-shimmer bg-[length:200%_auto]" style={{ 
              background: 'linear-gradient(135deg, #3B82F6, #06B6D4, #8B5CF6, #3B82F6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 4px 12px rgba(59, 130, 246, 0.4))',
              animation: 'shimmer 3s ease-in-out infinite'
            }}>
              👋 Hi, I'm
            </span>
            <span className="block mt-2 pb-2 animate-shimmer bg-[length:200%_auto]" style={{ 
              animationDelay: "0.3s",
              background: 'linear-gradient(135deg, #F97316, #EC4899, #F59E0B, #F97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 4px 12px rgba(249, 115, 22, 0.4))',
              animation: 'shimmer 3s ease-in-out infinite 0.3s'
            }}>
              Jatheeskumar Abiraj
            </span>
          </h1>
          
          {/* Enhanced Tagline with Better Typography */}
          <div className="max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-base md:text-lg lg:text-xl text-foreground/95 leading-relaxed text-center font-medium">
              Crafting{' '}
              <span className="relative inline-block font-bold text-primary group cursor-pointer">
                <span className="absolute -inset-1 bg-primary/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">digital experiences</span>
              </span>
              {' '}that merge{' '}
              <span className="relative inline-block font-bold text-secondary group cursor-pointer">
                <span className="absolute -inset-1 bg-secondary/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">creativity</span>
              </span>
              {' '}with{' '}
              <span className="relative inline-block font-bold text-accent group cursor-pointer">
                <span className="absolute -inset-1 bg-accent/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">cutting-edge technology</span>
              </span>
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Button 
              size="lg"
              className="group relative bg-gradient-primary hover:scale-110 text-primary-foreground shadow-glow-primary font-heading text-base md:text-lg px-10 py-7 rounded-full transition-all duration-500 hover:shadow-glow-secondary overflow-hidden border-2 border-transparent hover:border-primary/50"
              onClick={() => scrollToSection("portfolio")}
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="group border-2 border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground font-heading text-base md:text-lg px-10 py-7 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-glow-primary backdrop-blur-xl bg-card/40 hover:border-primary"
              onClick={() => scrollToSection("contact")}
            >
              <span className="flex items-center gap-3">
                Let's Create Together
                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              </span>
            </Button>
          </div>

          {/* Enhanced Social Icons */}
          <div className="flex gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            {[
              { icon: Instagram, href: "https://instagram.com", color: "text-primary", label: "Instagram" },
              { icon: Github, href: "https://github.com", color: "text-secondary", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", color: "text-primary", label: "LinkedIn" },
              { icon: Youtube, href: "https://youtube.com", color: "text-accent", label: "YouTube" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative w-14 h-14 rounded-2xl bg-card/50 backdrop-blur-xl border-2 border-primary/40 flex items-center justify-center transition-all duration-500 hover:scale-125 hover:shadow-glow-primary hover:border-primary hover:bg-gradient-primary hover:-translate-y-1"
                >
                  <Icon className={`w-6 h-6 ${social.color} group-hover:text-primary-foreground transition-colors duration-300 z-10 relative`} />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};

// Background Slider Component - Role-Based
const BackgroundSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1,
    duration: 25,
    containScroll: 'trimSnaps',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const portfolioItems = [
    {
      role: "Full-Stack Developer",
      icon: Code2,
      title: "Modern Web Applications",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=90",
      description: "React, Node.js, TypeScript",
      gradient: "from-cyan-400 via-blue-500 to-sky-600",
      projects: ["E-Commerce Platform", "Real-time Chat App", "Portfolio CMS"]
    },
    {
      role: "Photographer",
      icon: Camera,
      title: "Professional Photography",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&h=800&fit=crop&q=90",
      description: "Portrait, Event, Product Photography",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      projects: ["Portrait Sessions", "Event Coverage", "Product Shots"]
    },
    {
      role: "Video Editor",
      icon: Film,
      title: "Cinematic Video Production",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=800&fit=crop&q=90",
      description: "Premiere Pro, After Effects",
      gradient: "from-pink-500 via-purple-500 to-fuchsia-600",
      projects: ["Corporate Promos", "Music Videos", "Documentaries"]
    },
    {
      role: "Canva Designer",
      icon: Palette,
      title: "Creative Visual Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&q=90",
      description: "Brand Identity, Social Media, Graphics",
      gradient: "from-cyan-500 via-teal-500 to-emerald-500",
      projects: ["Brand Identity", "Social Templates", "Event Posters"]
    },
  ];

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return;
    
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Carousel Container - Full Screen Background */}
      <div className="w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {portfolioItems.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 h-full relative"
                style={{ flexShrink: 0 }}
              >
                {/* Full Screen Background Image - Single Image Only */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.role}
                    className="w-full h-full object-cover transition-transform duration-[5000ms] ease-in-out scale-105 hover:scale-110"
                    loading="eager"
                    style={{ 
                      filter: 'brightness(0.7) contrast(1.3) saturate(1.2)',
                      objectPosition: 'center',
                      width: '100%',
                      height: '100%'
                    }}
                  />
                  
                  {/* Enhanced Dark Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/55 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-transparent to-background/75"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-15 transition-opacity duration-500`}></div>
                  
                  {/* Subtle Animated Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 animate-pulse`} style={{ animationDuration: '4s' }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Hero;

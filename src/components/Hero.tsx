import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Github, Linkedin, Facebook, Rocket, ArrowRight, Code2, Camera, Film, Palette, ChevronLeft, ChevronRight } from "lucide-react";
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-22 lg:pt-24 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
      {/* Background Slider */}
      <BackgroundSlider />
      
      {/* Mobile Role Indicator - Shows Current Role - Positioned Below Header */}
      <div className="absolute top-16 sm:top-20 md:top-24 lg:top-28 left-1/2 -translate-x-1/2 z-30 lg:hidden">
        <MobileRoleIndicator />
      </div>
      
      {/* Enhanced Text Readability Overlays - Less on Mobile to Show Slider */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/60 via-background/40 to-background/30 sm:from-background/70 sm:via-background/55 sm:to-background/45 md:from-background/80 md:via-background/60 md:to-background/50 pointer-events-none transition-opacity duration-700"></div>
      <div className="absolute inset-0 z-10 bg-gradient-hero animate-gradient-shift bg-[length:200%_200%] opacity-20 sm:opacity-30 md:opacity-40 pointer-events-none transition-opacity duration-700"></div>
      
      {/* Refined Animated Gradient Orbs - Mobile Responsive */}
      <div className="absolute top-20 left-5 sm:left-10 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] bg-primary/12 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px] animate-float z-10 opacity-40 sm:opacity-50 md:opacity-60"></div>
      <div className="absolute bottom-20 right-5 sm:right-10 w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] xl:w-[700px] xl:h-[700px] bg-secondary/10 rounded-full blur-[90px] sm:blur-[110px] md:blur-[130px] lg:blur-[160px] animate-float z-10 opacity-30 sm:opacity-40 md:opacity-50" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] bg-accent/10 rounded-full blur-[70px] sm:blur-[90px] md:blur-[110px] lg:blur-[130px] animate-float z-10 opacity-25 sm:opacity-35 md:opacity-40" style={{ animationDelay: "4s" }}></div>
      <div className="absolute top-1/4 right-1/4 w-[160px] h-[160px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] bg-primary/10 rounded-full blur-[75px] sm:blur-[95px] md:blur-[115px] lg:blur-[140px] animate-float z-10 opacity-30 sm:opacity-40 md:opacity-50" style={{ animationDelay: "1s" }}></div>

      {/* Content - Mobile Responsive - Premium Design */}
      <div className="relative z-20 container mx-auto px-4 sm:px-5 md:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Premium Badge - Mobile Responsive */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 md:gap-3 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3.5 mb-4 sm:mb-5 md:mb-7 lg:mb-9 bg-card/80 backdrop-blur-xl border-2 border-primary/60 rounded-full animate-fade-in shadow-2xl group hover:border-primary/90 transition-all duration-500 hover:scale-105">
            <div className="relative">
              <Rocket className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-primary animate-pulse" />
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-xs sm:text-xs md:text-sm lg:text-base font-bold text-foreground tracking-wide" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
              Multi-Creative Professional
            </span>
            <div className="relative">
              <Rocket className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-secondary animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute inset-0 bg-secondary/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
          
          {/* Enhanced Main Heading - Mobile Responsive */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-4 sm:mb-5 md:mb-6 lg:mb-7 leading-[1.1] sm:leading-[1.15] px-2 sm:px-3">
            <span className="block mb-0.5 sm:mb-1 md:mb-2 pb-0.5 sm:pb-1 md:pb-2 animate-shimmer bg-[length:200%_auto]" style={{ 
              background: 'linear-gradient(135deg, #3B82F6, #06B6D4, #8B5CF6, #3B82F6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 8px rgba(59, 130, 246, 0.4))',
              animation: 'shimmer 3s ease-in-out infinite'
            }}>
              👋 Hi, I'm
            </span>
            <span className="block mt-0.5 sm:mt-1 md:mt-2 pb-0.5 sm:pb-1 md:pb-2 animate-shimmer bg-[length:200%_auto]" style={{ 
              animationDelay: "0.3s",
              background: 'linear-gradient(135deg, #F97316, #EC4899, #F59E0B, #F97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 8px rgba(249, 115, 22, 0.4))',
              animation: 'shimmer 3s ease-in-out infinite 0.3s'
            }}>
              Jatheeskumar Abiraj
            </span>
          </h1>
          
          {/* Enhanced Tagline - Mobile Responsive */}
          <div className="max-w-3xl mx-auto mb-5 sm:mb-6 md:mb-7 lg:mb-9 xl:mb-11 animate-fade-in-up px-3 sm:px-4 md:px-6" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm sm:text-base text-foreground/95 leading-relaxed text-center font-medium">
              Crafting{' '}
              <span className="relative inline-block font-bold text-primary group cursor-pointer">
                <span className="absolute -inset-0.5 sm:-inset-1 bg-primary/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">digital experiences</span>
              </span>
              {' '}that merge{' '}
              <span className="relative inline-block font-bold text-secondary group cursor-pointer">
                <span className="absolute -inset-0.5 sm:-inset-1 bg-secondary/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">creativity</span>
              </span>
              {' '}with{' '}
              <span className="relative inline-block font-bold text-accent group cursor-pointer">
                <span className="absolute -inset-0.5 sm:-inset-1 bg-accent/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">cutting-edge technology</span>
              </span>
            </p>
          </div>

          {/* Enhanced CTA Buttons - Mobile Responsive */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center mb-5 sm:mb-6 md:mb-7 lg:mb-9 xl:mb-11 animate-fade-in-up px-3 sm:px-4 md:px-6" style={{ animationDelay: "0.5s" }}>
            <Button 
              size="lg"
              className="group relative bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-500 overflow-hidden w-full sm:w-auto"
              onClick={() => scrollToSection("portfolio")}
            >
              <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                Explore My Work
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="group border-2 border-primary/70 text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-sm sm:text-base px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-lg backdrop-blur-xl bg-card/50 hover:border-primary w-full sm:w-auto"
              onClick={() => scrollToSection("contact")}
            >
              <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                Let's Create Together
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-500" />
              </span>
            </Button>
          </div>

          {/* Enhanced Social Icons - Mobile Responsive */}
          <div className="flex gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 justify-center animate-fade-in-up px-3 sm:px-4" style={{ animationDelay: "0.6s" }}>
            {[
              { icon: Instagram, href: "https://www.instagram.com/jatheeskumar_abiraj?igsh=cHBpY294c2ZtaXhv&utm_source=qr", color: "text-primary", label: "Instagram" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/jatheeskumar-abiraj-182901278/", color: "text-primary", label: "LinkedIn" },
              { icon: Facebook, href: "https://www.facebook.com/abiraj.jatheeskumar?mibextid=wwXIfr", color: "text-accent", label: "Facebook" },
              { icon: Github, href: "https://github.com/Abiraj-Jatheeskumar", color: "text-secondary", label: "GitHub" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-card/60 backdrop-blur-xl border-2 border-primary/50 flex items-center justify-center transition-all duration-500 hover:scale-110 sm:hover:scale-125 hover:shadow-glow-primary hover:border-primary/80 hover:bg-gradient-primary hover:-translate-y-1 shadow-lg"
                >
                  <Icon className={`w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 ${social.color} group-hover:text-primary-foreground transition-colors duration-300 z-10 relative`} />
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

// Mobile Role Indicator Component
const MobileRoleIndicator = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const roles = [
    { icon: Code2, label: "Developer", gradient: "from-cyan-400 to-blue-600" },
    { icon: Camera, label: "Photographer", gradient: "from-orange-500 to-amber-500" },
    { icon: Film, label: "Video Editor", gradient: "from-pink-500 to-purple-600" },
    { icon: Palette, label: "Designer", gradient: "from-cyan-500 to-teal-500" },
  ];

  // Listen for slide changes via custom event
  useEffect(() => {
    const handleSlideChange = (e: CustomEvent) => {
      setSelectedIndex(e.detail.index);
    };
    
    window.addEventListener('hero-slide-change' as any, handleSlideChange as EventListener);
    return () => {
      window.removeEventListener('hero-slide-change' as any, handleSlideChange as EventListener);
    };
  }, []);

  const currentRole = roles[selectedIndex];
  const IconComponent = currentRole.icon;

  return (
    <div className="flex items-center gap-3 px-4 py-2.5 bg-card/90 backdrop-blur-xl border-2 border-primary/50 rounded-full shadow-2xl animate-fade-in transition-all duration-500">
      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${currentRole.gradient} flex items-center justify-center shadow-lg transition-all duration-500`}>
        <IconComponent className="w-4 h-4 text-white" />
      </div>
      <span className="text-sm font-bold text-foreground transition-all duration-500">{currentRole.label}</span>
      <div className="flex gap-1">
        {roles.map((role, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === selectedIndex 
                ? `bg-gradient-to-r ${role.gradient} w-4 shadow-glow-primary` 
                : 'w-1.5 bg-muted-foreground/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Background Slider Component - Role-Based
const BackgroundSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1,
    duration: 30,
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
      const newIndex = emblaApi.selectedScrollSnap();
      setSelectedIndex(newIndex);
      // Dispatch custom event for mobile indicator
      window.dispatchEvent(new CustomEvent('hero-slide-change', { detail: { index: newIndex } }));
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

  // Auto-play functionality - Faster on mobile for better visibility
  useEffect(() => {
    if (!emblaApi) return;
    
    const isMobile = window.innerWidth < 768;
    const interval = isMobile ? 4000 : 5000; // 4s on mobile, 5s on desktop
    
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, interval);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" data-embla-container>
      {/* Carousel Container - Full Screen Background */}
      <div className="w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {portfolioItems.map((item, index) => {
            const isActive = index === selectedIndex;
            return (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 h-full relative transition-all duration-1000 ease-in-out"
                style={{ 
                  flexShrink: 0, 
                  opacity: isActive ? 1 : 0.15,
                  transform: isActive ? 'scale(1)' : 'scale(1.05)',
                  zIndex: isActive ? 1 : 0
                }}
              >
                {/* Full Screen Background Image - Enhanced for Mobile */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.role}
                    className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                      isActive ? 'scale-100 sm:scale-105' : 'scale-110 sm:scale-115'
                    }`}
                    loading="eager"
                    style={{ 
                      filter: isActive 
                        ? 'brightness(0.65) contrast(1.4) saturate(1.3)' // More visible on mobile
                        : 'brightness(0.5) contrast(1.2) saturate(1.1) grayscale(0.2)',
                      objectPosition: 'center',
                      width: '100%',
                      height: '100%'
                    }}
                  />
                  
                  {/* Enhanced Dark Overlay - Less on Mobile */}
                  <div className={`absolute inset-0 bg-gradient-to-b transition-all duration-1000 ${
                    isActive 
                      ? 'from-background/70 via-background/50 to-background/35 sm:from-background/75 sm:via-background/60 sm:to-background/45 md:from-background/85 md:via-background/70 md:to-background/55'
                      : 'from-background/90 via-background/85 to-background/80'
                  }`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-r transition-all duration-1000 ${
                    isActive
                      ? 'from-background/60 via-transparent to-background/60 sm:from-background/70 sm:via-transparent sm:to-background/70'
                      : 'from-background/85 via-background/80 to-background/85'
                  }`}></div>
                  
                  {/* Role-Based Gradient Overlay - More Visible on Mobile */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-all duration-1000 ${
                    isActive 
                      ? 'opacity-20 sm:opacity-15 md:opacity-12' 
                      : 'opacity-5'
                  }`}></div>
                  
                  {/* Animated Pulse Effect - More Pronounced on Mobile */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-opacity duration-1000 ${
                      isActive ? 'opacity-10 animate-pulse' : 'opacity-0'
                    }`} 
                    style={{ animationDuration: '3s' }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Mobile Progress Indicator - Bottom Center - More Visible */}
      <div className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 z-30 lg:hidden">
        <div className="flex items-center gap-2.5 px-5 py-2.5 bg-card/90 backdrop-blur-xl border-2 border-primary/50 rounded-full shadow-2xl">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === selectedIndex 
                  ? `w-10 bg-gradient-to-r ${item.gradient} shadow-glow-primary` 
                  : 'w-2 bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;

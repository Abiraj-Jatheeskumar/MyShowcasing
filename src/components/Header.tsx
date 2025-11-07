import { useState, useEffect } from "react";
import { Sparkles, Menu, X, Code2, Zap, Home, Camera, Film, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["hero", "about", "skills", "portfolio", "services", "contact"];
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "hero", icon: Home },
    { label: "About", id: "about", icon: Sparkles },
    { label: "Skills", id: "skills", icon: Code2 },
    { label: "Portfolio", id: "portfolio", icon: Palette },
    { label: "Services", id: "services", icon: Film },
  ];

  const roleIcons = [
    { icon: Code2, delay: "0s", orbit: "orbit-1" },
    { icon: Camera, delay: "0.1s", orbit: "orbit-2" },
    { icon: Film, delay: "0.2s", orbit: "orbit-3" },
    { icon: Palette, delay: "0.3s", orbit: "orbit-4" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/90 backdrop-blur-2xl border-b border-primary/20 shadow-2xl shadow-primary/5"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 lg:h-24">
          {/* Logo - Far Left */}
          <div className="flex-shrink-0 -ml-2 lg:-ml-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="group flex items-center gap-3 sm:gap-4 hover:scale-105 transition-all duration-300 relative z-10"
            >
            {/* Professional Logo Matching Website Colors */}
            <div className="relative w-16 h-16 sm:w-18 sm:h-18">
              {/* Multi-Layer Glow - Website Color Scheme */}
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl blur-2xl opacity-25 group-hover:opacity-60 transition-opacity duration-700"></div>
              <div className="absolute -inset-2 bg-gradient-accent rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Main Container - Matching Website Theme */}
              <div className="relative w-full h-full rounded-2xl bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:shadow-glow-primary transition-all duration-500 overflow-hidden border-2 border-primary/30 group-hover:border-primary/70">
                {/* Animated Gradient Overlay - Website Gradients */}
                <div className="absolute inset-0 bg-gradient-primary opacity-5 group-hover:opacity-15 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                
                {/* Professional Role Icons in Corners - Website Colors */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Top Left - Code (Developer) */}
                  <div className="absolute top-1 left-1 w-4 h-4 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    <Code2 className="w-3 h-3 text-primary group-hover:text-accent transition-colors drop-shadow-lg" />
                  </div>
                  
                  {/* Top Right - Camera (Photographer) */}
                  <div className="absolute top-1 right-1 w-4 h-4 flex items-center justify-center group-hover:scale-125 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
                    <Camera className="w-3 h-3 text-primary group-hover:text-accent transition-colors drop-shadow-lg" />
                  </div>
                  
                  {/* Bottom Left - Film (Video Editor) */}
                  <div className="absolute bottom-1 left-1 w-4 h-4 flex items-center justify-center group-hover:scale-125 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
                    <Film className="w-3 h-3 text-primary group-hover:text-accent transition-colors drop-shadow-lg" />
                  </div>
                  
                  {/* Bottom Right - Palette (Designer) */}
                  <div className="absolute bottom-1 right-1 w-4 h-4 flex items-center justify-center group-hover:scale-125 transition-transform duration-300" style={{ animationDelay: '0.3s' }}>
                    <Palette className="w-3 h-3 text-primary group-hover:text-accent transition-colors drop-shadow-lg" />
                  </div>
                </div>
                
                {/* Central JA Monogram - Website Color Scheme */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="relative">
                    {/* J with Website Primary Color */}
                    <span className="relative font-heading text-2xl sm:text-3xl font-black text-primary leading-none group-hover:text-accent transition-colors duration-300 inline-block drop-shadow-lg">
                      J
                      <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-primary group-hover:bg-gradient-accent transition-all duration-300"></span>
                    </span>
                    
                    {/* A with Website Accent Gradient */}
                    <span className="relative font-heading text-2xl sm:text-3xl font-black bg-gradient-accent bg-clip-text text-transparent leading-none inline-block ml-0.5 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                      A
                    </span>
                  </div>
                </div>
                
                {/* Animated Border Ring - Website Colors */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/40 transition-all duration-500"></div>
                
                {/* Professional Accent Dots - Website Colors */}
                <div className="absolute top-2 left-3 w-1 h-1 bg-primary rounded-full opacity-70 group-hover:opacity-100 animate-pulse" style={{ animationDelay: '0s' }}></div>
                <div className="absolute bottom-2 right-3 w-1 h-1 bg-accent rounded-full opacity-70 group-hover:opacity-100 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            
            {/* Brand Text - Responsive */}
            <div className="hidden sm:block lg:hidden">
              <div className="flex flex-col">
                <h1 className="font-heading text-base font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                  Jatheeskumar
                </h1>
                <p className="text-[10px] text-muted-foreground font-medium leading-tight">
                  Multi-Creative Professional
                </p>
              </div>
            </div>
            
            {/* Full Branding on Large Screens */}
            <div className="hidden lg:block ml-3">
              <h1 className="font-heading text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                Jatheeskumar Abiraj
              </h1>
              <p className="text-xs text-muted-foreground font-medium leading-tight mt-0.5">
                Multi-Creative Professional
              </p>
            </div>
            </button>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-2 flex-1 justify-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id || (item.id === "hero" && activeSection === "");
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative group px-5 py-2.5 h-10 rounded-xl transition-all duration-300 flex items-center justify-center",
                    isActive
                      ? "text-primary bg-primary/10 shadow-glow-soft"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  )}
                >
                  <span className="relative z-10 flex items-center gap-2 font-semibold text-sm whitespace-nowrap">
                    <Icon className={cn(
                      "w-4 h-4 transition-all duration-300 flex-shrink-0",
                      isActive ? "text-primary scale-110" : "group-hover:scale-110"
                    )} />
                    {item.label}
                  </span>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-primary rounded-full"></div>
                  )}
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
                </Button>
              );
            })}
            
          </nav>

          {/* Hire Me Button - Far Right */}
          <div className="hidden lg:flex flex-shrink-0 -mr-2 lg:-mr-4">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-primary hover:scale-105 text-primary-foreground shadow-glow-primary rounded-xl px-6 py-2.5 h-10 transition-all duration-300 hover:shadow-glow-secondary font-bold text-sm relative overflow-hidden group flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                Hire Me
                <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500 flex-shrink-0" />
              </span>
              <div className="absolute inset-0 bg-gradient-ocean opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300",
              isMobileMenuOpen
                ? "bg-gradient-primary text-primary-foreground shadow-glow-primary"
                : "bg-card/50 backdrop-blur-sm border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60"
            )}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={cn(
                "absolute inset-0 transition-all duration-300",
                isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              )} />
              <X className={cn(
                "absolute inset-0 transition-all duration-300",
                isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-background/95 backdrop-blur-2xl z-40 animate-fade-in">
            <nav className="container mx-auto px-6 py-8 flex flex-col gap-3">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id || (item.id === "hero" && activeSection === "");
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "group relative w-full justify-start px-6 py-4 rounded-xl text-left transition-all duration-300 animate-fade-in-up",
                      isActive
                        ? "text-primary bg-primary/10 shadow-glow-soft border-2 border-primary/30"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5 border-2 border-transparent"
                    )}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
                        isActive
                          ? "bg-gradient-primary text-primary-foreground shadow-glow-soft"
                          : "bg-card/50 text-primary group-hover:bg-primary/10"
                      )}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-base flex-1">{item.label}</span>
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-gradient-primary animate-pulse"></div>
                      )}
                    </div>
                    
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
                  </Button>
                );
              })}
              
              {/* Mobile CTA Button - Hire Me */}
              <Button
                onClick={() => scrollToSection("contact")}
                className="mt-4 w-full bg-gradient-primary hover:scale-[1.02] text-primary-foreground shadow-glow-primary rounded-xl px-6 py-4 transition-all duration-300 hover:shadow-glow-secondary font-bold text-base relative overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${navItems.length * 0.1}s` }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  Hire Me
                  <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-ocean opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

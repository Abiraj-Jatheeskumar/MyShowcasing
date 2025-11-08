import { useState, useEffect } from "react";
import { Menu, X, Home, Film, Palette, MessageSquare, User, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo7.png";

// Professional Logo - Background Removed with Canvas Processing
const ProfessionalRoleLogo = () => {
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  useEffect(() => {
    const processImage = () => {
      const img = new Image();
      img.src = logoImage;
      
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d', { willReadFrequently: true });
          if (!ctx) {
            setProcessedImage(logoImage);
            return;
          }
          
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          ctx.drawImage(img, 0, 0);
          
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
          
          // Process each pixel to remove dark background and hidden parts
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const a = data[i + 3];
            
            // Calculate brightness and saturation
            const brightness = (r + g + b) / 3;
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            const saturation = max === 0 ? 0 : (max - min) / max;
            
            // Enhanced golden/yellow detection (keep these)
            // Golden colors: high red and green, low blue, good saturation
            const isGolden = (
              // Bright gold
              (r > 150 && g > 120 && b < 120 && saturation > 0.3) ||
              (r > 170 && g > 140 && b < 130) ||
              (r > 180 && g > 150 && b < 140) ||
              (r > 200 && g > 170) ||
              // Medium gold
              (r > 140 && g > 110 && b < 110 && brightness > 120) ||
              // Darker gold (aged/metallic)
              (r > 120 && g > 100 && b < 100 && r > b + 20 && g > b + 10)
            );
            
            // Detect all non-golden backgrounds to hide
            const isDarkBackground = (
              // Very dark (black, dark grey)
              brightness < 80 ||
              // Dark olive-brown (low brightness, low saturation, brownish)
              (brightness < 110 && saturation < 0.4 && r < 100 && g < 90 && b < 80) ||
              // Dark grey tones
              (brightness < 100 && saturation < 0.3) ||
              // Medium dark non-golden colors
              (brightness < 120 && !isGolden && saturation < 0.5)
            );
            
            // Detect blue frame/outline colors
            const isBlue = brightness < 120 && b > r + 20 && b > g + 20;
            
            // Detect brown/olive background colors
            const isBrownOlive = (
              (brightness < 130 && r < 120 && g < 110 && b < 100) ||
              (brightness < 150 && saturation < 0.35 && r < g + 30 && b < r)
            );
            
            // Hide non-golden backgrounds completely
            if ((isDarkBackground || isBlue || isBrownOlive) && !isGolden) {
              data[i + 3] = 0; // Fully transparent
            } else if (!isGolden && brightness < 130 && brightness > 80) {
              // Smooth transition for edge pixels
              const fadeFactor = (brightness - 80) / 50; // Fade from 80-130 brightness
              data[i + 3] = Math.max(0, Math.floor(a * fadeFactor * 0.3));
            } else if (!isGolden && brightness >= 130 && brightness < 150 && saturation < 0.4) {
              // Hide light but desaturated background colors
              data[i + 3] = Math.max(0, Math.floor(a * 0.1));
            }
          }
          
          // Second pass: Smooth edges by checking neighboring pixels
          const smoothedData = new Uint8ClampedArray(data);
          for (let y = 1; y < canvas.height - 1; y++) {
            for (let x = 1; x < canvas.width - 1; x++) {
              const idx = (y * canvas.width + x) * 4;
              const alpha = data[idx + 3];
              
              // If pixel is semi-transparent, check neighbors
              if (alpha > 0 && alpha < 255) {
                let goldenNeighbors = 0;
                let transparentNeighbors = 0;
                
                // Check 8 neighboring pixels
                for (let dy = -1; dy <= 1; dy++) {
                  for (let dx = -1; dx <= 1; dx++) {
                    if (dx === 0 && dy === 0) continue;
                    const nIdx = ((y + dy) * canvas.width + (x + dx)) * 4;
                    const nAlpha = data[nIdx + 3];
                    const nR = data[nIdx];
                    const nG = data[nIdx + 1];
                    const nB = data[nIdx + 2];
                    const nBrightness = (nR + nG + nB) / 3;
                    const nIsGolden = (nR > 150 && nG > 120 && nB < 120);
                    
                    if (nAlpha === 0) transparentNeighbors++;
                    if (nIsGolden && nAlpha > 200) goldenNeighbors++;
                  }
                }
                
                // If surrounded by golden pixels, make more opaque
                if (goldenNeighbors > 4) {
                  smoothedData[idx + 3] = Math.min(255, alpha + 30);
                }
                // If surrounded by transparent, make more transparent
                if (transparentNeighbors > 5) {
                  smoothedData[idx + 3] = Math.max(0, alpha - 40);
                }
              }
            }
          }
          
          ctx.putImageData(new ImageData(smoothedData, canvas.width, canvas.height), 0, 0);
          const processed = canvas.toDataURL('image/png');
          setProcessedImage(processed);
        } catch (error) {
          console.error('Error processing image:', error);
          setProcessedImage(logoImage);
        }
      };
      
      img.onerror = () => {
        setProcessedImage(logoImage);
      };
    };
    
    processImage();
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Subtle rotating glow ring - Reduced for better visibility */}
      <div 
        className="absolute inset-0 rounded-full opacity-15 group-hover:opacity-35 transition-opacity duration-500"
        style={{
          background: 'conic-gradient(from 0deg, rgba(251, 191, 36, 0.4), rgba(217, 119, 6, 0.3), rgba(251, 191, 36, 0.4))',
          filter: 'blur(20px)',
          transform: 'scale(1.4)',
          animation: 'rotateGradient 12s linear infinite',
        }}
      />
      
      {/* Very subtle pulsing glow - Reduced */}
      <div 
        className="absolute inset-0 rounded-full opacity-10 group-hover:opacity-25 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.5) 0%, transparent 70%)',
          filter: 'blur(22px)',
          animation: 'pulseSmooth 4s ease-in-out infinite',
        }}
      />
      
      {/* Main logo - Clear and prominent */}
      <div
        className="relative z-10"
        style={{
          animation: 'iconFloat 5s ease-in-out infinite',
        }}
      >
        <img
          src={processedImage || logoImage}
          alt="Logo"
          className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
          style={{
            filter: `
              drop-shadow(0 3px 12px rgba(251, 191, 36, 0.5))
              drop-shadow(0 6px 24px rgba(217, 119, 6, 0.4))
              drop-shadow(0 10px 40px rgba(0, 0, 0, 0.3))
              brightness(1.05)
              contrast(1.2)
              saturate(1.1)
            `,
            imageRendering: 'high-quality',
            transform: 'translateZ(0)',
            WebkitFontSmoothing: 'antialiased',
            opacity: 1,
          }}
        />
      </div>
      
      {/* Moderate golden glow effect on hover - Reduced */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-full blur-2xl pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.7) 0%, rgba(217, 119, 6, 0.5) 50%, transparent 80%)',
        }}
      />
      
      {/* Subtle shimmer effect on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
          animation: 'shimmer 3s ease-in-out infinite',
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["hero", "about", "services", "portfolio", "testimonials", "contact"];
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
    { label: "About", id: "about", icon: User },
    { label: "Services", id: "services", icon: Film },
    { label: "Portfolio", id: "portfolio", icon: Palette },
    { label: "Testimonials", id: "testimonials", icon: MessageSquare },
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
      <div className="container mx-auto px-4 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo - Far Left - Compact Size */}
          <div className="flex-shrink-0 -ml-2 sm:-ml-3 md:-ml-4 lg:-ml-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="group flex items-center gap-2 sm:gap-2.5 hover:scale-105 transition-all duration-500 ease-out relative z-10"
            >
            {/* Professional Logo - Reduced Size */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px]">
              {/* Subtle outer glow - Only visible on hover */}
              <div 
                className="absolute -inset-1.5 sm:-inset-2 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'conic-gradient(from 0deg, rgba(251, 191, 36, 0.6), rgba(217, 119, 6, 0.5), rgba(251, 191, 36, 0.6))',
                  animation: 'rotateGradient 12s linear infinite',
                }}
              ></div>
              
              {/* Logo Container - Clear and Visible */}
              <div className="relative w-full h-full flex items-center justify-center">
                <ProfessionalRoleLogo />
              </div>
            </div>
            
            {/* Brand Text - Compact - Show on Medium and Up */}
            <div className="hidden md:block lg:hidden">
              <div className="flex flex-col">
                <h1 className="font-heading text-sm font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                  Jatheeskumar
                </h1>
              </div>
            </div>
            
            {/* Compact Branding on Large Screens */}
            <div className="hidden lg:block ml-2">
              <h1 className="font-heading text-base font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                Jatheeskumar Abiraj
              </h1>
              <p className="text-[10px] text-muted-foreground font-medium leading-tight">
                Multi-Creative
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
                <Zap className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500 flex-shrink-0" />
              </span>
              <div className="absolute inset-0 bg-gradient-ocean opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
          </div>

          {/* Mobile Menu Button - Right Side Corner - Enhanced Visibility */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl sm:rounded-xl transition-all duration-300 ml-auto z-50",
              isMobileMenuOpen
                ? "bg-gradient-primary text-primary-foreground shadow-glow-primary scale-105 border-2 border-primary/80"
                : "bg-background/95 backdrop-blur-xl border-2 border-primary/60 text-primary hover:bg-primary/30 hover:border-primary/90 hover:scale-105 shadow-2xl shadow-primary/30"
            )}
            aria-label="Toggle menu"
          >
            {/* Dark Background Layer for Better Visibility */}
            <div className={cn(
              "absolute inset-0 rounded-xl sm:rounded-xl transition-all duration-300",
              isMobileMenuOpen
                ? "bg-gradient-primary opacity-100"
                : "bg-background/90 backdrop-blur-md opacity-100"
            )}></div>
            
            {/* Glow Effect */}
            <div className={cn(
              "absolute -inset-1 rounded-xl sm:rounded-xl blur-md transition-all duration-300",
              isMobileMenuOpen
                ? "bg-primary/50 opacity-100"
                : "bg-primary/30 opacity-60 group-hover:opacity-100"
            )}></div>
            
            {/* Icon Container */}
            <div className="relative w-6 h-6 z-10">
              <Menu className={cn(
                "absolute inset-0 transition-all duration-300 text-primary",
                isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              )} />
              <X className={cn(
                "absolute inset-0 transition-all duration-300 text-primary-foreground",
                isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Menu - Full Screen Overlay - Premium Mobile Design */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-background/98 backdrop-blur-3xl z-40 animate-fade-in border-t border-primary/20">
            <nav className="container mx-auto px-5 sm:px-6 py-8 sm:py-10 flex flex-col gap-3 sm:gap-4">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id || (item.id === "hero" && activeSection === "");
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "group relative w-full justify-start px-5 sm:px-6 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-left transition-all duration-300 animate-fade-in-up backdrop-blur-sm",
                      isActive
                        ? "text-primary bg-gradient-primary/20 shadow-glow-soft border-2 border-primary/50 shadow-lg"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/10 border-2 border-primary/20 hover:border-primary/40 hover:shadow-md"
                    )}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4 sm:gap-5 w-full">
                      <div className={cn(
                        "w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 shadow-lg",
                        isActive
                          ? "bg-gradient-primary text-primary-foreground shadow-glow-primary scale-110"
                          : "bg-card/60 backdrop-blur-md text-primary group-hover:bg-primary/20 group-hover:scale-105 border border-primary/30"
                      )}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="font-bold text-base sm:text-lg flex-1">{item.label}</span>
                      {isActive && (
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-primary animate-pulse flex-shrink-0 shadow-glow-primary"></div>
                      )}
                    </div>
                    
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-15 rounded-xl transition-opacity duration-300"></div>
                  </Button>
                );
              })}
              
              {/* Mobile CTA Button - Hire Me - Premium Design */}
              <Button
                onClick={() => scrollToSection("contact")}
                className="mt-4 sm:mt-6 w-full bg-gradient-primary hover:scale-[1.03] text-primary-foreground shadow-glow-primary rounded-xl sm:rounded-2xl px-6 sm:px-8 py-4 sm:py-5 transition-all duration-300 hover:shadow-glow-secondary font-bold text-base sm:text-lg relative overflow-hidden group animate-fade-in-up border-2 border-primary/50"
                style={{ animationDelay: `${navItems.length * 0.1}s` }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3 sm:gap-4">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                  Hire Me
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-180 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-ocean opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

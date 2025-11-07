import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles, Palette, Code, Camera, Film } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding & Canva Design",
      description: "Transform your brand identity with stunning visuals that captivate and convert audiences instantly",
      features: ["Custom brand identity", "Social media kit", "Print-ready designs", "Unlimited revisions", "Modern & trendy designs"],
      gradient: "from-pink-500 via-purple-500 to-fuchsia-600"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build powerful, scalable web applications that drive business growth and user engagement",
      features: ["Responsive design", "Modern tech stack", "SEO optimized", "Performance focused", "Full-stack solutions"],
      gradient: "from-cyan-400 via-blue-500 to-sky-600"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capture moments that tell your story with professional-grade photography and artistic vision",
      features: ["Professional editing", "High-resolution files", "Creative direction", "Fast turnaround", "Multiple styles"],
      gradient: "from-orange-500 via-amber-500 to-yellow-500"
    },
    {
      icon: Film,
      title: "Video Editing",
      description: "Create cinematic videos that engage audiences and elevate your content to the next level",
      features: ["Color grading", "Sound design", "Motion graphics", "Multiple formats", "Cinematic effects"],
      gradient: "from-cyan-500 via-teal-500 to-emerald-500"
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-32 bg-card relative overflow-hidden">
      {/* Stunning Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] animate-float"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent/10 rounded-full blur-[130px] animate-float" style={{ animationDelay: "4s" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-6">
            <Sparkles className="w-10 h-10 text-primary mr-4 animate-glow-pulse" />
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-sunset bg-clip-text text-transparent pb-2">
              What I Offer
            </h2>
            <Sparkles className="w-10 h-10 text-secondary ml-4 animate-glow-pulse" style={{ animationDelay: "1s" }} />
          </div>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed pb-2">
            Premium services designed to bring your <span className="text-primary font-bold">vision</span> to life with <span className="text-secondary font-bold">creativity</span>, <span className="text-accent font-bold">precision</span>, and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group relative p-10 pb-12 bg-background/60 backdrop-blur-xl border-2 border-border/50 hover:border-primary/80 transition-all duration-700 hover:shadow-glow-primary hover:-translate-y-4 animate-scale-in overflow-visible"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  {/* Premium Icon */}
                  <div className={`relative w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                    <Icon className="w-10 h-10 text-white relative z-10" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-heading text-3xl font-black mb-4 text-foreground group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 leading-tight pb-1">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors pb-2">{service.description}</p>
                  </div>
                  
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={feature} className="flex items-start gap-4 text-base text-muted-foreground group-hover:text-foreground transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-125 group-hover:text-secondary transition-all duration-300" style={{ animationDelay: `${idx * 0.05}s` }} />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-fade-in-up mt-12" style={{ animationDelay: "0.6s" }}>
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="group relative bg-gradient-sunset hover:scale-110 text-primary-foreground shadow-glow-primary font-heading text-xl px-16 py-9 rounded-full transition-all duration-500 hover:shadow-glow-secondary overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Let's Create Something Amazing
              <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
            </span>
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

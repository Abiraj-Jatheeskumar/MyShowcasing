import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase, Palette, Code, Camera, Film, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Stunning visuals and brand identity that captivate audiences",
      gradient: "from-pink-500 via-purple-500 to-fuchsia-600",
      features: ["Logo Design", "Brand Identity", "Social Media Graphics"],
      stats: "10 Projects"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive web applications with cutting-edge technology",
      gradient: "from-cyan-400 via-blue-500 to-sky-600",
      features: ["React & Node.js", "Full-Stack Solutions", "Mobile Responsive"],
      stats: "10 Projects"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography with artistic vision and creativity",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      features: ["Portrait & Events", "Professional Editing", "Creative Direction"],
      stats: "5 Projects"
    },
    {
      icon: Film,
      title: "Video Editing",
      description: "Cinematic videos that engage and elevate your content",
      gradient: "from-cyan-500 via-teal-500 to-emerald-500",
      features: ["Color Grading", "Motion Graphics", "Cinematic Effects"],
      stats: "20 Projects"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1] as const,
      },
    },
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-background relative overflow-hidden">
      {/* Enhanced Background Effects - Mobile Optimized */}
      <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-primary/8 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-secondary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] bg-accent/6 rounded-full blur-3xl animate-float" style={{ animationDelay: "6s" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Enhanced Section Header - Mobile Responsive */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="relative">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-lg animate-ping"></div>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                What I Do
              </span>
            </h2>
            <div className="relative">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-secondary" style={{ animationDelay: "0.5s" }} />
              <div className="absolute inset-0 bg-secondary/30 rounded-full blur-lg animate-ping" style={{ animationDelay: "0.5s" }}></div>
            </div>
            <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent to-secondary"></div>
          </motion.div>
          
          <motion.p 
            className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Creative services to bring your vision to life
          </motion.p>
          
          {/* Decorative Element - Mobile Responsive */}
          <motion.div 
            className="flex items-center justify-center gap-2 mt-6 sm:mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="h-px w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />
            <div className="h-px w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Enhanced Services Grid - Mobile First Responsive */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <Card 
                  className="group relative bg-card/60 backdrop-blur-xl border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col cursor-pointer"
                >
                  {/* Animated Gradient Background */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10`}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                  
                  {/* Top Border Glow - Enhanced */}
                  <motion.div 
                    className={`absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100`}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                  
                  {/* Corner Accent */}
                  <motion.div 
                    className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-bl-full`}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon - Enhanced with Animation */}
                    <motion.div 
                      className="mb-4 sm:mb-5 md:mb-6"
                      variants={iconVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={index}
                    >
                      <motion.div 
                        className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white relative z-10" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        <div className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500`}></div>
                      </motion.div>
                    </motion.div>
                    
                    {/* Title - Enhanced */}
                    <motion.h3 
                      className="font-heading text-base sm:text-lg font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    {/* Description - Enhanced */}
                    <motion.p 
                      className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 sm:mb-5 md:mb-6 group-hover:text-foreground/90 transition-colors flex-grow"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                    
                    {/* Features List - Mobile Responsive */}
                    <motion.div 
                      className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 md:mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      {service.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center gap-2 text-xs sm:text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 + 0.5 }}
                        >
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                          <span className="font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    {/* Stats Badge - Mobile Responsive */}
                    <motion.div 
                      className="mt-auto pt-3 sm:pt-4 border-t border-border/30 group-hover:border-primary/30 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                          <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                            {service.stats}
                          </span>
                        </div>
                        <motion.div
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary transition-all duration-300" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Decorative Section - Mobile Responsive */}
        <motion.div 
          className="text-center mt-10 sm:mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-card/40 backdrop-blur-xl border border-border/50 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm text-muted-foreground font-medium">
              Delivering excellence in every project
            </span>
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-secondary animate-pulse" style={{ animationDelay: "0.5s" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

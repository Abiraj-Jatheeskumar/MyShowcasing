import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, Quote, MessageSquare } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Tech Startup Founder",
      company: "InnovateTech Solutions",
      content: "Working with Jatheeskumar was a game-changer for our brand. His design work perfectly captured our vision and helped us stand out in the market. The attention to detail and professionalism is outstanding.",
      rating: 5,
      service: "Branding & Design"
    },
    {
      name: "Priya Sharma",
      role: "E-commerce Director",
      company: "ShopSmart Online",
      content: "The website Jatheeskumar built for us exceeded all expectations. It's fast, beautiful, and our sales increased significantly. His technical expertise combined with creative vision is rare to find.",
      rating: 5,
      service: "Web Development"
    },
    {
      name: "Arjun Menon",
      role: "Event Coordinator",
      company: "Celebrate Events",
      content: "Jatheeskumar's photography skills are exceptional. He captured every important moment of our corporate event beautifully. The photos were delivered quickly and the quality was outstanding.",
      rating: 5,
      service: "Photography"
    },
    {
      name: "Sneha Patel",
      role: "Marketing Manager",
      company: "Creative Media Agency",
      content: "The promotional video Jatheeskumar created for our campaign was absolutely stunning. His editing skills and creative storytelling helped us connect with our audience in a powerful way.",
      rating: 5,
      service: "Video Editing"
    },
    {
      name: "Vikram Singh",
      role: "Business Owner",
      company: "Digital Solutions Co.",
      content: "We've worked with Jatheeskumar on multiple projects and he never disappoints. Whether it's web development, design, or video work, he delivers excellence every single time. Highly recommended!",
      rating: 5,
      service: "Multiple Services"
    },
    {
      name: "Anita Desai",
      role: "Content Creator",
      company: "Creative Studio",
      content: "Jatheeskumar's video editing transformed my raw footage into professional content. His understanding of pacing, color grading, and storytelling is incredible. My audience loved the final product!",
      rating: 5,
      service: "Video Editing"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [api]);

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-background relative overflow-hidden">
      {/* Background Effects - Mobile Optimized */}
      <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Section Header - Mobile Responsive */}
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h2>
            <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-secondary"></div>
          </motion.div>
          <motion.p 
            className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Real feedback from clients who have worked with me
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel - Mobile Responsive */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            duration: 30,
            dragFree: true,
            containScroll: "trimSnaps"
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 sm:pl-4 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group relative bg-card/60 backdrop-blur-xl border border-border/50 rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-[1.01] sm:hover:scale-[1.02] h-full flex flex-col overflow-hidden">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    
                    {/* Animated Top Border */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:h-1"></div>
                    
                    {/* Floating Quote Icon */}
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-5 group-hover:opacity-15 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <Quote className="w-8 h-8 sm:w-10 md:w-12 text-primary" />
                    </div>
                    
                    {/* Corner Glow Effect */}
                    <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Rating Stars with Animation */}
                      <div className="flex gap-0.5 mb-2 sm:mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-primary text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" 
                            style={{ 
                              animationDelay: `${i * 0.1}s`,
                              transitionDelay: `${i * 0.05}s`
                            }} 
                          />
                        ))}
                      </div>
                      
                      {/* Service Badge with Pulse Animation */}
                      <div className="mb-2 sm:mb-3">
                        <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:scale-105 transition-all duration-300">
                          {testimonial.service}
                        </span>
                      </div>
                      
                      {/* Testimonial Content with Fade Animation */}
                      <div className="flex-grow mb-3 sm:mb-4">
                        <p className="text-xs sm:text-sm leading-relaxed text-foreground/85 group-hover:text-foreground transition-colors duration-300 relative">
                          <Quote className="absolute -top-0.5 -left-0.5 sm:-top-1 sm:-left-1 w-3 h-3 sm:w-4 sm:h-4 text-primary/15 group-hover:text-primary/30 group-hover:scale-110 transition-all duration-300" />
                          <span className="pl-2 sm:pl-3 block">{testimonial.content}</span>
                        </p>
                      </div>
                      
                      {/* Client Info with Slide Animation */}
                      <div className="pt-2 sm:pt-3 border-t border-border/30 group-hover:border-primary/30 mt-auto transition-colors duration-300">
                        <div className="space-y-0.5">
                          <p className="font-heading font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors duration-300 group-hover:translate-x-1 inline-block">
                            {testimonial.name}
                          </p>
                          <p className="text-xs font-medium text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Shimmer Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary transition-all -left-12" />
          <CarouselNext className="hidden md:flex border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary transition-all -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;

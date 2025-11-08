import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Briefcase } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("design");
  const [designApi, setDesignApi] = useState<CarouselApi>();
  const [devApi, setDevApi] = useState<CarouselApi>();
  const [photoApi, setPhotoApi] = useState<CarouselApi>();
  const [videoApi, setVideoApi] = useState<CarouselApi>();

  // Design Projects - Branding & Graphics
  const designProjects = [
    { title: "Brand Identity Kit", description: "Complete branding package for startup", image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop" },
    { title: "Social Media Templates", description: "Instagram post designs", image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop" },
    { title: "Event Poster Series", description: "Music festival promotional materials", image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop" },
    { title: "Logo Design Collection", description: "Creative logo designs for various brands", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop" },
    { title: "Business Card Designs", description: "Professional business card layouts", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop" },
  ];

  // Development Projects - Web Applications
  const devProjects = [
    { title: "E-Commerce Platform", description: "Full-stack shopping site", tech: "React, Node.js, MongoDB", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", link: "#" },
    { title: "Portfolio CMS", description: "Custom content management system", tech: "Django, PostgreSQL", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop", link: "#" },
    { title: "Real-time Chat App", description: "WebSocket-based messaging", tech: "React, Socket.io", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop", link: "#" },
    { title: "Task Management App", description: "Productivity and task tracking", tech: "React, Firebase", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop", link: "#" },
    { title: "Weather Dashboard", description: "Real-time weather application", tech: "React, API Integration", image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&h=600&fit=crop", link: "#" },
  ];

  // Photography Projects
  const photoProjects = [
    { title: "Portrait Series", description: "Professional portrait photography", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop" },
    { title: "Event Coverage", description: "Wedding and event photography", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop" },
    { title: "Product Photography", description: "Commercial product shots", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop" },
    { title: "Nature Photography", description: "Landscape and nature shots", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop" },
    { title: "Street Photography", description: "Urban and street life captures", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop" },
  ];

  // Video Projects
  const videoProjects = [
    { title: "Corporate Promo", description: "Company promotional video", thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop" },
    { title: "Wedding Highlight", description: "Wedding ceremony highlights", thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop" },
    { title: "Music Video", description: "Music video production", thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop" },
    { title: "Product Demo", description: "Product demonstration video", thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop" },
    { title: "Travel Vlog", description: "Travel and adventure video", thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop" },
  ];

  // Auto-play functionality for Design carousel
  useEffect(() => {
    if (!designApi || activeTab !== "design") return;
    const autoplay = setInterval(() => {
      designApi.scrollNext();
    }, 3000);
    return () => clearInterval(autoplay);
  }, [designApi, activeTab]);

  // Auto-play functionality for Development carousel
  useEffect(() => {
    if (!devApi || activeTab !== "development") return;
    const autoplay = setInterval(() => {
      devApi.scrollNext();
    }, 3000);
    return () => clearInterval(autoplay);
  }, [devApi, activeTab]);

  // Auto-play functionality for Photography carousel
  useEffect(() => {
    if (!photoApi || activeTab !== "photography") return;
    const autoplay = setInterval(() => {
      photoApi.scrollNext();
    }, 3000);
    return () => clearInterval(autoplay);
  }, [photoApi, activeTab]);

  // Auto-play functionality for Video carousel
  useEffect(() => {
    if (!videoApi || activeTab !== "video") return;
    const autoplay = setInterval(() => {
      videoApi.scrollNext();
    }, 3000);
    return () => clearInterval(autoplay);
  }, [videoApi, activeTab]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-background relative overflow-hidden">
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
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                My Work
              </span>
            </h2>
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-secondary"></div>
          </motion.div>
          <motion.p 
            className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore my creative and technical projects across different domains
          </motion.p>
        </motion.div>

        <Tabs defaultValue="design" className="w-full" onValueChange={setActiveTab}>
          {/* Tabs List - Mobile Responsive with Perfect Alignment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-8 sm:mb-10 md:mb-12 flex justify-center"
          >
            <div className="w-full max-w-2xl mx-auto px-2 sm:px-0">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-card/80 backdrop-blur-sm border-2 border-border rounded-full p-1 sm:p-1.5 gap-1 h-auto [&>*]:flex-1 [&>*]:min-w-0">
                <TabsTrigger 
                  value="design" 
                  className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-transparent data-[state=inactive]:text-foreground/70 rounded-full transition-all duration-300 data-[state=active]:shadow-glow-primary text-xs sm:text-sm font-medium py-2.5 sm:py-3 md:py-3 px-3 sm:px-4 h-[38px] sm:h-[42px] md:h-[44px] flex items-center justify-center w-full border-0 outline-none data-[state=inactive]:hover:text-foreground data-[state=inactive]:hover:bg-background/50"
                >
                  <span className="truncate">Design</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="development" 
                  className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-transparent data-[state=inactive]:text-foreground/70 rounded-full transition-all duration-300 data-[state=active]:shadow-glow-primary text-xs sm:text-sm font-medium py-2.5 sm:py-3 md:py-3 px-3 sm:px-4 h-[38px] sm:h-[42px] md:h-[44px] flex items-center justify-center w-full border-0 outline-none data-[state=inactive]:hover:text-foreground data-[state=inactive]:hover:bg-background/50"
                >
                  <span className="truncate">Development</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="photography" 
                  className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-transparent data-[state=inactive]:text-foreground/70 rounded-full transition-all duration-300 data-[state=active]:shadow-glow-primary text-xs sm:text-sm font-medium py-2.5 sm:py-3 md:py-3 px-3 sm:px-4 h-[38px] sm:h-[42px] md:h-[44px] flex items-center justify-center w-full border-0 outline-none data-[state=inactive]:hover:text-foreground data-[state=inactive]:hover:bg-background/50"
                >
                  <span className="truncate">Photography</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="video" 
                  className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-transparent data-[state=inactive]:text-foreground/70 rounded-full transition-all duration-300 data-[state=active]:shadow-glow-primary text-xs sm:text-sm font-medium py-2.5 sm:py-3 md:py-3 px-3 sm:px-4 h-[38px] sm:h-[42px] md:h-[44px] flex items-center justify-center w-full border-0 outline-none data-[state=inactive]:hover:text-foreground data-[state=inactive]:hover:bg-background/50"
                >
                  <span className="truncate">Video</span>
                </TabsTrigger>
              </TabsList>
            </div>
          </motion.div>

          {/* Design Tab - Auto-sliding Carousel */}
          <TabsContent value="design" className="mt-4 sm:mt-6 md:mt-8">
            <Carousel 
              setApi={setDesignApi} 
              opts={{ 
                align: "start", 
                loop: true, 
                duration: 25,
                dragFree: true,
                containScroll: "trimSnaps"
              }} 
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-4">
                {designProjects.map((project, index) => (
                  <CarouselItem key={project.title} className="pl-2 sm:pl-4 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <motion.div
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      custom={index}
                    >
                      <Card className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 h-full">
                        <div className="relative overflow-hidden aspect-video">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-xs sm:text-sm">
                                View Details
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                        <div className="p-4 sm:p-5 md:p-6">
                          <h3 className="font-heading text-base sm:text-lg font-bold mb-1 sm:mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">{project.description}</p>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary transition-all -left-12" />
              <CarouselNext className="hidden md:flex border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary transition-all -right-12" />
            </Carousel>
          </TabsContent>

          {/* Development Tab - Auto-sliding Carousel */}
          <TabsContent value="development" className="mt-4 sm:mt-6 md:mt-8">
            <Carousel 
              setApi={setDevApi} 
              opts={{ 
                align: "start", 
                loop: true, 
                duration: 25,
                dragFree: true,
                containScroll: "trimSnaps"
              }} 
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-4">
                {devProjects.map((project, index) => (
                  <CarouselItem key={project.title} className="pl-2 sm:pl-4 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <motion.div
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      custom={index}
                    >
                      <Card className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 h-full">
                        <div className="relative overflow-hidden aspect-video">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <div className="p-4 sm:p-5 md:p-6">
                          <h3 className="font-heading text-base sm:text-lg font-bold mb-1 sm:mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 group-hover:text-foreground transition-colors">{project.description}</p>
                          <p className="text-xs text-primary mb-3 sm:mb-4 font-mono font-semibold">{project.tech}</p>
                          <div className="flex flex-wrap gap-2">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-xs w-full sm:w-auto">
                                <ExternalLink className="w-3 h-3 mr-1.5 sm:mr-2" />
                                Demo
                              </Button>
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-xs w-full sm:w-auto">
                                <Github className="w-3 h-3 mr-1.5 sm:mr-2" />
                                Code
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary transition-all -left-12" />
              <CarouselNext className="hidden md:flex border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary transition-all -right-12" />
            </Carousel>
          </TabsContent>

          {/* Photography Tab - Auto-sliding Carousel */}
          <TabsContent value="photography" className="mt-4 sm:mt-6 md:mt-8">
            <Carousel 
              setApi={setPhotoApi} 
              opts={{ 
                align: "start", 
                loop: true, 
                duration: 25,
                dragFree: true,
                containScroll: "trimSnaps"
              }} 
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-4">
                {photoProjects.map((project, index) => (
                  <CarouselItem key={project.title} className="pl-2 sm:pl-4 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <motion.div
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      custom={index}
                    >
                      <Card className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 h-full">
                        <div className="relative overflow-hidden aspect-[4/3]">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <div className="p-4 sm:p-5 md:p-6">
                          <h3 className="font-heading text-base sm:text-lg font-bold mb-1 sm:mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">{project.description}</p>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary transition-all -left-12" />
              <CarouselNext className="hidden md:flex border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary transition-all -right-12" />
            </Carousel>
          </TabsContent>

          {/* Video Tab - Auto-sliding Carousel */}
          <TabsContent value="video" className="mt-4 sm:mt-6 md:mt-8">
            <Carousel 
              setApi={setVideoApi} 
              opts={{ 
                align: "start", 
                loop: true, 
                duration: 25,
                dragFree: true,
                containScroll: "trimSnaps"
              }} 
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-4">
                {videoProjects.map((project, index) => (
                  <CarouselItem key={project.title} className="pl-2 sm:pl-4 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <motion.div
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      custom={index}
                    >
                      <Card className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 cursor-pointer h-full">
                        <div className="relative overflow-hidden aspect-video">
                          <img 
                            src={project.thumbnail} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <motion.div 
                              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow-primary"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <div className="w-0 h-0 border-l-[8px] sm:border-l-[10px] border-t-[5px] sm:border-t-[6px] border-b-[5px] sm:border-b-[6px] border-l-primary-foreground border-t-transparent border-b-transparent ml-0.5 sm:ml-1"></div>
                            </motion.div>
                          </div>
                        </div>
                        <div className="p-4 sm:p-5 md:p-6">
                          <h3 className="font-heading text-base sm:text-lg font-bold mb-1 sm:mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">{project.description}</p>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary transition-all -left-12" />
              <CarouselNext className="hidden md:flex border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary transition-all -right-12" />
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("design");

  const designProjects = [
    { title: "Brand Identity Kit", description: "Complete branding package for startup", image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop" },
    { title: "Social Media Templates", description: "Instagram post designs", image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop" },
    { title: "Event Poster Series", description: "Music festival promotional materials", image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop" },
  ];

  const devProjects = [
    { title: "E-Commerce Platform", description: "Full-stack shopping site", tech: "React, Node.js, MongoDB", link: "#" },
    { title: "Portfolio CMS", description: "Custom content management system", tech: "Django, PostgreSQL", link: "#" },
    { title: "Real-time Chat App", description: "WebSocket-based messaging", tech: "React, Socket.io", link: "#" },
  ];

  const photoProjects = [
    { title: "Portrait Series", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop" },
    { title: "Event Coverage", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop" },
    { title: "Product Photography", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop" },
  ];

  const videoProjects = [
    { title: "Corporate Promo", thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop" },
    { title: "Wedding Highlight", thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop" },
    { title: "Music Video", thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop" },
  ];

  return (
    <section id="portfolio" className="py-32 bg-background relative overflow-hidden">
      {/* Stunning Background Effects */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/12 rounded-full blur-[140px] animate-float"></div>
      <div className="absolute bottom-1/3 left-0 w-[450px] h-[450px] bg-accent/12 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2.5s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[130px] animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-sunset bg-clip-text text-transparent pb-2">
            My Work
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed pb-2">
            Explore my <span className="text-primary font-bold">creative</span> and <span className="text-secondary font-bold">technical</span> projects across different domains
          </p>
        </div>

        <Tabs defaultValue="design" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 bg-card/80 backdrop-blur-sm border-2 border-border rounded-full p-1">
            <TabsTrigger value="design" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground rounded-full transition-all duration-300 data-[state=active]:shadow-glow-primary">
              Design
            </TabsTrigger>
            <TabsTrigger value="development" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground rounded-full transition-all duration-300 data-[state=active]:shadow-glow-primary">
              Development
            </TabsTrigger>
            <TabsTrigger value="photography" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground rounded-full transition-all duration-300 data-[state=active]:shadow-glow-primary">
              Photography
            </TabsTrigger>
            <TabsTrigger value="video" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground rounded-full transition-all duration-300 data-[state=active]:shadow-glow-primary">
              Video
            </TabsTrigger>
          </TabsList>

          <TabsContent value="design" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designProjects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-125 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">{project.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="development" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devProjects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="group relative p-8 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  <div className="relative z-10">
                    <h3 className="font-heading text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors">{project.description}</p>
                    <p className="text-sm text-primary mb-6 font-mono font-semibold">{project.tech}</p>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="photography" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photoProjects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-125 transition-transform duration-700 cursor-pointer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="video" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoProjects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 animate-scale-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-125 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow-primary group-hover:scale-110 transition-transform duration-300">
                        <div className="w-0 h-0 border-l-[12px] border-t-[8px] border-b-[8px] border-l-primary-foreground border-t-transparent border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;

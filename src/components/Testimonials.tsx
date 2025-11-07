import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Startup Founder",
      content: "Jatheeskumar delivered an incredible brand identity for our startup. His design sense is impeccable and he truly understood our vision.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "E-commerce Business Owner",
      content: "The website Jatheeskumar built for us is stunning and performs flawlessly. Our conversion rate increased by 40% after launch!",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Wedding Planner",
      content: "His photography captured the emotion of our events perfectly. Professional, creative, and a pleasure to work with.",
      rating: 5
    },
    {
      name: "David Park",
      role: "Marketing Director",
      content: "The promotional video Jatheeskumar edited exceeded all expectations. The attention to detail and storytelling was exceptional.",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Stunning Background Effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/12 rounded-full blur-[140px] animate-float"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-primary/12 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }}></div>
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[130px] animate-float" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-sunset bg-clip-text text-transparent pb-2">
            Client Testimonials
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed pb-2">
            What <span className="text-primary font-bold">people say</span> about working with me
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="group p-8 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow-primary h-full animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-secondary text-secondary group-hover:scale-110 transition-transform" style={{ animationDelay: `${i * 0.05}s` }} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg group-hover:text-foreground transition-colors">
                    "{testimonial.content}"
                  </p>
                  <div className="pt-4 border-t border-border/50">
                    <p className="font-heading font-bold text-foreground text-lg group-hover:text-primary transition-colors">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{testimonial.role}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary transition-all" />
          <CarouselNext className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary transition-all" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;

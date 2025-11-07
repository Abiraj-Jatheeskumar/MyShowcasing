import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000)
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      setIsSubmitting(true);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: "", email: "", projectType: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-card relative overflow-hidden">
      {/* Stunning Background Effects */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] animate-float"></div>
      <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-secondary/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/12 rounded-full blur-[130px] animate-float" style={{ animationDelay: "4s" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-sunset bg-clip-text text-transparent pb-2">
            Let's Work Together
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed pb-2">
            Have a project in mind? Get in touch and let's create something <span className="text-primary font-bold">amazing</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-background/80 backdrop-blur-sm border-2 border-border animate-fade-in-up hover:shadow-glow-primary transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card/80 backdrop-blur-sm border-2 border-border focus:border-primary focus:shadow-glow-primary transition-all"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card/80 backdrop-blur-sm border-2 border-border focus:border-primary focus:shadow-glow-primary transition-all"
                  required
                />
              </div>

              <div>
                <Select 
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  required
                >
                  <SelectTrigger className="bg-card/80 backdrop-blur-sm border-2 border-border focus:border-primary focus:shadow-glow-primary transition-all">
                    <SelectValue placeholder="Select Project Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-2 border-border">
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="video">Video Editing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card/80 backdrop-blur-sm border-2 border-border focus:border-primary focus:shadow-glow-primary min-h-32 transition-all"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:scale-105 text-primary-foreground shadow-glow-primary font-heading py-6 rounded-full transition-all duration-300 hover:shadow-glow-secondary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground bg-gradient-primary bg-clip-text text-transparent pb-1">Get In Touch</h3>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed pb-2">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your <span className="text-primary font-semibold">visions</span>.
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:yourname@gmail.com"
                className="group flex items-center gap-4 p-6 bg-background/80 backdrop-blur-sm border-2 border-border rounded-2xl hover:border-primary transition-all duration-300 hover:shadow-glow-primary hover:scale-105"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-primary/20 flex items-center justify-center group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">Email</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">yourname@gmail.com</p>
                </div>
              </a>
            </div>

            <div>
              <h4 className="font-heading text-lg font-semibold mb-6 text-foreground">Connect on Social Media</h4>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm border-2 border-border hover:border-primary flex items-center justify-center transition-all duration-300 hover:scale-125 hover:shadow-glow-primary hover:bg-gradient-primary group"
                >
                  <Instagram className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm border-2 border-border hover:border-primary flex items-center justify-center transition-all duration-300 hover:scale-125 hover:shadow-glow-primary hover:bg-gradient-primary group"
                >
                  <Linkedin className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm border-2 border-border hover:border-primary flex items-center justify-center transition-all duration-300 hover:scale-125 hover:shadow-glow-primary hover:bg-gradient-primary group"
                >
                  <Github className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, MapPin, Phone, MessageSquare, Send, CheckCircle2, XCircle, AlertCircle, Instagram, Linkedin, Github, Facebook, Zap } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Web3Forms Configuration
    // Get your access key from https://web3forms.com/
    // Replace 'YOUR_ACCESS_KEY' with your actual Web3Forms access key
    const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'ca3c28ff-e24f-46dc-a5df-2a8914bc9a8c';
    
    // Enhanced payload with email customization
    const payload = { 
      ...data, 
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Contact Form Message from ${data.name} - Portfolio`,
      from_name: "Portfolio Contact Form",
      to_email: "abiraj30@gmail.com",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      }).then((res) => res.json());

      if (res.success) {
        form.reset();
        toast({
          title: (
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="font-semibold">Message Sent Successfully!</span>
            </div>
          ),
          description: (
            <div className="mt-2 space-y-1">
              <p className="text-sm">Thank you for reaching out, {data.name}!</p>
              <p className="text-xs text-muted-foreground">
                I've received your message and will get back to you within 24-48 hours.
              </p>
            </div>
          ),
          duration: 5000,
          className: "border-green-500/20 bg-green-50 dark:bg-green-950/20",
        });
      } else {
        toast({ 
          title: (
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-500" />
              <span className="font-semibold">Submission Failed</span>
            </div>
          ),
          description: "Please check your connection and try again. If the problem persists, feel free to contact me directly at abiraj30@gmail.com",
          duration: 5000,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({ 
        title: (
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-orange-500" />
            <span className="font-semibold">Network Error</span>
          </div>
        ),
        description: "Unable to send message. Please check your internet connection and try again.",
        duration: 5000,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-background relative overflow-hidden scroll-mt-16">
      {/* Background decorative elements - Mobile Optimized */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-primary/15 rounded-full blur-[140px] animate-float"></div>
        <div className="absolute bottom-0 right-1/3 w-56 h-56 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] bg-secondary/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] bg-accent/12 rounded-full blur-[130px] animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

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
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-secondary"></div>
          </motion.div>
          <motion.p 
            className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Have a project in mind? Get in touch and let's create something amazing together
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2 lg:items-stretch"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Contact Information Section */}
          <motion.div
            className="flex flex-col h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2, once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="group relative overflow-hidden h-full border border-border/50 bg-card/60 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 flex flex-col">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-accent/10 transition-all duration-500"></div>
              
              {/* Top Border Glow on Hover */}
              <div className="absolute top-0 left-0 right-0 h-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 group-hover:h-1 transition-all duration-500"></div>
              
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 relative z-10 flex flex-col flex-1">
                {/* Contact Info Cards */}
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                  {[
                    { icon: <Mail className="h-5 w-5" />, text: "abiraj30@gmail.com", gradient: "from-blue-500 to-cyan-500", href: "mailto:abiraj30@gmail.com" },
                    { icon: <Phone className="h-5 w-5" />, text: "+94 776 921 300", gradient: "from-purple-500 to-violet-500", href: "tel:+94776921300" },
                    { icon: <MapPin className="h-5 w-5" />, text: "Jaffna, Sri Lanka", gradient: "from-cyan-500 to-teal-500", href: "#" },
                  ].map((item, idx) => (
                    <motion.a
                      key={idx}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ amount: 0.2, once: false }}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <Card className="group/item relative overflow-hidden border border-border/50 bg-card/60 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 cursor-pointer">
                        {/* Animated Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover/item:opacity-10 transition-opacity duration-500`}></div>
                        
                        {/* Top Border Glow */}
                        <div className={`absolute top-0 left-0 right-0 h-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover/item:opacity-100 group-hover/item:h-0.5 transition-all duration-500`}></div>
                        
                        <div className="p-3 sm:p-4 md:p-5 relative z-10 flex items-center gap-3 sm:gap-4">
                          {/* Icon with gradient background - Enhanced Hover */}
                          <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover/item:scale-110 group-hover/item:rotate-3 group-hover/item:shadow-xl transition-all duration-500 flex-shrink-0`}>
                            <div className="text-white group-hover/item:scale-110 transition-transform duration-300">
                              {item.icon}
                            </div>
                            {/* Glow effect on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-lg sm:rounded-xl opacity-0 group-hover/item:opacity-50 blur-xl transition-opacity duration-500 -z-10`}></div>
                          </div>
                          
                          {/* Text with hover effect */}
                          <span className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground font-medium flex-1 group-hover/item:text-primary transition-colors duration-300 break-words">{item.text}</span>
                          
                          {/* Corner accent - Enhanced */}
                          <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-0 group-hover/item:opacity-30 rounded-bl-full transition-opacity duration-500 blur-sm`}></div>
                        </div>
                      </Card>
                    </motion.a>
                  ))}
                </div>

                {/* Social Media Section */}
                <motion.div
                  className="mt-auto pt-4 sm:pt-5 md:pt-6 lg:pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.2, once: false }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
                    <h3 className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                      Connect with me on social media:
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {[
                      {
                        icon: Instagram,
                        url: "https://www.instagram.com/jatheeskumar_abiraj?igsh=cHBpY294c2ZtaXhv&utm_source=qr",
                        gradient: "from-pink-500 to-rose-500",
                      },
                      {
                        icon: Linkedin,
                        url: "https://www.linkedin.com/in/jatheeskumar-abiraj-182901278/",
                        gradient: "from-blue-600 to-blue-700",
                      },
                      {
                        icon: Facebook,
                        url: "https://www.facebook.com/abiraj.jatheeskumar?mibextid=wwXIfr",
                        gradient: "from-blue-500 to-blue-600",
                      },
                      {
                        icon: Github,
                        url: "https://github.com/Abiraj-Jatheeskumar",
                        gradient: "from-gray-700 to-gray-900",
                      },
                    ].map((social, idx) => {
                      const IconComponent = social.icon;
                      return (
                        <motion.a
                          href={social.url}
                          key={idx}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ amount: 0.2, once: false }}
                          transition={{ duration: 0.3, delay: 0.8 + idx * 0.1 }}
                          whileHover={{ scale: 1.1, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Card className="group/item relative overflow-hidden w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border border-border/50 bg-card/60 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover:scale-110 hover:-translate-y-1 flex items-center justify-center">
                            {/* Animated Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover/item:opacity-20 transition-opacity duration-500`}></div>
                            
                            {/* Rotating glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover/item:opacity-40 blur-xl group-hover/item:animate-pulse transition-opacity duration-500`}></div>
                            
                            <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-foreground group-hover/item:text-white relative z-10 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-500`} />
                            
                            {/* Outer glow ring */}
                            <div className={`absolute inset-0 rounded-full border-2 border-transparent group-hover/item:border-primary/50 transition-all duration-500`}></div>
                          </Card>
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
              
              {/* Corner accents - Enhanced */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 rounded-br-full blur-lg transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/20 to-transparent opacity-0 group-hover:opacity-100 rounded-tl-full blur-lg transition-all duration-500"></div>
            </Card>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2, once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex flex-col h-full"
          >
            {/* Enhanced background glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 blur-2xl z-0 opacity-50"></div>
            
            <Card className="group relative z-10 border border-border/50 bg-card/60 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 flex flex-col h-full">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-accent/10 transition-all duration-500 rounded-xl"></div>
              
              {/* Top Border Glow on Hover */}
              <div className="absolute top-0 left-0 right-0 h-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 group-hover:h-1 transition-all duration-500 rounded-t-xl"></div>
              
              {/* Corner Glow Effects */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 rounded-br-full blur-xl transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/20 to-transparent opacity-0 group-hover:opacity-100 rounded-tl-full blur-xl transition-opacity duration-500"></div>
              
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 relative z-10 flex flex-col flex-1">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col flex-1 space-y-4 sm:space-y-5 md:space-y-6">
                    {["name", "email", "message"].map((field) => (
                      <FormField
                        key={field}
                        control={form.control}
                        name={field as keyof FormValues}
                        render={({ field: fieldProps }) => (
                          <FormItem>
                            <FormLabel className="text-xs sm:text-sm text-foreground font-medium">
                              {field.charAt(0).toUpperCase() + field.slice(1)}
                            </FormLabel>
                            <FormControl>
                              {field === "message" ? (
                                <Textarea
                                  {...fieldProps}
                                  placeholder={`Your ${field}`}
                                  className="rounded-lg sm:rounded-xl bg-background/50 border border-border/50 text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary/50 min-h-[100px] sm:min-h-[120px] transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/10 focus:shadow-lg focus:shadow-primary/20"
                                />
                              ) : (
                                <Input
                                  {...fieldProps}
                                  type={field === "email" ? "email" : "text"}
                                  placeholder={`Your ${field}`}
                                  className="rounded-lg sm:rounded-xl bg-background/50 border border-border/50 text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary/50 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/10 focus:shadow-lg focus:shadow-primary/20 h-10 sm:h-11"
                                />
                              )}
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                    ))}
                    <div className="mt-auto pt-2 sm:pt-3 md:pt-4">
                      <Button
                        type="submit"
                        className="group relative w-full bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-primary-foreground font-semibold py-4 sm:py-5 md:py-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-500 hover:scale-[1.02] active:scale-95 disabled:opacity-50 overflow-hidden text-sm sm:text-base"
                        disabled={isSubmitting}
                      >
                        <span className="flex items-center justify-center gap-2 relative z-10">
                          {isSubmitting ? (
                            <>
                              <span className="animate-spin">⏳</span>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" />
                              <span>Send Message</span>
                              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-110 transition-all duration-500 absolute right-3 sm:right-4" />
                            </>
                          )}
                        </span>
                        {/* Animated gradient glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-30 blur-2xl rounded-lg sm:rounded-xl transition-opacity duration-500 animate-pulse"></div>
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
                        {/* Top border glow */}
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
              
              {/* Corner accents - Enhanced */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 rounded-br-full blur-lg transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/20 to-transparent opacity-0 group-hover:opacity-100 rounded-tl-full blur-lg transition-all duration-500"></div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

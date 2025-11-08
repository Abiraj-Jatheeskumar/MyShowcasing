import { Instagram, Linkedin, Github, Facebook, Award, Heart, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      url: "https://www.instagram.com/jatheeskumar_abiraj?igsh=cHBpY294c2ZtaXhv&utm_source=qr",
      gradient: "from-pink-500 to-rose-500",
      label: "Instagram"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/jatheeskumar-abiraj-182901278/",
      gradient: "from-blue-600 to-blue-700",
      label: "LinkedIn"
    },
    {
      icon: Facebook,
      url: "https://www.facebook.com/abiraj.jatheeskumar?mibextid=wwXIfr",
      gradient: "from-blue-500 to-blue-600",
      label: "Facebook"
    },
    {
      icon: Github,
      url: "https://github.com/Abiraj-Jatheeskumar",
      gradient: "from-gray-700 to-gray-900",
      label: "GitHub"
    },
  ];

  const quickLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative bg-background border-t border-border/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6 sm:py-7 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-6 md:gap-8 mb-5 sm:mb-6">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center sm:text-left"
          >
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              <h3 className="font-heading text-sm sm:text-base font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Jatheeskumar Abiraj
              </h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-2 sm:mb-3">
              Crafting digital experiences that merge creativity with technology.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-xs text-muted-foreground">
              <Mail className="w-3 h-3 flex-shrink-0" />
              <a href="mailto:abiraj30@gmail.com" className="hover:text-primary transition-colors break-all">
                abiraj30@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center sm:text-left"
          >
            <h4 className="font-heading text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-foreground flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
              <div className="w-0.5 sm:w-1 h-2.5 sm:h-3 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-1.5">
              {quickLinks.map((link, index) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="group text-xs text-muted-foreground hover:text-primary transition-all duration-300 flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 mx-auto sm:mx-0 w-fit"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-2 sm:group-hover:w-3 transition-all duration-300 rounded-full"></span>
                    <span className="group-hover:translate-x-0.5 sm:group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center sm:text-left"
          >
            <h4 className="font-heading text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-foreground flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
              <div className="w-0.5 sm:w-1 h-2.5 sm:h-3 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              Connect With Me
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-center sm:justify-start">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    <div className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 flex items-center justify-center overflow-hidden`}>
                      {/* Gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500`}></div>
                      
                      <IconComponent className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground group-hover:text-primary relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`} />
                      
                      {/* Top border glow */}
                      <div className={`absolute top-0 left-0 right-0 h-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-100 group-hover:h-0.5 transition-all duration-500`}></div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-2 sm:mt-3">
              Follow me for updates and creative inspiration
            </p>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-border/50 pt-3 sm:pt-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
            <p className="text-xs text-muted-foreground flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
              <span>© {currentYear} Jatheeskumar Abiraj</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-500 fill-red-500 animate-pulse" /> by Abiraj
              </span>
            </p>
            <p className="text-xs text-muted-foreground text-center sm:text-right">
              All Rights Reserved
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

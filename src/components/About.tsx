import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, UserCircle, Code2, Camera, Film, Palette, Award, Target, Zap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.JPG";

const About = () => {
  const skills = [
    { name: "Python", category: "programming", color: "text-yellow-400" },
    { name: "React", category: "frontend", color: "text-cyan-400" },
    { name: "PHP", category: "programming", color: "text-blue-400" },
    { name: "Node.js", category: "backend", color: "text-green-400" },
    { name: "Canva", category: "design", color: "text-purple-400" },
    { name: "C", category: "programming", color: "text-blue-300" },
    { name: "Java", category: "programming", color: "text-orange-400" },
    { name: "CapCut", category: "video", color: "text-pink-400" },
    { name: "Lightcut", category: "video", color: "text-red-400" },
  ];

  const roles = [
    { icon: Code2, title: "Full-Stack Developer", color: "text-cyan-400", gradient: "from-cyan-500 to-blue-600" },
    { icon: Camera, title: "Photographer", color: "text-orange-400", gradient: "from-orange-500 to-amber-500" },
    { icon: Film, title: "Video Editor", color: "text-pink-500", gradient: "from-pink-500 to-purple-600" },
    { icon: Palette, title: "Graphic Designer", color: "text-purple-500", gradient: "from-purple-500 to-indigo-600" },
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const roleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
    hover: {
      scale: 1.05,
      x: 5,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const valueVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-background relative overflow-hidden">
      {/* Enhanced Background Effects - Mobile Optimized */}
      <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Enhanced Section Header with Animation */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
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
            <UserCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <UserCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-secondary"></div>
          </motion.div>
          <motion.p 
            className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Creative professional with a passion for innovation
          </motion.p>
        </motion.div>

        {/* Responsive Layout - Mobile First */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Photo Section - Full Width on Mobile, 4 cols on Desktop */}
          <motion.div 
            className="lg:col-span-4 flex"
            variants={itemVariants}
          >
            <motion.div 
              className="relative group w-full"
              variants={photoVariants}
              whileHover={{ scale: 1.02, y: -8 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ 
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              }}
            >
              {/* Multi-layer Glow Effects */}
              <div className="absolute -inset-3 sm:-inset-4 md:-inset-5 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 rounded-2xl sm:rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl sm:rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Border Glow */}
              <div className="absolute -inset-0.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              {/* Photo Card */}
              <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-2xl border-2 border-border/50 group-hover:border-primary/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-2xl overflow-hidden h-full flex flex-col transition-all duration-500">
                {/* Corner Accent Decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary/30 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-secondary/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-accent/30 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                
                {/* Top Border Gradient Glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                {/* Image Container with Enhanced Effects */}
                <motion.div 
                  className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex-shrink-0 shadow-2xl group-hover:shadow-glow-primary transition-all duration-500"
                  whileHover={{ scale: 1.03, rotate: 0.5 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  {/* Image with Enhanced Filters */}
                  <img 
                    src={profilePhoto}
                    alt="Jatheeskumar Abiraj"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
                    style={{
                      filter: 'brightness(0.98) contrast(1.08) saturate(1.1)',
                    }}
                  />
                  
                  {/* Multi-layer Overlays */}
                  {/* Base gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
                  
                  {/* Top gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Radial gradient overlay */}
                  <div className="absolute inset-0 bg-radial-gradient from-primary/0 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700" 
                       style={{ 
                         background: 'radial-gradient(circle at center, transparent 30%, rgba(59, 130, 246, 0.2) 100%)' 
                       }}></div>
                  
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-lg sm:rounded-xl transition-all duration-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]"></div>
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/60 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-secondary/60 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent/60 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </div>
                </motion.div>
                
                {/* Enhanced Name Badge */}
                <motion.div 
                  className="mt-3 sm:mt-4 md:mt-5 text-center relative"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {/* Name with Enhanced Styling */}
                  <motion.h3 
                    className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-1.5 relative inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent relative z-10">
                      Jatheeskumar Abiraj
                    </span>
                    {/* Text Glow Effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent blur-md opacity-50 -z-10"></span>
                  </motion.h3>
                  
                  {/* Profession Badge */}
                  <motion.div
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-background/60 backdrop-blur-sm border border-border/50 rounded-full mt-1 group-hover:border-primary/50 transition-colors duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                    <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 font-medium">
                      Multi-Creative Professional
                    </p>
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </motion.div>
                </motion.div>
              </div>
              
            </motion.div>
          </motion.div>

          {/* Content Section - Full Width on Mobile, 8 cols on Desktop */}
          <motion.div 
            className="lg:col-span-8 flex flex-col space-y-3 sm:space-y-3 md:space-y-4 lg:space-y-5"
            variants={itemVariants}
          >
            {/* Combined Introduction & Roles Card */}
            <motion.div 
              className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl"
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="space-y-4 sm:space-y-5">
                {/* Professional Roles */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Professional Roles</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {roles.map((role, index) => {
                      const Icon = role.icon;
                      return (
                        <motion.div
                          key={index}
                          className="group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 sm:py-2.5 bg-background/50 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 cursor-default"
                          variants={roleVariants}
                          custom={index}
                          whileHover="hover"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-gradient-to-br ${role.gradient} flex items-center justify-center p-0.5`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                          </motion.div>
                          <span className="text-xs sm:text-sm font-medium text-foreground">{role.title}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                    A passionate <span className="text-primary font-semibold">multi-creative professional</span> bringing ideas to life through 
                    <span className="text-secondary font-semibold"> code</span>, 
                    <span className="text-pink-500 font-semibold"> design</span>, 
                    <span className="text-purple-500 font-semibold"> photography</span>, and 
                    <span className="text-orange-500 font-semibold"> video editing</span>.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Combined Core Values & Tools Card */}
            <motion.div 
              className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-xl"
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                {/* Core Values - Compact Horizontal Layout */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
                    </motion.div>
                    <h4 className="text-xs sm:text-sm md:text-base font-bold text-foreground">Core Values</h4>
                  </div>
                  <div className="flex flex-wrap sm:flex-nowrap gap-1.5 sm:gap-2">
                    {[
                      { icon: Target, title: "Precision", color: "primary", gradient: "from-cyan-500 to-blue-600" },
                      { icon: Zap, title: "Innovation", color: "secondary", gradient: "from-orange-500 to-amber-500" },
                      { icon: Award, title: "Excellence", color: "accent", gradient: "from-pink-500 to-purple-600" },
                    ].map((value, index) => {
                      const Icon = value.icon;
                      return (
                        <motion.div
                          key={index}
                          className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-background/50 border border-border rounded-lg hover:border-primary/50 transition-colors duration-200 flex-1 min-w-0"
                          variants={valueVariants}
                          custom={index}
                          whileHover="hover"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md sm:rounded-lg bg-gradient-to-br ${value.gradient} flex items-center justify-center flex-shrink-0`}
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                          </motion.div>
                          <div className="min-w-0">
                            <div className="font-semibold text-foreground text-xs sm:text-xs md:text-sm truncate">{value.title}</div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Tools & Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h4 className="text-sm sm:text-base font-bold text-foreground mb-3 sm:mb-4">
                    Tools & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Technologies</span>
                  </h4>
                  
                  {/* Enhanced Auto-scrolling Skills */}
                  <div className="relative overflow-hidden rounded-lg bg-background/30 p-2 sm:p-3 border border-border/50">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none z-10"></div>
                    <div 
                      className="flex gap-2 sm:gap-3 items-center"
                      style={{
                        animation: 'scrollSkills 25s linear infinite',
                        width: 'max-content'
                      }}
                    >
                      {[...skills, ...skills, ...skills].map((skill, index) => (
                        <motion.span
                          key={`skill-${index}`}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-background/80 border border-border rounded-lg text-xs sm:text-sm font-medium text-foreground whitespace-nowrap flex-shrink-0 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-200 cursor-default"
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              className="flex justify-center sm:justify-start mt-2 sm:mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  size="default"
                  className="group relative bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl transition-all duration-300 text-xs sm:text-sm md:text-base overflow-hidden w-full sm:w-auto"
                >
                  <motion.span 
                    className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2"
                    whileHover={{ x: 2 }}
                  >
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                    >
                      <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </motion.div>
                    Download CV
                  </motion.span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { Palette, Code, Camera, Film, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: Palette,
      title: "Canva Design",
      description: "Creative branding, posters, and social media content that stands out and captivates audiences instantly.",
      gradient: "from-pink-500 via-purple-500 to-fuchsia-600"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building modern, responsive, and scalable web apps using React, Django, and Node.js with cutting-edge tech.",
      gradient: "from-cyan-400 via-blue-500 to-sky-600"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing natural, emotional, and cinematic visuals for brands and individuals with artistic vision.",
      gradient: "from-orange-500 via-amber-500 to-yellow-500"
    },
    {
      icon: Film,
      title: "Video Editing",
      description: "Crafting impactful short films, reels, and promotional videos that tell compelling stories.",
      gradient: "from-cyan-500 via-teal-500 to-emerald-500"
    }
  ];

  return (
    <section id="skills" className="py-32 bg-card relative overflow-hidden">
      {/* Stunning Background Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/12 rounded-full blur-[140px] animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-secondary/12 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[130px] animate-float" style={{ animationDelay: "4s" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <Briefcase className="w-5 h-5 text-primary" />
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                What I Do
              </span>
            </h2>
            <Briefcase className="w-5 h-5 text-secondary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary"></div>
          </div>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            A perfect blend of creative design and technical expertise to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={skill.title}
                className="group relative p-10 pb-12 bg-background/60 backdrop-blur-xl border-2 border-border/50 hover:border-primary/80 transition-all duration-700 hover:shadow-glow-primary hover:-translate-y-4 animate-scale-in overflow-visible"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
                
                <div className="relative z-10">
                  <div className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                    <Icon className="w-12 h-12 text-white relative z-10" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
                  <h3 className="font-heading text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {skill.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.JPG";

const About = () => {
  const skills = [
    "React", "Django", "Node.js", "Canva", 
    "Photoshop", "Premiere Pro", "Lightroom", "TypeScript"
  ];

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Stunning Background Effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/12 rounded-full blur-[140px] animate-float"></div>
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-secondary/12 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[130px] animate-float" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Photo */}
          <div className="animate-slide-in-left">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-primary rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition duration-700 animate-glow-pulse"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-700 border-4 border-primary/20">
                <img 
                  src={profilePhoto}
                  alt="Jatheeskumar Abiraj"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="animate-slide-in-right space-y-10">
            <div>
              <div className="inline-flex items-center gap-4 mb-6">
                <Sparkles className="w-8 h-8 text-primary animate-glow-pulse" />
                <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-sunset bg-clip-text text-transparent pb-2">
                  About Me
                </h2>
                <Sparkles className="w-8 h-8 text-secondary animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
              </div>
            </div>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-xl leading-relaxed pb-2">
                I'm a <span className="text-primary font-bold text-2xl">multi-disciplinary creative professional</span> with a passion for both design and development. 
                My work focuses on creating <span className="text-secondary font-bold">visual narratives</span> and <span className="text-accent font-bold">seamless user experiences</span> that leave a lasting impact.
              </p>
              <p className="text-xl leading-relaxed pb-2">
                Whether I'm building responsive web applications, crafting eye-catching designs in Canva, 
                capturing emotional moments through photography, or editing cinematic videos — I bring <span className="text-primary font-bold">precision</span>, 
                <span className="text-secondary font-bold"> creativity</span>, and <span className="text-accent font-bold">dedication</span> to every project.
              </p>
              <div className="p-8 pb-10 bg-card/40 backdrop-blur-xl rounded-3xl border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 hover:shadow-glow-soft">
                <p className="text-2xl font-black text-foreground leading-tight pb-1">
                  Core values: <span className="text-primary">Creativity</span>, <span className="text-secondary">Precision</span>, and <span className="text-accent">Impact</span>.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold text-foreground bg-gradient-primary bg-clip-text text-transparent pb-2">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-6 py-3 bg-card/60 backdrop-blur-md border-2 border-primary/40 rounded-full text-base font-bold text-foreground hover:bg-gradient-primary hover:text-primary-foreground hover:scale-110 hover:shadow-glow-primary hover:border-primary transition-all duration-500 cursor-default animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <Button 
              size="lg"
              className="group relative bg-gradient-secondary hover:scale-110 text-secondary-foreground shadow-glow-secondary font-heading px-10 py-8 rounded-full transition-all duration-500 hover:shadow-glow-primary text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Download className="w-6 h-6" />
                Download CV
              </span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

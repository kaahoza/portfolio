import {FaGithub, FaLinkedin} from "react-icons/fa"
import { ArrowDown, Mail } from "lucide-react";
const HeroSection = () => {
  return (
     <section className="relative min-h-screen flex items-center section-padding pt-32">
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-600 h-400 bg-primary/5 rounded-full blur-120 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <p className="font-mono text-primary text-sm mb-4 animate-fade-in">
            Hi there, I'm 
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Anele Khanyisa Hoza.
          </h1>
          <h2
            className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            I build things for the web.
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-xl mb-10 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            A full-stack developer with a deep focus on building scalable, containerized backend engines. I specialize in 
            Java ecosystems, microservice orcherstration, and designing clean, intergration ready RESTful APIs.
            
          </p>

          <div
            className="flex items-center gap-6 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <div className="flex items-center gap-4">
              <a href="https://github.com/kaahoza" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/anele-kanyisa-hoza/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaLinkedin size={22} />
              </a>
              <a href="mailto:anele376@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection
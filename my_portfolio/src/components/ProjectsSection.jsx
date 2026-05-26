import { ExternalLink} from "lucide-react";
import {FaGithub} from "react-icons/fa"

const projects = [
  {
    title: "Django Fullstack Blog Application",
    description:
      "A full-stack blog application built with: Backend: Django + Django REST Framework Frontend: React Auth: JWT (SimpleJWT) Database: PostgreSQL (Render) Deployment: Render (backend) + Vercel (frontend).",
    tech: ["React", "TypeScript", "Django"],
    github: "https://github.com/kaahoza/django-fullstack-Blog-application.git",
    live: "https://django-fullstack-blog-application.vercel.app/",
  },
  {
    title: "Full-Stack Authentication System",
    description:
      "A professional, decoupled authentication application featuring a Django REST Framework backend and a **React (Vite) ** frontend. This project demonstrates a robust implementation of user authentication, relational database management with MySQL, and cross-origin resource sharing (CORS)." , 
    tech: ["React","axios","Python" ,"GitHub Actions"],
    github: "https://github.com/kaahoza/django-react-auth-system",
  },
  {
    title: "Spring boot microservice e-cormmerce",
    description:
      "A microservice architecture with Api gateway using spring boot and spring cloud to build an e-commerce application Features real-time chat, payments, and a recommendation engine.",
    tech: ["", "PostgreSQL", "Stripe", "Redis"],
    github: "https://github.com/kaahoza/e-commerce-.git",
    // live: "https://example.com",
  },
 
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-2">
          <span className="font-mono text-primary text-lg mr-2">03.</span>
          Featured Projects
        </h2>
        <div className="w-16 h-0.5 bg-primary/50 mb-10" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card glow-border p-6 flex flex-col justify-between hover:border-primary/30 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <FaGithub size={22} />
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-1 rounded bg-secondary text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
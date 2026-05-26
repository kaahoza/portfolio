import logo from '../assets/pic.jpeg'
const AboutSection = () => {

  return (
<section id="about" className="section-padding bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-2">
          <span className="font-mono text-primary text-lg mr-2">01.</span>
          About Me
        </h2>
        <div className="w-16 h-0.5 bg-primary/50 mb-10" />
 <div className="grid md:grid-cols-3 gap-10">
           <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
         
            <p>
              Hello! I'm Anele, a software developer with a passion for creating
              elegant solutions to complex problems. I enjoy working across the
              full stack, from crafting pixel-perfect UIs to designing robust
              backend architectures.
            </p>
            <p>
              With self-thaught of experience, I've worked on products that users love. I believe
              in clean code, thoughtful design, and continuous learning.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open source,
              writing technical blogs, or exploring new technologies.
            </p>
          </div>

          <div className="glass-card glow-border p-6 flex flex-col items-center justify-center gap-4">
            <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center">
              <img src={logo} alt="profile image" srcset="" />
            </div>
            <p className="font-mono text-sm text-primary">Full-Stack Developer</p>
          </div>
        </div>
       
      </div>
    </section>

  )
}

export default AboutSection

 
const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS" ,"Django"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Java", "PostgreSQL", "MySql", "Redis"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "AWS", "CI/CD",],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-2">
          <span className="font-mono text-primary text-lg mr-2">02.</span>
          Skills & Technologies
        </h2>
        <div className="w-16 h-0.5 bg-primary/50 mb-10" />

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div key={group.category} className="glass-card glow-border p-6">
              <h3 className="font-mono text-primary text-sm font-semibold mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
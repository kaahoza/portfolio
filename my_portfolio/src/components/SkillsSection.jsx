const skills = [

  {
    category: "Languages",
    items: [ "Java 17+", "SQL" ],
  },
  {
    category: "DevsOps and Infrastucture",
    items: ["Maven","Git/Github", "Docker", "Docker compose",  "CI/CD",],
  },
    {
    category: "Frameworks:",
    items: ["Spring Boot 3", "Spring MVC", "Spring Data JPA"],
  },
  {
    category: "Testing & Docs:",
    items: ["Swagger / OpenAPI", "JUnit"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-2">
          <span className="font-mono text-primary text-lg mr-2">03.</span>
          Tech Stack & Tooling
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
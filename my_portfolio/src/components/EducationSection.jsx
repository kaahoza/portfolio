const EducationSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-2">
          <span className="font-mono text-primary text-lg mr-2">02.</span>
          Education
        </h2>
        <div className="w-16 h-0.5 bg-primary/50 mb-10" />
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              National Diploma Information Technology - Software Development  
            </p>
            <p>
             Year - 2017
            </p>
            <p>
              Core subjects
            </p>
            <ul>
                <li>Software Development</li>
                <li>Technical Programming</li>
                <li>Information System</li>
                <li>Application and Web Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;


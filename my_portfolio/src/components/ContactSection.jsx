import { Mail , Phone} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="font-mono text-primary text-sm mb-2">04. What's Next?</p>
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          I'm currently open to new opportunities and always happy to connect.
          Whether you have a project in mind or just want to say hello, my inbox
          is always open.
        </p>
        <a
          href="mailto:anele376@gmail.com.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-primary text-primary font-mono text-sm hover:bg-primary/10 transition-colors"
        >
          <Mail size={18} />
          Say Hi
        </a>
           <p className="inline-flex items-center gap-2 text-primary font-mono text-sm px-1">
            <Phone size={18}/>
            0640 188 432
        </p>
      </div>
     
    </section>
  );
};

export default ContactSection;
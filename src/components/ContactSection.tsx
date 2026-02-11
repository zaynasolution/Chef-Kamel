import ScrollReveal from "./ScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const ContactSection = () => {
  const { dict } = useI18n();
  return (
    <section id="contact" className="section-padding max-w-4xl mx-auto">
      <ScrollReveal>
        <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3 text-center">{dict.contact.headingTop}</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          {dict.contact.headingMainStart} <span className="gold-gradient-text">{dict.contact.headingMainEnd}</span>
        </h2>
        <div className="gold-line w-24 mx-auto mb-16" />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="glass-card-strong p-10 md:p-14 text-center">
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {dict.contact.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-10">
            <a href="mailto:chefkamel@hotmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 group">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground font-body">{dict.contact.email}</p>
                <p className="font-body text-sm">chefkamel@hotmail.com</p>
              </div>
            </a>

            <a href="tel:+966569679932" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 group">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground font-body">{dict.contact.phone}</p>
                <p className="font-body text-sm">+966 569679932</p>
              </div>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-body">{dict.contact.location}</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ContactSection;

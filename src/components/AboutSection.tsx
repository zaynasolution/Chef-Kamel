import ScrollReveal from "./ScrollReveal";
import culinaryArt from "@/assets/culinary-art.jpg";
import { useI18n } from "@/lib/i18n";

const AboutSection = () => {
  const { dict } = useI18n();
  return (
    <section id="about" className="section-padding w-full max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="glass-card overflow-hidden">
              <img src={culinaryArt} alt="Culinary art plating" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20 rounded-lg" />
          </div>
        </ScrollReveal>

        {/* Text */}
        <div>
          <ScrollReveal>
            <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3">{dict.about.headingTop}</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              {dict.about.headingMainStart} <span className="gold-gradient-text">{dict.about.headingMainEnd}</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground font-body leading-relaxed mb-6 text-lg">
              {dict.about.paragraph1}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              {dict.about.paragraph2}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: dict.about.stats.years, value: "20+" },
                { label: dict.about.stats.hotels, value: "8+" },
                { label: dict.about.stats.languages, value: "3" },
                { label: dict.about.stats.certs, value: "8" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <p className="text-3xl font-heading font-bold text-primary">{stat.value}</p>
                  <p className="text-muted-foreground text-sm font-body mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

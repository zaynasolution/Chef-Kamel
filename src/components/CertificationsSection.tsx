import ScrollReveal from "./ScrollReveal";
import { Award, Shield, Heart, Star, Medal, Trophy, BadgeCheck, FileCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const certificationsEn = [
  { name: "Cristal International Standards Certification", icon: Shield },
  { name: "ISO 22000-2005 Certificate", icon: FileCheck },
  { name: "Certificate of Appreciation by Sabic", icon: Award },
  { name: "Ideal Employee – Tunisian President", icon: Trophy },
  { name: "Ideal Employee – Abou Nawas El Mechtel", icon: Medal },
  { name: "Appreciation Certificate – Tourism Ministry of Tunisia", icon: Star },
  { name: "Certificate of Appreciation – Hotel Africa Meridien", icon: BadgeCheck },
  { name: "First Aid Certificate – Tunisian Red Crescent", icon: Heart },
];

const certificationsAr = [
  { name: "شهادة معايير كريستال الدولية", icon: Shield },
  { name: "شهادة ISO 22000-2005", icon: FileCheck },
  { name: "شهادة تقدير من سابك", icon: Award },
  { name: "موظف مثالي – رئيس تونس", icon: Trophy },
  { name: "موظف مثالي – أبو نواس المشْتَل", icon: Medal },
  { name: "شهادة تقدير – وزارة السياحة التونسية", icon: Star },
  { name: "شهادة تقدير – فندق أفريقيا ميريديان", icon: BadgeCheck },
  { name: "شهادة إسعافات أولية – الهلال الأحمر التونسي", icon: Heart },
];

const CertificationsSection = () => {
  const { dict, lang } = useI18n();
  const certifications = lang === "ar" ? certificationsAr : certificationsEn;
  return (
    <section id="certifications" className="section-padding max-w-6xl mx-auto">
      <ScrollReveal>
        <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3 text-center">{dict.certifications.headingTop}</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          {dict.certifications.headingMainStart} <span className="gold-gradient-text">{dict.certifications.headingMainEnd}</span>
        </h2>
        <div className="gold-line w-24 mx-auto mb-16" />
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((cert, i) => {
          const Icon = cert.icon;
          return (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="glass-card p-6 h-full hover:border-primary/20 hover:bg-primary/5 transition-all duration-500 group text-center">
                <Icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-foreground font-body text-sm leading-relaxed">{cert.name}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default CertificationsSection;

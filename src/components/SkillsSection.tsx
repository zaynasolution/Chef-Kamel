import ScrollReveal from "./ScrollReveal";
import { ChefHat, Users, TrendingUp, ClipboardList, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const skillsEn = [
  {
    icon: ChefHat,
    title: "Culinary Mastery",
    desc: "Strong background in Middle Eastern and international cuisine, staying current with new culinary trends.",
  },
  {
    icon: Users,
    title: "Leadership",
    desc: "Excellent leadership and communication skills, consistently maintaining highest standards.",
  },
  {
    icon: TrendingUp,
    title: "High-Volume Operations",
    desc: "Extensive experience in high-volume facilities with proven efficiency and productivity.",
  },
  {
    icon: ClipboardList,
    title: "Management",
    desc: "Proficient in inventory management, budgetary control, and administrative operations.",
  },
  {
    icon: Globe,
    title: "Multilingual",
    desc: "Arabic (Native), French (Working Proficiency), English (Working Proficiency).",
  },
];

const skillsAr = [
  { icon: ChefHat, title: "إتقان فنون الطهي", desc: "خلفية قوية في المطبخ العربي والعالمي، ومتابعة أحدث اتجاهات الطهي." },
  { icon: Users, title: "القيادة", desc: "مهارات قيادة وتواصل ممتازة مع الحفاظ الدائم على أعلى المعايير." },
  { icon: TrendingUp, title: "العمليات عالية الحجم", desc: "خبرة واسعة في المنشآت عالية الإنتاجية مع كفاءة وإنتاجية مثبتة." },
  { icon: ClipboardList, title: "الإدارة", desc: "إجادة إدارة المخزون والتحكم في الميزانية والعمليات الإدارية." },
  { icon: Globe, title: "متعدد اللغات", desc: "العربية (لغة أم)، الفرنسية (إتقان عملي)، الإنجليزية (إتقان عملي)." },
];

const SkillsSection = () => {
  const { dict, lang } = useI18n();
  const skills = lang === "ar" ? skillsAr : skillsEn;
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      <ScrollReveal>
        <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3 text-center">{dict.skills.headingTop}</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          {dict.skills.headingMainStart} <span className="gold-gradient-text">{dict.skills.headingMainEnd}</span>
        </h2>
        <div className="gold-line w-24 mx-auto mb-16" />
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card-strong p-8 h-full hover:border-primary/20 transition-all duration-500 group">
                <Icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{skill.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{skill.desc}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;

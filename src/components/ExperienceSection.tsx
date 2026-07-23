import ScrollReveal from "./ScrollReveal";
import { Briefcase } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const experiencesEn = [
  {
    title: "Executive Chef",
    company: "Catering La Belle Table",
    location: "Riyadh, Saudi Arabia",
    period: "Sept 2023 – Present",
    highlights: [
      "Curating innovative menus and overseeing all kitchen operations",
      "Brand ambassador at local food events",
      "Blending culinary mastery with effective brand representation",
    ],
  },
  {
    title: "Executive Chef",
    company: "Braira Hotels",
    location: "Saudi Arabia",
    period: "Jan 2023 – Sept 2023",
    highlights: [
      "Developed and implemented quality recipes",
      "Enforced stringent hygiene policies and cleanliness standards",
    ],
  },
  {
    title: "F&B Manager – Executive Chef",
    company: "Accor-Ibis Hotels",
    location: "Saudi Arabia",
    period: "Aug 2021 – Jan 2023",
    highlights: [
      "Designed innovative recipes and refined plate presentations",
      "Recruited and trained kitchen staff",
      "Inventory management and purchase order processing",
    ],
  },
  {
    title: "Executive Chef",
    company: "Al Karan Hotel",
    location: "Al Jubail, Saudi Arabia",
    period: "Jan 2015 – Aug 2021",
    highlights: [
      "Created new entrees and ensured food safety compliance",
      "Coordinated, hired, and trained all kitchen staff",
      "Managed special dietary needs and budgetary control",
    ],
  },
  {
    title: "Executive Chef – Restaurant Manager",
    company: "Tiara Hotel",
    location: "Riyadh, Saudi Arabia",
    period: "Jan 2013 – Jan 2015",
    highlights: [
      "Developed creative menus and determined item pricing",
      "Supervised kitchen personnel and maintained health code compliance",
    ],
  },
  {
    title: "Executive Chef – Event Manager",
    company: "Holiday Inn Riyadh (IHG)",
    location: "Saudi Arabia",
    period: "Jan 2012 – Jan 2013",
    highlights: [
      "Designed new recipes and planned menus",
      "Reviewed staffing levels to meet operational objectives",
    ],
  },
  {
    title: "Executive Chef – F&B Manager",
    company: "Al Hukair Group",
    location: "Saudi Arabia",
    period: "Jan 2006 – May 2012",
    highlights: [
      "Managed end-to-end F&B operations across properties",
      "Achieved excellent feedback on food and service quality",
    ],
  },
  {
    title: "Head Chef",
    company: "Golden Tulip El Mechtel",
    location: "Tunis, Tunisia",
    period: "Nov 2000 – Oct 2005",
    highlights: [
      "Directed all kitchen operations including preparation and cooking",
      "Planned menus and set prices based on ingredient availability",
    ],
  },
];

const experiencesAr = [
  {
    title: "شيف تنفيذي",
    company: "Catering La Belle Table",
    location: "الرياض، المملكة العربية السعودية",
    period: "سبتمبر 2023 – حتى الآن",
    highlights: [
      "تصميم قوائم مبتكرة والإشراف على جميع عمليات المطبخ",
      "سفير للعلامة في فعاليات الطعام المحلية",
      "دمج الإتقان في الطهي مع تمثيل فعّال للعلامة",
    ],
  },
  {
    title: "شيف تنفيذي",
    company: "Braira Hotels",
    location: "المملكة العربية السعودية",
    period: "يناير 2023 – سبتمبر 2023",
    highlights: ["تطوير وتنفيذ وصفات عالية الجودة", "تطبيق سياسات صارمة للنظافة ومعايير التعقيم"],
  },
  {
    title: "مدير أغذية ومشروبات – شيف تنفيذي",
    company: "Accor-Ibis Hotels",
    location: "المملكة العربية السعودية",
    period: "أغسطس 2021 – يناير 2023",
    highlights: [
      "تصميم وصفات مبتكرة وتحسين تقديم الأطباق",
      "استقطاب وتدريب طاقم المطبخ",
      "إدارة المخزون ومعالجة أوامر الشراء",
    ],
  },
  {
    title: "شيف تنفيذي",
    company: "Al Karan Hotel",
    location: "الجبيل، المملكة العربية السعودية",
    period: "يناير 2015 – أغسطس 2021",
    highlights: [
      "ابتكار أطباق رئيسية جديدة وضمان الالتزام بسلامة الغذاء",
      "التنسيق والتوظيف وتدريب طاقم المطبخ",
      "إدارة المتطلبات الغذائية الخاصة والتحكم في الميزانية",
    ],
  },
  {
    title: "شيف تنفيذي – مدير مطعم",
    company: "Tiara Hotel",
    location: "الرياض، المملكة العربية السعودية",
    period: "يناير 2013 – يناير 2015",
    highlights: ["تطوير قوائم إبداعية وتحديد أسعار الأصناف", "الإشراف على طاقم المطبخ وضمان الالتزام بالأنظمة الصحية"],
  },
  {
    title: "شيف تنفيذي – مدير فعاليات",
    company: "Holiday Inn Riyadh (IHG)",
    location: "المملكة العربية السعودية",
    period: "يناير 2012 – يناير 2013",
    highlights: ["تصميم وصفات جديدة والتخطيط للقوائم", "مراجعة مستويات التوظيف لتحقيق الأهداف التشغيلية"],
  },
  {
    title: "شيف تنفيذي – مدير أغذية ومشروبات",
    company: "Al Hukair Group",
    location: "المملكة العربية السعودية",
    period: "يناير 2006 – مايو 2012",
    highlights: ["إدارة عمليات الأغذية والمشروبات الشاملة عبر عدة مواقع", "تحقيق تقييمات ممتازة لجودة الطعام والخدمة"],
  },
  {
    title: "شيف رئيسي",
    company: "Golden Tulip El Mechtel",
    location: "تونس، تونس",
    period: "نوفمبر 2000 – أكتوبر 2005",
    highlights: [
      "إدارة جميع عمليات المطبخ بما في ذلك التحضير والطهي",
      "التخطيط للقوائم وتحديد الأسعار وفق توافر المكونات",
    ],
  },
];

const ExperienceSection = () => {
  const { dict, lang } = useI18n();
  const experiences = lang === "ar" ? experiencesAr : experiencesEn;
  return (
    <section id="experience" className="section-padding w-full max-w-5xl mx-auto">
      <ScrollReveal>
        <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3 text-center">{dict.experience.headingTop}</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          {dict.experience.headingMainStart} <span className="gold-gradient-text">{dict.experience.headingMainEnd}</span>
        </h2>
        <div className="gold-line w-24 mx-auto mb-16" />
      </ScrollReveal>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

        {experiences.map((exp, i) => (
          <ScrollReveal key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
            <div className={`relative flex flex-col md:flex-row items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 mt-6" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />

              {/* Card */}
              <div className="ml-14 md:ml-0 flex-1 glass-card-strong p-6 hover:border-primary/20 transition-colors duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-body font-semibold">{exp.period}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{exp.title}</h3>
                <p className="text-primary/80 font-body text-sm mb-3">{exp.company} — {exp.location}</p>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-muted-foreground text-sm font-body flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "en" | "ar";

type Translations = {
  navbar: {
    brand: string;
    links: { about: string; experience: string; skills: string; certifications: string; contact: string };
    toggleLabel: string;
  };
  hero: {
    role: string;
    description: string;
    ctaExperience: string;
    ctaContact: string;
  };
  about: {
    headingTop: string;
    headingMainStart: string;
    headingMainEnd: string;
    paragraph1: string;
    paragraph2: string;
    stats: { years: string; hotels: string; languages: string; certs: string };
  };
  experience: {
    headingTop: string;
    headingMainStart: string;
    headingMainEnd: string;
  };
  skills: {
    headingTop: string;
    headingMainStart: string;
    headingMainEnd: string;
  };
  certifications: {
    headingTop: string;
    headingMainStart: string;
    headingMainEnd: string;
  };
  contact: {
    headingTop: string;
    headingMainStart: string;
    headingMainEnd: string;
    description: string;
    email: string;
    phone: string;
    location: string;
  };
  footer: {
    tagline: string;
  };
};

const translations: Record<Lang, Translations> = {
  en: {
    navbar: {
      brand: "Chef Kamel",
      links: {
        about: "About",
        experience: "Experience",
        skills: "Skills",
        certifications: "Certifications",
        contact: "Contact",
      },
      toggleLabel: "EN/AR",
    },
    hero: {
      role: "Executive Chef",
      description:
        "20+ years of culinary excellence across international luxury hotels. Specializing in Middle Eastern cuisine & high-volume operations.",
      ctaExperience: "View Experience",
      ctaContact: "Contact Me",
    },
    about: {
      headingTop: "About Me",
      headingMainStart: "Passion for",
      headingMainEnd: "Culinary Excellence",
      paragraph1:
        "Highly accomplished and results-driven Executive Chef with extensive experience in high-volume, fast-paced culinary operations. Proven ability to lead and motivate kitchen teams, ensuring sustained focus, efficiency, and productivity.",
      paragraph2:
        "Specialized expertise in Middle Eastern cuisine, encompassing meticulous ingredient sourcing, rigorous budget control, and strategic initiatives to elevate restaurant profiles.",
      stats: {
        years: "Years Experience",
        hotels: "Hotels Managed",
        languages: "Languages",
        certs: "Certifications",
      },
    },
    experience: {
      headingTop: "Career Journey",
      headingMainStart: "Professional",
      headingMainEnd: "Experience",
    },
    skills: {
      headingTop: "Expertise",
      headingMainStart: "Core",
      headingMainEnd: "Skills",
    },
    certifications: {
      headingTop: "Recognition",
      headingMainStart: "Certifications &",
      headingMainEnd: "Awards",
    },
    contact: {
      headingTop: "Get In Touch",
      headingMainStart: "Let's",
      headingMainEnd: "Connect",
      description:
        "Available for Executive Chef positions at luxury hotels worldwide. Let's discuss how I can elevate your culinary operations.",
      email: "Email",
      phone: "Phone",
      location: "Riyadh, Saudi Arabia",
    },
    footer: {
      tagline: "Executive Chef — Available for new opportunities",
    },
  },
  ar: {
    navbar: {
      brand: "الشيف كمال",
      links: {
        about: "نبذة",
        experience: "الخبرات",
        skills: "المهارات",
        certifications: "الشهادات",
        contact: "اتصال",
      },
      toggleLabel: "ع/EN",
    },
    hero: {
      role: "شيف تنفيذي",
      description:
        "أكثر من 20 سنة من التميز في الطهي عبر فنادق فاخرة دولية. متخصص في المطبخ العربي والعمليات عالية الحجم.",
      ctaExperience: "عرض الخبرات",
      ctaContact: "تواصل معي",
    },
    about: {
      headingTop: "نبذة عني",
      headingMainStart: "شغف بـ",
      headingMainEnd: "التميز في الطهي",
      paragraph1:
        "شيف تنفيذي متمرس وموجه للنتائج بخبرة واسعة في بيئات العمل السريعة وعالية الإنتاج. قدرة مثبتة على قيادة وتحفيز فرق المطبخ مع الحفاظ على التركيز والكفاءة والإنتاجية.",
      paragraph2:
        "خبرة متخصصة في المطبخ العربي تشمل انتقاء المكونات بعناية، والتحكم الصارم في الميزانية، ومبادرات استراتيجية لرفع مكانة المطاعم.",
      stats: {
        years: "سنوات الخبرة",
        hotels: "فنادق مُدارة",
        languages: "اللغات",
        certs: "الشهادات",
      },
    },
    experience: {
      headingTop: "محطات المسيرة",
      headingMainStart: "خبرة",
      headingMainEnd: "مهنية",
    },
    skills: {
      headingTop: "مجالات الخبرة",
      headingMainStart: "المهارات",
      headingMainEnd: "الأساسية",
    },
    certifications: {
      headingTop: "التقدير",
      headingMainStart: "الشهادات و",
      headingMainEnd: "الجوائز",
    },
    contact: {
      headingTop: "تواصل معنا",
      headingMainStart: "لنـ",
      headingMainEnd: "تواصل",
      description:
        "متاح لوظائف الشيف التنفيذي في فنادق فاخرة حول العالم. دعنا نناقش كيف يمكنني الارتقاء بعمليات المطبخ لديك.",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الرياض، المملكة العربية السعودية",
    },
    footer: {
      tagline: "شيف تنفيذي — متاح لفرص جديدة",
    },
  },
};

type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  dict: Translations;
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    return saved === "ar" || saved === "en" ? saved : "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
  };

  const dict = useMemo(() => translations[lang], [lang]);
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (_e) {
      void 0;
    }
    document.documentElement.setAttribute("dir", dir);
  }, [lang, dir]);

  const value = useMemo(() => ({ lang, setLang, dict, dir }), [lang, dict, dir]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

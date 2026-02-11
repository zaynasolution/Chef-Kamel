import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, dict } = useI18n();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: dict.navbar.links.about, href: "#about" },
    { label: dict.navbar.links.experience, href: "#experience" },
    { label: dict.navbar.links.skills, href: "#skills" },
    { label: dict.navbar.links.certifications, href: "#certifications" },
    { label: dict.navbar.links.contact, href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-card-strong py-3" : "py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-heading text-xl font-bold gold-gradient-text">
          {dict.navbar.brand}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary font-body text-sm tracking-wider uppercase transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="ml-2"
            aria-label={dict.navbar.toggleLabel}
          >
            {lang === "en" ? "AR" : "EN"}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card-strong overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-muted-foreground hover:text-primary font-body text-sm tracking-wider uppercase transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setLang(lang === "en" ? "ar" : "en");
                  setMobileOpen(false);
                }}
                aria-label={dict.navbar.toggleLabel}
              >
                {lang === "en" ? "AR" : "EN"}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import { motion } from "framer-motion";
import heroImage from "@/assets/hero-kitchen.jpg";
import { useI18n } from "@/lib/i18n";

const HeroSection = () => {
  const { dict } = useI18n();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Luxury hotel kitchen" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-4"
          >
            {dict.hero.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="gold-gradient-text">Kamel</span>
            <br />
            <span className="text-foreground">Mathlouthi</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="gold-line w-32 mx-auto lg:mx-0 mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-muted-foreground font-body text-base md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            {dict.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#experience"
              className="glass-card px-8 py-3 text-primary font-body font-semibold tracking-wider uppercase text-sm hover:bg-primary/10 transition-colors duration-300 text-center"
            >
              {dict.hero.ctaExperience}
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm rounded-lg hover:bg-gold-light transition-colors duration-300 text-center"
            >
              {dict.hero.ctaContact}
            </a>
          </motion.div>
        </div>

        {/* Chef Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30 gold-glow">
              <img src="/kamel-image.png" alt="Chef Kamel Mathlouthi" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md flex items-center justify-center">
              <span className="text-primary font-heading text-lg md:text-xl font-bold">25+</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

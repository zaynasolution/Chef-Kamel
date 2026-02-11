import { useI18n } from "@/lib/i18n";

const Footer = () => {
  const { dict } = useI18n();
  return (
    <footer className="section-padding py-12 text-center border-t border-border">
      <p className="font-heading text-lg gold-gradient-text mb-2">Chef Kamel Mathlouthi</p>
      <p className="text-muted-foreground font-body text-sm">{dict.footer.tagline}</p>
    </footer>
  );
};

export default Footer;

import ScrollReveal from "./ScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useMemo } from "react";

const CertificatesSliderSection = () => {

  const images = useMemo(() => {
    const all = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,webp}", { eager: true }) as Record<string, { default: string }>;
    const targets = ["sabic", "hokair", "iso-certificate -karan", "africa-meredian"];
    const urls = Object.entries(all)
      .filter(([p]) => targets.some((t) => p.toLowerCase().includes(t)))
      .map(([, mod]) => mod?.default)
      .filter(Boolean);
    return urls;
  }, []);

  return (
    <section id="certificates" className="section-padding w-full max-w-6xl mx-auto">
      <ScrollReveal>
        <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3 text-center">
          Certificates
        </p>

        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2 text-center">
          Certificates
        </h2>

        <p className="text-muted-foreground font-body text-sm md:text-base text-center mb-10">
          This is some of my certificates that I'm proud of
        </p>

        <div className="gold-line w-24 mx-auto mb-12" />
      </ScrollReveal>

      <Carousel opts={{ align: "center", loop: true }} className="relative w-full max-w-6xl mx-auto overflow-hidden">
        <CarouselContent className="items-stretch w-full">
          {images.length
            ? images.map((src, i) => (
                <CarouselItem key={i} className="basis-full sm:basis-5/6 md:basis-3/4 lg:basis-2/3 xl:basis-1/2">
                  <div className="p-2 sm:p-4">
                    <div className="glass-card-strong p-2 sm:p-4 hover:border-primary/20 transition-colors">
                      <AspectRatio ratio={4 / 3}>
                        <img src={src} alt={`Certificate ${i + 1}`} className="w-full h-auto object-contain rounded-xl" />
                      </AspectRatio>
                    </div>
                  </div>
                </CarouselItem>
              ))
            : (
                <div className="p-3 sm:p-6">
                  <div className="glass-card-strong p-3 sm:p-6">
                    <AspectRatio ratio={4 / 3}>
                      <img src="/placeholder.svg" alt="Placeholder" className="w-full h-auto object-contain rounded-xl" />
                    </AspectRatio>
                  </div>
                  <p className="text-center mt-4 text-muted-foreground">No images found</p>
                </div>
              )}
        </CarouselContent>

        <CarouselPrevious className="bg-background/90 backdrop-blur-sm" />
        <CarouselNext className="bg-background/90 backdrop-blur-sm" />
      </Carousel>
    </section>
  );
};

export default CertificatesSliderSection;

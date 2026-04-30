type SectionBase = { id: string };

/** 1) HERO VIDEO */
export type HeroVideoSection = SectionBase & {
  type: "heroVideo";
  props: {
    title: string;
    subtitle?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    video: {
      src: string; // "/videos/hero-vma.mp4" o URL CDN
      poster?: string; // "/images/hero-poster.jpg"
    };
  };
};

/** 2) HERO (imagen) */
export type HeroSection = SectionBase & {
  type: "hero";
  props: {
    kicker?: string;
    title: string;
    subtitle?: string;
    pullQuote?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    image?: { src: string; alt: string };
  };
};

/** 3) VALUE PROPS */
export type ValuePropsSection = SectionBase & {
  type: "valueProps";
  props: {
    title: string;
    items: Array<{ title: string; description: string }>;
  };
};

/** 4) ABOUT (con campos extendidos como usabas) */
export type AboutSection = SectionBase & {
  type: "about";
  props: {
    kicker?: string;
    title: string;
    subtitle?: string;
    pullQuote?: string;
    blocks?: Array<{ title: string; body: string }>;
  };
};

/** 5) METHOD (con principles opcional como usabas) */
export type MethodSection = SectionBase & {
  type: "method";
  props: {
    kicker?: string;
    title: string;
    subtitle?: string;
    steps: Array<{ title: string; description: string }>;
  };
};

/** 6) SERVICES (con kicker, subtitle, bullets como usabas) */
export type ServicesSection = SectionBase & {
  type: "services";
  props: {
    kicker?: string;
    title: string;
    subtitle?: string;
    cards?: Array<{
      eyebrow: string;
      title: string;
      body: string;
      ctaLabel: string;
      ctaHref: string;
    }>;
    bottomCtaLabel?: string;
    bottomCtaHref?: string;
  };
};

/** 7) EQUIPMENT */
export type EquipmentShowcaseSection = SectionBase & {
  type: "equipmentShowcase";
  props: {
    kicker?: string;
    title: string;
    subtitle?: string;
  };
};

/** 8) INDUSTRY SOLUTIONS (grid editorial sectores) */
export type IndustryFeatureCard = {
  id: string;
  href: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: { src: string; alt: string };
  size: "hero" | "regular";
};

export type IndustrySolutionsSection = SectionBase & {
  type: "industrySolutions";
  props: {
    kicker?: string;
    title?: string;
    cards?: IndustryFeatureCard[];
  };
};

/** 9) AI BLOCK */
export type AIBlockSection = SectionBase & {
  type: "aiBlock";
  props: {
    kicker?: string;
    title: string;
    subtitle?: string;
    callout?: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
};

/** 10) CONTACT */
export type ContactSection = SectionBase & {
  type: "contact";
  props: {
    kicker?: string;
    title: string;
    subtitle?: string;
    whatsappHref?: string;
    emailComercial?: string;
    whatsappLabel?: string;
    horario?: string;
    cobertura?: string;
  };
};

/** 11) FAQ */
export type FaqSection = SectionBase & {
  type: "faq";
  props: {
    kicker?: string;
    title: string;
    items: Array<{ q: string; a: string }>;
  };
};

/** UNION */
export type HomeSection =
  | HeroSection
  | IndustrySolutionsSection
  | AboutSection
  | MethodSection
  | ServicesSection
  | EquipmentShowcaseSection
  | AIBlockSection
  | ContactSection
  | FaqSection;

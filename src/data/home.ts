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
      src: string;
      poster?: string;
    };
  };
};

/** 2) HERO (imagen / video background) */
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

/** 4) ABOUT */
export type AboutSection = SectionBase & {
  type: "about";
  props: {
    kicker?: string;
    title?: string;
    titleLine1?: string;
    titleLine2?: string;
    subtitle?: string;
    pullQuote?: string;
    ctaLabel?: string;
    ctaHref?: string;
    backgroundImage?: { src: string; alt: string };
    blocks?: Array<{ title: string; body: string }>;
  };
};

/** 5) METHOD */
export type MethodSection = SectionBase & {
  type: "method";
  props: {
    kicker?: string;
    title?: string;
    subtitle?: string;
    moduleEyebrow?: string;
    moduleTitle?: string;
    heroEyebrow?: string;
    heroTitle?: string;
    heroCtaLabel?: string;
    heroCtaHref?: string;
    heroImage?: { src: string; alt: string };
    steps: Array<{
      number?: string;
      title: string;
      description: string;
      image?: { src: string; alt: string };
    }>;
  };
};

/** 6) SERVICES */
export type ServicesSection = SectionBase & {
  type: "services";
  props: {
    kicker?: string;
    title?: string;
    subtitle?: string;
    moduleEyebrow?: string;
    moduleTitle?: string;
    heroEyebrow?: string;
    heroTitle?: string;
    heroCtaLabel?: string;
    heroCtaHref?: string;
    heroImage?: { src: string; alt: string };
    cards?: Array<{
      eyebrow?: string;
      title: string;
      subtitle?: string;
      body?: string;
      ctaLabel?: string;
      ctaHref?: string;
      image?: { src: string; alt: string };
    }>;
    bottomCtaLabel?: string;
    bottomCtaHref?: string;
  };
};

/** 7) EQUIPMENT SHOWCASE */
export type EquipmentShowcaseSection = SectionBase & {
  type: "equipmentShowcase";
  props: {
    kicker?: string;
    title?: string;
    subtitle?: string;
    moduleEyebrow?: string;
    moduleTitle?: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
};

/** 8) INDUSTRY SOLUTIONS */
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
    titleAccent?: string;
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
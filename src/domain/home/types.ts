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
    title: string;
    subtitle?: string;
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
    intro?: string;
    history?: string;
    mission?: string;
    vision?: string;
    values?: Array<{ title: string; description: string }>;
  };
};

/** 5) METHOD (con principles opcional como usabas) */
export type MethodSection = SectionBase & {
  type: "method";
  props: {
    title: string;
    steps: Array<{ title: string; description: string }>;
    principles?: Array<{ title: string; description: string }>;
  };
};

/** 6) SERVICES (con kicker, subtitle, bullets como usabas) */
export type ServicesSection = SectionBase & {
  type: "services";
  props: {
    kicker?: string;
    title: string;
    subtitle?: string;
    items: Array<{ title: string; bullets: string[] }>;
  };
};

/** 7) EQUIPMENT */
export type EquipmentShowcaseSection = SectionBase & {
  type: "equipmentShowcase";
  props: {
    title: string;
    subtitle?: string;
  };
};

/** 8) ECOSYSTEM */
export type EcosystemSection = SectionBase & {
  type: "ecosystem";
  props: {
    title: string;
    items: Array<{ name: string; description?: string }>;
  };
};

/** 9) CONTACT */
export type ContactSection = SectionBase & {
  type: "contact";
  props: {
    title: string;
    subtitle?: string;
  };
};

/** 10) FAQ */
export type FaqSection = SectionBase & {
  type: "faq";
  props: {
    title: string;
    items: Array<{ q: string; a: string }>;
  };
};

/** UNION */
export type HomeSection =
  | HeroVideoSection
  | HeroSection
  | ValuePropsSection
  | AboutSection
  | MethodSection
  | ServicesSection
  | EquipmentShowcaseSection
  | EcosystemSection
  | ContactSection
  | FaqSection;

import Hero from "@/ui/sections/Hero.astro";
import IndustrySolutions from "@/ui/sections/IndustrySolutions.astro";
import About from "@/ui/sections/About.astro";
import BusinessCards from "@/ui/sections/BusinessCards.astro";
import Method from "@/ui/sections/Method.astro";
import Services from "@/ui/sections/Services.astro";
import TechnicalCriteria from "@/ui/sections/TechnicalCriteria.astro";
import EquipmentShowcase from "@/ui/sections/EquipmentShowcase.astro";
import AIBlock from "@/ui/sections/AIBlock.astro";
import FAQ from "@/ui/sections/FAQ.astro";
import Contact from "@/ui/sections/Contact.astro";
import EcosystemVMA from "@/ui/sections/EcosystemVMA.astro";

import type { HomeSection } from "@/domain/home";

/**
 * Astro components no tipan igual que funciones TS normales.
 * Por eso usamos unknown acá: el tipado fuerte ya vive en HomeSection.
 */
type AstroSectionComponent = unknown;

export const sectionRegistry = {
  hero: Hero,
  industrySolutions: IndustrySolutions,
  about: About,
  businessCards: BusinessCards,
  method: Method,
  services: Services,
  technicalCriteria: TechnicalCriteria,
  equipmentShowcase: EquipmentShowcase,
  aiBlock: AIBlock,
  faq: FAQ,
  contact: Contact,
  ecosystemVMA: EcosystemVMA,
} satisfies Record<HomeSection["type"], AstroSectionComponent>;
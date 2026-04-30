import Hero from "@/ui/sections/Hero.astro";
import Method from "@/ui/sections/Method.astro";
import FAQ from "@/ui/sections/FAQ.astro";
import EquipmentShowcase from "@/ui/sections/EquipmentShowcase.astro";
import IndustrySolutions from "@/ui/sections/IndustrySolutions.astro";
import About from "@/ui/sections/About.astro";
import Services from "@/ui/sections/Services.astro";
import AIBlock from "@/ui/sections/AIBlock.astro";
import Contact from "@/ui/sections/Contact.astro";

import type { HomeSection } from "@/domain/home";

export type SectionComponent = (props: Record<string, unknown>) => unknown;

export const sectionRegistry: Record<HomeSection["type"], SectionComponent> = {
  hero: Hero,
  industrySolutions: IndustrySolutions,
  about: About,
  method: Method,
  services: Services,
  equipmentShowcase: EquipmentShowcase,
  aiBlock: AIBlock,
  contact: Contact,
  faq: FAQ,
};

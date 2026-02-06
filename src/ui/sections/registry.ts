import Hero from "@/ui/sections/Hero.astro";
import HeroVideo from "@/ui/sections/HeroVideo.astro";
import ValueProps from "@/ui/sections/ValueProps.astro";
import Method from "@/ui/sections/Method.astro";
import FAQ from "@/ui/sections/FAQ.astro";
import EquipmentShowcase from "@/ui/sections/EquipmentShowcase.astro";

import About from "@/ui/sections/About.astro";
import Services from "@/ui/sections/Services.astro";
import Ecosystem from "@/ui/sections/Ecosystem.astro";
import Contact from "@/ui/sections/Contact.astro";

import type { HomeSection } from "@/domain/home";

export type SectionComponent = (props: any) => unknown;

export const sectionRegistry: Record<HomeSection["type"], SectionComponent> = {
  heroVideo: HeroVideo,
  hero: Hero,
  valueProps: ValueProps,
  about: About,
  method: Method,
  services: Services,
  equipmentShowcase: EquipmentShowcase,
  ecosystem: Ecosystem,
  contact: Contact,
  faq: FAQ,
};

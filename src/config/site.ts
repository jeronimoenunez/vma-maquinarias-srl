/**
 * VMA RENTAL — Configuración central del sitio
 */
export const site = {
  name:        "VMA Rental",
  legalName:   "VMA Rental SRL",
  description: "Alquiler de equipos de elevación y trabajo en altura. Tijeras, brazos articulados y manipuladores telescópicos. Disponibilidad real, soporte técnico y continuidad operativa.",
  url:         "https://vmarental.com.ar",
  locale:      "es_AR",

  contact: {
    whatsapp:        "5491123321230",
    whatsappMessage: "Hola, quiero consultar sobre equipos de elevación",
    emailComercial:  "comercial@vmarental.com.ar",
    emailNoreply:    "noreply@vmarental.com.ar",
  },

  socials: {
    instagram: "https://instagram.com/vmarental",
    linkedin:  "https://linkedin.com/company/vmarental",
  },

  brand: {
    mark:    "/brand/vma-logo-mark.svg",
    full:    "/brand/vma-logo-full.svg",
    reduced: "/brand/vma-logo-reduced.svg",
  },
} as const;

export const waUrl = (msg: string = site.contact.whatsappMessage) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(msg)}`;

export const waCotizarUrl = waUrl(
  "Hola, quiero consultar sobre equipos de elevación"
);
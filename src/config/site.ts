/**
 * VMA RENTAL — Configuración central del sitio
 */

export const site = {
  name:        "VMA Rental",
  legalName:   "VMA Maquinarias SRL",
  description: "Alquiler y venta de maquinaria para trabajos en altura. Tijeras, brazos articulados y telescópicos. Contratos industriales, flota propia, soporte 24/7.",
  url:         "https://vmarental.com.ar",
  locale:      "es_AR",

  contact: {
    whatsapp:        "5491123321230",
    whatsappMessage: "Hola VMA, quiero consultar sobre equipos",
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
  "Hola, quiero consultar sobre equipos"
);
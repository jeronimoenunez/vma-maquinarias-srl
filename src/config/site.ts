/**
 * VMA RENTAL — Configuración central del sitio
 */
export const site = {
  name: "VMA Rental",
  legalName: "VMA Máquinas SRL",
  description:
    "Alquiler de equipos de elevación y trabajo en altura. Tijeras, brazos articulados y manipuladores telescópicos. Disponibilidad real, soporte técnico y continuidad operativa.",
  url: "https://vmarental.com.ar",
  locale: "es_AR",

  contact: {
    whatsapp: "541128421008",
    whatsappVisible: "1128421008",
    whatsappMessage:
      "Hola, quiero consultar por el alquiler de un equipo. ",
    emailComercial: "comercial@vmarental.com.ar",
    emailNoreply: "noreply@vmarental.com.ar",
  },

  socials: {
    instagram: "https://instagram.com/vmarental",
    linkedin: "https://linkedin.com/company/vmarental",
  },

  brand: {
    mark: "/brand/vma-logo-mark.svg",
    full: "/brand/vma-logo-full.svg",
    reduced: "/brand/vma-logo-reduced.svg",
  },
} as const;

export const vmaWhatsappMessages = {
  general:
    "Hola, quiero consultar por el alquiler de un equipo. ",
  tijera:
    "Hola, necesito consultar por una plataforma tijera. Altura aproximada: __. Zona: __. Fecha: __.",
  articulada:
    "Hola, necesito consultar por una plataforma articulada. Altura aproximada: __. Zona: __. Fecha: __.",
  manipulador:
    "Hola, necesito consultar por un manipulador telescópico. Carga aproximada: __. Zona: __. Fecha: __.",
  servicioTecnico:
    "Hola, necesito consultar por servicio técnico o postventa. Equipo: __. Problema: __. Zona: __.",
  venta:
    "Hola, quiero consultar por compra de equipos nuevos o usados seleccionados.",
} as const;

export const waUrl = (msg: string = site.contact.whatsappMessage) =>
  `https://wa.me/${site.contact.whatsapp}?text=Hola%2C%20vengo%20desde%20la%20web%20y%20quiero%20consultar%20por%20`;

export const waCotizarUrl = waUrl(vmaWhatsappMessages.general);
export const waTijeraUrl = waUrl(vmaWhatsappMessages.tijera);
export const waArticuladaUrl = waUrl(vmaWhatsappMessages.articulada);
export const waManipuladorUrl = waUrl(vmaWhatsappMessages.manipulador);
export const waServicioTecnicoUrl = waUrl(vmaWhatsappMessages.servicioTecnico);
export const waVentaUrl = waUrl(vmaWhatsappMessages.venta);

import type { HomeSection } from "@/domain/home";
import { waCotizarUrl } from "@/config/site";

export const homeSections: HomeSection[] = [
  {
    id: "inicio",
    type: "hero",
    props: {
      kicker: "ALQUILER Y VENTA DE MAQUINARIA ESPECIALIZADA",
      title:
        "Equipos de elevación y trabajo en altura, disponibles cuando los necesitás.",
      subtitle:
        "Alquiler, venta y soporte técnico de plataformas, manipuladores y equipos para obra, industria y mantenimiento. Operamos con disponibilidad real y respuesta inmediata en todo el AMBA y zonas extendidas. [CONFIRMAR COBERTURA EXACTA CON VMA]",
      pullQuote:
        "La disponibilidad operativa no es una promesa comercial. Es una decisión técnica.",
      primaryCta: { label: "Cotizar equipo", href: waCotizarUrl },
      secondaryCta: { label: "Ver catálogo", href: "#equipos" },
      image: {
        src: "/images/hero-poster.jpg",
        alt: "Equipo VMA Rental en operación",
      },
    },
  },
  {
    id: "sectores",
    type: "industrySolutions",
    props: {
      kicker: "EXPLORÁ EL UNIVERSO VMA",
      title: "Tres sectores. Dos modalidades. Un solo estándar operativo.",
    },
  },
  {
    id: "servicios",
    type: "services",
    props: {
      kicker: "UNIDADES DE NEGOCIO",
      title: "Tres formas de operar con VMA Rental.",
      subtitle:
        "Alquiler para proyectos definidos, venta para incorporación de flota propia, y soporte técnico continuo para clientes con operación permanente.",
      bottomCtaLabel: "Ver cómo trabajamos",
      bottomCtaHref: "#metodologia",
    },
  },
  {
    id: "metodologia",
    type: "method",
    props: {
      kicker: "CÓMO TRABAJAMOS",
      title: "Un proceso operativo de tres pasos. Sin sorpresas en obra.",
      subtitle:
        "Cotizar el equipo correcto requiere información. Coordinar la entrega requiere tiempo. Sostener la operación requiere respaldo. Trabajamos los tres pasos con la misma seriedad.",
      steps: [
        {
          title: "ESPECIFICACIÓN",
          description:
            "Definimos juntos altura de trabajo, tipo de superficie, energía disponible (eléctrica/diésel/híbrida), zona de operación y fecha. La cotización refleja exactamente el equipo que tu obra necesita — ni más capacidad de la que pagás, ni menos de la que requerís.",
        },
        {
          title: "COORDINACIÓN",
          description:
            "Confirmamos disponibilidad en stock, programamos la entrega y validamos los requisitos del sitio (acceso, certificaciones, habilitaciones). El equipo llega cuando dijimos que iba a llegar — porque coordinamos antes, no después.",
        },
        {
          title: "OPERACIÓN Y RESPALDO",
          description:
            "Durante el alquiler, mantenemos canal directo de soporte técnico. Si algo requiere intervención, respondemos en sitio. Al cierre, retiramos el equipo en la fecha pactada. Toda la documentación operativa queda registrada.",
        },
      ],
    },
  },
  {
    id: "equipos",
    type: "equipmentShowcase",
    props: {
      kicker: "CATÁLOGO",
      title: "Equipos disponibles para alquiler y venta.",
      subtitle:
        "Filtrá por tipo, altura de trabajo y fuente de energía para encontrar el equipo que tu operación necesita. Disponibilidad sujeta a stock — confirmamos al momento de cotizar.",
    },
  },
    {
    id: "nosotros",
    type: "about",
    props: {
      kicker: "VMA RENTAL",
      titleLine1: "Equipos correctos.",
      titleLine2: "Plazos cumplidos.",
      subtitle: "Criterio técnico antes que volumen. Respaldo operativo durante todo el ciclo del proyecto.",
      ctaLabel: "Conocer VMA",
      ctaHref: "/nosotros",
    } as any,
  },
  {
    id: "asistente",
    type: "aiBlock",
    props: {
      kicker: "ATENCIÓN INTELIGENTE",
      title: "Consultá disponibilidad y especificaciones a cualquier hora.",
      subtitle:
        "Implementamos un asistente conversacional especializado en nuestro catálogo. Responde consultas sobre alturas, tipos de equipo, fuentes de energía y compatibilidad con tu obra — y deriva al equipo comercial cuando la consulta requiere cotización formal.",
      callout:
        "El asistente no reemplaza al equipo comercial. Lo complementa: filtra consultas técnicas básicas para que las solicitudes que llegan al comercial estén calificadas y listas para cotizar.",
      ctaLabel: "Probar el asistente",
      ctaHref: "#contacto",
    },
  },
  {
    id: "faq",
    type: "faq",
    props: {
      kicker: "PREGUNTAS FRECUENTES",
      title: "Respuestas operativas para decidir con información.",
      items: [
        {
          q: "¿Cuánto tarda en llegar un equipo desde que cotizo?",
          a: "Depende de disponibilidad de stock, zona de entrega y requisitos del sitio. Para alquileres con especificación clara, trabajamos con plazos de respuesta operativa el mismo día o al día siguiente en zona AMBA. [CONFIRMAR PLAZOS EXACTOS CON VMA]",
        },
        {
          q: "¿Qué información necesitan para cotizar?",
          a: "Altura de trabajo, tipo de superficie, fuente de energía disponible, zona de operación y fecha estimada. Con esos cinco datos podemos cotizar el equipo correcto sin reuniones intermedias.",
        },
        {
          q: "¿Operan fuera del AMBA?",
          a: "Sí, con coordinación previa. Las zonas extendidas requieren validación logística (transporte, plazos, acceso). Consultanos tu zona específica. [CONFIRMAR COBERTURA REAL CON VMA]",
        },
        {
          q: "¿Qué pasa si el equipo falla durante el alquiler?",
          a: "Tenés canal directo de soporte técnico durante todo el alquiler. Respondemos en sitio para intervenciones que lo requieran. El objetivo es que la obra no se frene.",
        },
        {
          q: "¿Los equipos vienen con operario o solo el alquiler?",
          a: "Por defecto, alquiler de equipo sin operario. Ofrecemos servicio con operario certificado bajo consulta. [CONFIRMAR DISPONIBILIDAD DE OPERARIOS CON VMA]",
        },
        {
          q: "¿Manejan venta de equipos nuevos o también usados?",
          a: "Trabajamos con equipos nuevos y unidades seleccionadas con historial de mantenimiento documentado. La venta incluye asesoramiento técnico previo a la decisión. [CONFIRMAR ALCANCE EXACTO]",
        },
        {
          q: "¿Tienen equipos disponibles para alquileres de larga duración?",
          a: "Sí. Para proyectos con uso continuo de 3 meses o más, trabajamos esquemas con condiciones diferenciales. Solicitá cotización indicando duración estimada. [CONFIRMAR CONDICIONES CON VMA]",
        },
        {
          q: "¿Cómo es el proceso de pago y facturación?",
          a: "Trabajamos con factura A. Las condiciones de pago se acuerdan en la cotización según duración y volumen del alquiler. [CONFIRMAR MEDIOS DE PAGO ACEPTADOS]",
        },
      ],
    },
  },
  {
    id: "contacto",
    type: "contact",
    props: {
      kicker: "CONTACTO",
      title: "Cotizá tu equipo.",
      subtitle:
        "Completá los datos del proyecto y te respondemos con disponibilidad y cotización. Para consultas urgentes, escribinos directo por WhatsApp.",
      whatsappHref: waCotizarUrl,
      emailComercial: "comercial@vmarental.com.ar",
      whatsappLabel: "[PENDIENTE]",
      horario: "[CONFIRMAR HORARIO CON VMA]",
      cobertura: "AMBA y zonas extendidas [CONFIRMAR]",
    },
  },
];
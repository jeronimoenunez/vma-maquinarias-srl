import type { HomeSection } from "@/domain/home";
import { waCotizarUrl } from "@/config/site";

export const homeSections: HomeSection[] = [
  {
    id: "inicio",
    type: "hero",
    props: {
      kicker: "EQUIPOS DE ELEVACIÓN Y TRABAJO EN ALTURA",
      title:
        "Tu operación no puede parar. Nosotros nos encargamos de que no pare.",
      subtitle:
        "Equipos de elevación listos, donde los necesites, cuando los necesites. Disponibilidad real, soporte técnico y continuidad operativa.",
      pullQuote:
        "La disponibilidad operativa no es una promesa comercial. Es una decisión técnica.",
      primaryCta: { label: "Cotizar equipo", href: waCotizarUrl },
      secondaryCta: { label: "Ver equipos", href: "#equipos" },
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
      kicker: "DÓNDE OPERAMOS",
      title: "Cada sector tiene su lógica. El equipo correcto depende de entenderla.",
      cards: [
        {
          id: "industria",
          href: "#contacto",
          eyebrow: "SECTOR",
          title: "Industria y planta",
          subtitle: "Contratos a medida. Equipos dedicados. Un solo interlocutor para toda la operación.",
          image: {
            src: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=2340&auto=format&fit=crop",
            alt: "Planta industrial con maquinaria operativa",
          },
          size: "hero",
        },
        {
          id: "construccion",
          href: "#contacto",
          eyebrow: "SECTOR",
          title: "Construcción y obra",
          subtitle: "Disponibilidad inmediata. Entrega coordinada. Soporte en sitio.",
          image: {
            src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=80",
            alt: "Obra en construcción con equipos de elevación",
          },
          size: "regular",
        },
        {
          id: "alquiler",
          href: "#contacto",
          title: "Alquiler flexible",
          subtitle: "Planes para industria, planes para obra, planes para lo que necesites resolver.",
          image: {
            src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop&q=80",
            alt: "Plataforma articulada en operación",
          },
          size: "regular",
        },
      ],
    },
  },
  {
    id: "servicios",
    type: "services",
    props: {
      moduleEyebrow: "CÓMO OPERAMOS",
      moduleTitle: "Tres formas de resolver",
      heroEyebrow: "No se trata solo de entregar una máquina",
      heroTitle:
        "Se trata de resolver una operación con criterio, plazos claros y acompañamiento real.",
      heroCtaLabel: "Ver cómo trabajamos",
      heroCtaHref: "#metodologia",
      cards: [
        {
          title: "Alquiler de equipos",
          subtitle: "Flota propia, disponibilidad real. El equipo correcto para tu operación, sin comprarlo.",
          image: {
            src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
            alt: "Equipo de elevación en operación",
          },
        },
        {
          title: "Venta de equipos",
          subtitle: "Equipos nuevos con garantía de fábrica y usados con garantía de funcionalidad VMA Rental. Asesoramiento técnico incluido.",
          image: {
            src: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&auto=format&fit=crop&q=80",
            alt: "Maquinaria nueva lista para venta",
          },
        },
        {
          title: "Soporte técnico",
          subtitle: "Mantenimiento, repuestos y respuesta en sitio cuando la operación no puede frenar. Continuidad operativa.",
          image: {
            src: "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?w=800&auto=format&fit=crop&q=80",
            alt: "Técnico realizando mantenimiento",
          },
        },
      ],
    },
  },
  {
    id: "metodologia",
    type: "method",
    props: {
      moduleEyebrow: "MÉTODO VMA",
      moduleTitle: "Cómo trabajamos",
      heroEyebrow: "Análisis — Diseño — Implementación",
      heroTitle:
        "No enviamos una máquina sin entender tu flujo de trabajo. Optimizamos tu espacio. Cuidamos tus costos.",
      heroCtaLabel: "Ver equipos disponibles",
      heroCtaHref: "#equipos",
      steps: [
        {
          number: "01",
          title: "Especificación",
          description:
            "Definimos juntos altura, superficie, energía y zona. La cotización refleja exactamente el equipo que tu operación necesita — ni más capacidad de la que pagás, ni menos de la que requerís.",
        },
        {
          number: "02",
          title: "Coordinación",
          description:
            "Confirmamos disponibilidad, programamos entrega y validamos requisitos del sitio. El equipo llega cuando dijimos que iba a llegar — porque coordinamos antes, no después.",
        },
        {
          number: "03",
          title: "Operación y respaldo",
          description:
            "Soporte técnico activo durante todo el alquiler. Si algo requiere intervención, respondemos en sitio o reemplazamos la unidad. Continuidad operativa es la definición del sistema.",
        },
      ],
    },
  },
  {
    id: "equipos",
    type: "equipmentShowcase",
    props: {
      moduleEyebrow: "FLOTA VMA",
      moduleTitle: "Equipos disponibles",
      ctaLabel: "Solicitar cotización",
      ctaHref: "#contacto",
    },
  },
  {
    id: "nosotros",
    type: "about",
    props: {
      kicker: "VMA RENTAL",
      titleLine1: "15 años resolviendo",
      titleLine2: "un solo problema.",
      subtitle: "Que tu operación no se detenga. No mandamos una máquina sin entender tu flujo de trabajo. Si no lo necesitás, no te lo proponemos.",
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
        "Nuestro asistente responde consultas sobre alturas, tipos de equipo, fuentes de energía y compatibilidad con tu operación — y deriva al equipo comercial cuando la consulta requiere cotización formal.",
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
          q: "¿Cuánto tarda un equipo desde que cotizo?",
          a: "Disponibilidad inmediata, stock permanente. Enviamos la documentación y se coordina la entrega.",
        },
        {
          q: "¿Qué información necesitan para cotizar?",
          a: "Altura de trabajo, tipo de superficie, fuente de energía disponible, zona de operación y fecha estimada. Con esos cinco datos podemos cotizar el equipo correcto sin reuniones intermedias.",
        },
        {
          q: "¿Qué pasa si el equipo falla durante el alquiler?",
          a: "Tenés canal directo de soporte técnico durante todo el alquiler. Respondemos en sitio para intervenciones que lo requieran o el reemplazo de la unidad. Continuidad operativa es la definición del sistema.",
        },
        {
          q: "¿Los equipos vienen con operario?",
          a: "Servicio de alquiler sin operador. Se brinda inducción de manejo al pie de la obra o bien se capacita bajo certificación si lo requiere la industria.",
        },
        {
          q: "¿Manejan venta de equipos nuevos o también usados?",
          a: "Equipos nuevos con garantía de fábrica y usados con garantía de funcionalidad VMA Rental. La venta incluye asesoramiento técnico.",
        },
        {
          q: "¿Tienen equipos disponibles para alquileres de larga duración?",
          a: "Sí. Para proyectos con uso continuo de 3 meses o más, trabajamos esquemas con condiciones diferenciales. Solicitá cotización indicando duración estimada.",
        },
        {
          q: "¿Cómo es el proceso de pago y facturación?",
          a: "Trabajamos con factura A. Las condiciones de pago se acuerdan en la cotización según duración y volumen del alquiler.",
        },
      ],
    },
  },
  {
    id: "contacto",
    type: "contact",
    props: {
      kicker: "CONTACTO",
      title: "Respuesta inmediata.",
      titleAccent: "Cotización online.",
      subtitle:
        "Completá tus datos y te respondemos con una cotización. Cobertura donde se encuentre tu planta o tu obra.",
      whatsappHref: waCotizarUrl,
      emailComercial: "comercial@vmarental.com.ar",
      whatsappLabel: "[PENDIENTE]",
      cobertura: "Cobertura donde esté tu planta o tu obra",
    },
  },
];
import type { HomeSection } from "@/domain/home";
import { waCotizarUrl } from "@/config/site";

export const homeSections: HomeSection[] = [
  {
    id: "inicio",
    type: "hero",
    props: {
      kicker: "EQUIPOS DE ELEVACIÓN Y TRABAJO EN ALTURA",
      title: "No solo elevamos personas. Impulsamos tu productividad.",
      primaryCta: {
        label: "Cotizar equipo",
        href: "#contacto",
      },
      secondaryCta: {
        label: "Ver equipos",
        href: "#equipos",
      },
      image: {
        src: "/images/vma-version-b/hero-vma-b.png",
        alt: "Equipo VMA Rental en operación",
      },
    },
  },

  {
    id: "equipos",
    type: "equipmentShowcase",
    props: {
      moduleEyebrow: "FLOTA VMA",
      moduleTitle:
        "Explorá la flota y elegí el equipo según altura, energía y tipo de operación.",
      ctaLabel: "Solicitar cotización",
      ctaHref: "#contacto",
    },
  },

  {
    id: "sectores",
    type: "industrySolutions",
    props: {
      kicker: "DÓNDE OPERAMOS",
      title:
        "Cada sector tiene su lógica. El equipo correcto depende de entenderla.",
      cards: [
        {
          id: "industria",
          href: "#contacto",
          eyebrow: "SECTOR",
          title: "Industria y planta",
          subtitle:
            "Contratos a medida. Equipos dedicados. Un solo interlocutor para toda la operación.",
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
          subtitle:
            "Disponibilidad inmediata. Entrega coordinada. Soporte en sitio.",
          image: {
            src: "/images/Firefly19.jpg",
            alt: "Obra en construcción con equipos de elevación",
          },
          size: "regular",
        },
        {
          id: "alquiler",
          href: "#contacto",
          eyebrow: "SECTOR",
          title: "Alquiler flexible",
          subtitle:
            "Planes para industria, planes para obra, planes para lo que necesites resolver.",
          image: {
            src: "/images/IMG_20250703_094445389_HDR.jpg",
            alt: "Plataforma articulada en operación",
          },
          size: "regular",
        },
      ],
    },
  },

  {
    id: "negocio",
    type: "businessCards",
    props: {
      kicker: "SISTEMA VMA",
      title: "Dos formas de entender cómo resolvemos una operación.",
      cards: [
        {
          kicker: "UNIDADES DE NEGOCIO",
          title: "Alquiler, venta de equipos y servicio técnico.",
          subtitle:
            "Tres líneas de trabajo para resolver disponibilidad, inversión y continuidad operativa.",
          href: "/unidades",
          images: [
            "/images/IMG_20250703_094445389_HDR.jpg",
            "/images/Firefly10-1.png",
            "/images/Firefly.jpg",
          ],
          autoplay: true,
        },
        {
          kicker: "MÉTODO VMA",
          title: "Lo que nos hace diferentes.",
          subtitle:
            "Análisis, asesoramiento comprometido y proyección 360° antes de mover un equipo.",
          href: "/metodo",
          images: ["/images/Metodo-VMA-Grids.png"],
          autoplay: false,
        },
      ],
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
          q: "¿Manejan venta de equipos nuevos o también usados?",
          a: "Equipos nuevos con garantía de fábrica y usados con garantía de funcionalidad VMA Rental. La venta incluye asesoramiento técnico.",
        },
        {
          q: "¿Tienen equipos disponibles para alquileres de larga duración?",
          a: "Sí. Para proyectos con uso continuo de 3 meses o más, trabajamos esquemas con condiciones diferenciales.",
        },
        {
          q: "¿Cómo es el proceso de pago y facturación?",
          a: "Factura A. Condiciones de pago según duración y volumen del alquiler.",
        },
      ],
    },
  },

  {
    id: "nosotros",
    type: "about",
    props: {
      kicker: "Nosotros",
      statement:
        "Conocemos el trabajo en altura. Por eso combinamos equipos, disponibilidad y asesoramiento operativo para que cada alquiler llegue con el equipo correcto.",
      ctaLabel: "Conocé VMA",
      ctaHref: "/nosotros",
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
      whatsappLabel: "1128421008",
      cobertura: "Cobertura donde esté tu planta o tu obra",
    },
  },
];

import type { HomeSection } from "@/domain/home";
import { waCotizarUrl } from "@/config/site";

export const homeSections: HomeSection[] = [
  {
    id: "inicio",
    type: "hero",
    props: {
      kicker: "EQUIPOS DE ELEVACIÓN Y TRABAJO EN ALTURA",
      title: "No solo elevamos personas. Impulsamos tu productividad.",
      subtitle:
        "Soluciones disruptivas en elevación de personal: alquiler, venta y soporte técnico con ADN estratégico. Optimización del costo industrial y obras.",
      pullQuote:
        "La disponibilidad operativa no es una promesa comercial. Es una decisión técnica.",
      primaryCta: {
        label: "Cotizar equipo",
        href: "#contacto",
      },
      secondaryCta: {
        label: "Ver equipos",
        href: "#equipos",
      },
      image: {
        src: "/images/hero-poster.jpg",
        alt: "Equipo VMA Rental en operación",
      },
    },
  },

  {
    id: "nosotros",
    type: "about",
    props: {
      kicker: "Nosotros",
      statement:
        "No queremos guardar estos 15 años de experiencia. Queremos ponerlos al servicio de tu operación: asesorar antes de enviar un equipo, acompañar la implementación y dar seguimiento técnico hasta que tu planificación se cumpla.",
      ctaLabel: "Conocer VMA",
      ctaHref: "/nosotros",
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
            src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&auto=format&fit=crop&q=80",
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
            src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1400&auto=format&fit=crop&q=80",
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
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?w=1600&auto=format&fit=crop&q=80",
          ],
          autoplay: true,
        },
        {
          kicker: "MÉTODO VMA",
          title: "Lo que nos hace diferentes.",
          subtitle:
            "Análisis, asesoramiento comprometido y proyección 360° antes de mover un equipo.",
          href: "/metodo",
          images: [
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&auto=format&fit=crop&q=80",
          ],
          autoplay: false,
        },
      ],
    },
  },

  // {
  //   id: "criterios",
  //   type: "technicalCriteria",
  //   props: {
  //     kicker: "CRITERIO TÉCNICO",
  //     title: "El equipo correcto no se elige por catálogo.",
  //     subtitle:
  //       "Antes de cotizar, analizamos las condiciones reales de trabajo para evitar sobredimensionar, demorar o comprometer la operación.",
  //     items: [
  //       {
  //         number: "01",
  //         title: "Altura y alcance real",
  //         description:
  //           "Definimos el equipo según la altura efectiva de trabajo, el tipo de acceso y el margen operativo necesario.",
  //       },
  //       {
  //         number: "02",
  //         title: "Superficie y entorno",
  //         description:
  //           "Evaluamos si la operación se realiza en interior, exterior, piso industrial, obra, terreno irregular o zona con restricciones.",
  //       },
  //       {
  //         number: "03",
  //         title: "Energía y continuidad",
  //         description:
  //           "Elegimos entre equipos eléctricos, diésel o híbridos según autonomía, ventilación, ruido y exigencia de uso.",
  //       },
  //     ],
  //   },
  // },

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

  // {
  //   id: "asistente",
  //   type: "aiBlock",
  //   props: {
  //     kicker: "ATENCIÓN INTELIGENTE",
  //     title: "Consultá disponibilidad y especificaciones a cualquier hora.",
  //     subtitle:
  //       "Nuestro asistente responde consultas sobre alturas, tipos de equipo, fuentes de energía y compatibilidad con tu operación — y deriva al equipo comercial cuando la consulta requiere cotización formal.",
  //     callout:
  //       "El asistente no reemplaza al equipo comercial. Lo complementa: filtra consultas técnicas básicas para que las solicitudes que llegan al comercial estén calificadas y listas para cotizar.",
  //     ctaLabel: "Probar el asistente",
  //     ctaHref: "#contacto",
  //   },
  // },

  {
  id: "ecosistema",
  type: "ecosystemVMA",
  props: {
    kicker: "ECOSISTEMA VMA",
    title: "Novedades, criterio técnico y decisiones para operar mejor.",
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
        // {
        //   q: "¿Qué pasa si el equipo falla durante el alquiler?",
        //   a: "Tenés canal directo de soporte técnico durante todo el alquiler. Respondemos en sitio o reemplazo de la unidad. Continuidad operativa.",
        // },
        // {
        //   q: "¿Los equipos vienen con operario?",
        //   a: "Alquiler sin operador. Inducción de manejo al pie de la obra o certificación para industria.",
        // },
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
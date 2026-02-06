import type { HomeSection } from "@/domain/home";

export const homeSections: HomeSection[] = [
  // 1) Inicio (Video controlado por scroll)
  {
    id: "inicio",
    type: "heroVideo",
    props: {
      title: "No solo elevamos personas. Impulsamos tu productividad.",
      subtitle: "Alquiler, venta y soporte técnico con ADN estratégico. Optimizacion del Costo Industrial y obras. ",
      primaryCta: { label: "Contactanos", href: "#contacto" },
      secondaryCta: { label: "Ver equipos", href: "#equipos" },
      video: {
        src: "/videos/background-video.mp4",
        poster: "/images/hero-poster.jpg",
      },
    },
  },

  // 2) Nosotros
  {
    id: "nosotros",
    type: "about",
    props: {
      kicker: "Nosotros",
      title: "El Factor VMA",
      intro:
        "No queremos guardarnos estos 15 años de experiencia: te acompañamos desde el asesoramiento hasta el soporte técnico final, cuidando continuidad operativa.",
      history: "VMA nació para romper con la inercia del sector. Decidimos ser el socio que no falla.",
      mission:
        "Maximizar la eficiencia operativa de nuestros clientes mediante tecnología de elevación de vanguardia.",
      vision:
        "Liderar la transformación digital y técnica del movimiento en medios de elevación y cargas en la región.",
      values: [
        { title: "Agilidad", description: "Respuesta rápida en obra." },
        { title: "Honestidad radical", description: "Si no lo necesitás, no te lo vendemos." },
        { title: "Seguridad sin excusas", description: "Mantenimiento y control riguroso." },
      ],
    },
  },

  // 3) Metodología
  {
    id: "metodologia",
    type: "method",
    props: {
      title: "Metodología",
      steps: [
        { title: "Análisis", description: "No enviamos una máquina sin entender tu flujo de trabajo." },
        { title: "Diseño", description: "Optimizamos tu espacio y elegimos el equipo correcto." },
        { title: "Implementación", description: "Entrega + soporte. Menos imprevistos, más previsibilidad." },
        { title: "Control y continuidad", description: "Seguimiento, mantenimiento preventivo y soporte para evitar paradas."
        }
      ],
      principles: [
        {
          title: "Asesoramiento comprometido",
          description: "Si no lo necesitás, no te lo vendemos. Buscamos rentabilidad para vos.",
        },
        { title: "Proyección 360°", description: "Migramos hacia flotas inteligentes y procesos sustentables." },
      ],
    },
  },

  // 4) Servicios
  {
    id: "servicios",
    type: "services",
    props: {
      kicker: "Unidades de negocio",
      title: "Servicios y Equipos",
      subtitle:
        "Alquiler, venta y soporte técnico con ADN estratégico: cuidamos costos, seguridad y continuidad.",
      items: [
        {
          title: "Alquiler de equipos",
          bullets: [
            "Disponibilidad real: flota moderna lista.",
            "Flexibilidad: planes por industria, obra o proyecto.",
          ],
        },
        {
          title: "Venta de equipos",
          bullets: [
            "Excelencia técnica: marcas durables.",
            "Nuevos y usados seleccionados: mantenimiento transparente.",
          ],
        },
        {
          title: "Servicio técnico y postventa",
          bullets: [
            "Respuesta express: menos máquina parada.",
            "Capacitación: operarios certificados, menos incidentes.",
          ],
        },
      ],
    },
  },

  // 5) Equipos (catálogo)
  {
    id: "equipos",
    type: "equipmentShowcase",
    props: {
      title: "Equipos",
      subtitle: "Seleccionados por performance, seguridad y disponibilidad.",
    },
  },

  // 6) Ecosistema
  {
    id: "ecosistema",
    type: "ecosystem",
    props: {
      title: "Ecosistema",
      items: [
        { name: "Obra e industria", description: "Soluciones por entorno y riesgo." },
        { name: "Logística", description: "Operación continua y segura." },
        { name: "Eventos", description: "Montaje rápido y soporte." },
      ],
    },
  },

  // 7) Contacto
  {
    id: "contacto",
    type: "contact",
    props: {
      title: "Contacto",
      subtitle: "Respondemos rápido. Coordinemos el equipo ideal para tu obra.",
    },
  },

  // 8) FAQ
  // {
  //   id: "faq",
  //   type: "faq",
  //   props: {
  //     title: "Preguntas frecuentes",
  //     items: [
  //       { q: "¿Hacen entregas en obra?", a: "Sí, coordinamos logística según zona y equipo." },
  //       { q: "¿Qué necesito para alquilar?", a: "Datos de facturación, lugar, fechas y tipo de trabajo." },
  //     ],
  //   },
  // },
];

export const es = {
  cta: { book: "Reservar", viewMenu: "Ver Carta", about: "Conócenos" },
  home: {
    hero: {
      title: "Cocina mediterránea con alma cervecera",
      subtitle: "BEER & BURGERS 🍻 También tapeamos Bocadillos Gourmet.",
    },
    highlights: {
      quality: {
        title: "Producto de calidad",
        text: "Ingredientes frescos, temporada y cercanía.",
      },
      ambience: {
        title: "Ambiente Keku",
        text: "Diseño moderno, música y buen rollo.",
      },
      events: {
        title: "Grupos y eventos",
        text: "Consúltanos para menús cerrados y celebraciones.",
      },
    },
    about: {
      title: "Sobre Keku",
      text: "Una cervecería con alma gastronómica. Tradición y toques modernos para venir con amigos o en familia.",
    },
  },
} as const;

export const en = {
  cta: { book: "Book", viewMenu: "View Menu", about: "About us" },
  home: {
    hero: {
      title: "Mediterranean cuisine with a craft-beer soul",
      subtitle: "BEER & BURGERS 🍻 We also serve tapas and gourmet sandwiches.",
    },
    highlights: {
      quality: {
        title: "Quality ingredients",
        text: "Fresh, seasonal, local produce.",
      },
      ambience: {
        title: "Keku ambience",
        text: "Modern design, music and a great vibe.",
      },
      events: {
        title: "Groups & events",
        text: "Ask for set menus and celebrations.",
      },
    },
    about: {
      title: "About Keku",
      text: "A beer house with a foodie heart. Tradition with modern twists for friends and families.",
    },
  },
} as const;

export type Lang = "es" | "en";

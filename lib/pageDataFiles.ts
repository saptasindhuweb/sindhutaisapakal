export const pageDataFiles = {
  home: "home.json",
  about: "about.json",
  gallery: "gallery.json",
  gopika: "gopika.json",
  maii: "maii.json",
  mamta: "mamta.json",
  sanmati: "sanmati.json",
  savitribai: "savitribai.json",
  shree: "shree.json",
  supporters: "supporters.json",
  tirthrup: "tirthrup.json",
} as const;

export type PageDataKey = keyof typeof pageDataFiles;

export const pageDataLabels: Record<PageDataKey, string> = {
  home: "Home",
  about: "About",
  gallery: "Gallery",
  gopika: "Gopika",
  maii: "Maai",
  mamta: "Mamta",
  sanmati: "Sanmati",
  savitribai: "Savitribai",
  shree: "Shree",
  supporters: "Supporters",
  tirthrup: "Tirthrup",
};

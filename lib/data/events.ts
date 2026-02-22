export type EventItem = {
  id: string;
  title: string;
  date: string; // ISO format (IMPORTANT)
  shortDescription: string;
  description: string;
  coverImage: string;
  images?: string[];
};

export const events: EventItem[] = [
  {
    id: "health-camp-2025",
    title: "Multi-Center Health Camp",
    date: "2025-01-10",
    shortDescription: "Free medical checkups across multiple centers.",
    description:
      "A large-scale health camp was organized providing medical consultations, diagnostics, and medicines to children and staff.",
    coverImage: "/assets/images/1.png",
    images: ["/assets/images/tirthrup1.png", "/assets/images/gopika1.png", "/assets/images/gopika2.png", "/assets/images/gopika3.png"],
  },
  {
    id: "education-drive-2025",
    title: "Education Support Drive",
    date: "2025-03-15",
    shortDescription: "Books, uniforms and mentoring support.",
    description:
      "The education drive focused on providing essential learning material and mentorship to children across homes.",
    coverImage: "/assets/images/2.png",
  },
  {
    id: "anniversary-2025",
    title: "Foundation Anniversary Celebration",
    date: "2025-06-01",
    shortDescription: "Celebrating years of service and compassion.",
    description:
      "A commemorative event celebrating the foundation’s journey with supporters and well-wishers.",
    coverImage: "/assets/images/gopika2.png",
  },
  {
    id: "tree-plantation-2026",
    title: "Tree Plantation Drive",
    date: "2026-02-05",
    shortDescription: "Planting for a greener future.",
    description:
      "An environmental initiative involving children and volunteers to plant saplings.",
    coverImage: "/assets/images/gopika3.png",
  },
  {
    id: "sports-meet-2026",
    title: "Annual Sports Meet",
    date: "2026-04-20",
    shortDescription: "Encouraging fitness and teamwork.",
    description:
      "Children from different homes participated in track, field, and team sports.",
    coverImage: "/assets/images/gopika4.png",
  },
  {
    id: "fundraiser-2026",
    title: "Annual Fundraiser Event",
    date: "2026-08-10",
    shortDescription: "Supporting future initiatives.",
    description:
      "A fundraiser event aimed at raising support for upcoming projects.",
    coverImage: "/assets/images/gopika5.png",
  },
];
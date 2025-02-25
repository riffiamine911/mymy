export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  clientName?: string;
  year: string;
  services: string[];
  content: string;
  gallery: string[];
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "brand-identity-project",
    title: "Morocco Gaming Expo",
    description: "MGE: A Government Digital Gaming Hub",
    image: "/projects/iMac Mockup Light.png",
    categories: ["Branding", "Visual Identity", "Typography"],
    clientName: "Ministry of Youth, Culture, and Communication",
    year: "2024",
    services: ["Logo Design", "Banners Design", "Responsive Design"],
    liveUrl: "https://moroccogamingexpo.ma/",
    content: `
The Morocco Gaming Expo is an annual event in Rabat, Morocco, dedicated to the gaming industry.

The expo features several platforms:

Expositions: A space showcasing Morocco's gaming ecosystem, with thematic booths highlighting key industry players and initiatives. 

Conferences: Sessions led by national and international experts discussing advancements and future prospects in the gaming sector. 

Tournaments: National e-sports competitions, starting with online qualifiers and culminating in offline finals during the expo. 

The event is organized by the Ministry of Youth, Culture, and Communication, aiming to promote the gaming industry in Morocco and establish Rabat as a significant hub in Africa and the MENA region.
    `,
    gallery: [
      "/projects/img.svg",
      "/projects/stats.svg",
      "/projects/mgi.svg",
    ]
  },
  {
    slug: "brand-identity-project",
    title: "Niya Maghribiya",
    description: "A comprehensive brand identity system for a tech startup",
    image: "/projects/diro niya.png",
    categories: ["Branding", "Visual Identity", "Typography"],
    clientName: "Ministry of Youth, Culture, and Communication",
    year: "2025",
    services: ["Logo Design", "Brand Guidelines", "Visual Identity", "Collateral Design"],
    content: `
# TechFlow Brand Identity

A modern and dynamic brand identity that reflects the innovative spirit of a growing tech company. The design system emphasizes flexibility and scalability across digital and print mediums.

## Design Approach

The visual language combines geometric shapes with a vibrant color palette to create a distinctive and memorable brand presence. Typography plays a crucial role in establishing hierarchy and readability across all touchpoints.

## Deliverables

- Logo System
- Typography Guidelines
- Color Palette
- Brand Guidelines
- Marketing Collateral
- Digital Assets
    `,
    gallery: [
      "/projects/img.svg",
      "/projects/brand-identity-2.jpg",
      "/projects/brand-identity-3.jpg",
    ]
  },
 
  // Add more design projects...
]; 
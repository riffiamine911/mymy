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
}

export const projects: Project[] = [
  {
    slug: "brand-identity-project",
    title: "Morocco Gaming Expo",
    description: "MGE: A Government Digital Gaming Hub",
    image: "/projects/iMac Mockup Light.png",
    categories: ["Branding", "Visual Identity", "Typography"],
    clientName: "Ministère de Communication",
    year: "2024",
    services: ["Logo Design", "Banners Design", "Responsive Design"],
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
  {
    slug: "brand-identity-project",
    title: "Morocco Gaming Expo",
    description: "A comprehensive brand identity system for a tech startup",
    image: "/projects/img.svg",
    categories: ["Branding", "Visual Identity", "Typography"],
    clientName: "TechFlow Inc.",
    year: "2024",
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
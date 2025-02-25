export interface Review {
  author: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export const reviews: Review[] = [
  {
    author: "Aymane Maador",
    role: "Head of Department",
    company: "SNRT",
    content: "Amine's attention to detail and creative vision transformed our brand identity. His work not only met but exceeded our expectations, delivering a design system that perfectly captures our company's essence.",
    image: "/projects/ayman maador.png"
  },
  {
    author: "Hassan Zalagh",
    role: "Division Head",
    company: "Ministry of Youth and Communication",
    content: "Working with Amine was a fantastic experience. His understanding of design principles and ability to translate ideas into visual elements is exceptional. Highly recommended for any design project.",
    image: "/projects/hassano.png"
  },
  {
    author: "Emma Rodriguez",
    role: "Marketing Manager",
    company: "Global Innovations",
    content: "The level of professionalism and creativity Amine brings to each project is outstanding. He has a unique ability to understand client needs and deliver designs that make a lasting impact.",
    image: "/projects/woman.png"
  }
]; 
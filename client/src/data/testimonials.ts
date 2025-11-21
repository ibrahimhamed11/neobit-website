export interface Testimonial {
  nameKey: string;
  roleKey: string;
  contentKey: string;
  rating: number;
  avatar: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    nameKey: "testimonials.client1.name",
    roleKey: "testimonials.client1.role",
    contentKey: "testimonials.client1.content",
    rating: 5,
    avatar: "A",
    company: "FinTech Solutions",
  },
  {
    nameKey: "testimonials.client2.name",
    roleKey: "testimonials.client2.role",
    contentKey: "testimonials.client2.content",
    rating: 5,
    avatar: "M",
    company: "Trading Pro",
  },
  {
    nameKey: "testimonials.client3.name",
    roleKey: "testimonials.client3.role",
    contentKey: "testimonials.client3.content",
    rating: 5,
    avatar: "S",
    company: "Blockchain Ventures",
  },
];

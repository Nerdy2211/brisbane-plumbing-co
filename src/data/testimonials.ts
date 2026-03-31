export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  initial: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Called about a burst pipe on a Saturday morning. They were here within the hour, found the problem straight away, and fixed it properly. Cleaned up after themselves too. Couldn't ask for better service.",
    name: "Sarah M.",
    location: "Paddington",
    initial: "S",
    rating: 5,
  },
  {
    quote:
      "Really impressed with the honest advice. They replaced our old hot water system and explained all the options clearly without pushing us to overspend. Fair price, great work.",
    name: "James T.",
    location: "Indooroopilly",
    initial: "J",
    rating: 5,
  },
  {
    quote:
      "We've used them three times now — blocked drain, new gas cooktop, and a bathroom reno. Reliable, on time, and the quality of work is excellent every time. They're our go-to plumber.",
    name: "Michelle R.",
    location: "Bulimba",
    initial: "M",
    rating: 5,
  },
];

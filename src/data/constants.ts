export const BUSINESS = {
  name: "Brisbane Plumbing Co.",
  phone: "0400 000 000",
  phoneTel: "tel:0400000000",
  email: "info@brisbaneplumbingco.com.au",
  location: "Brisbane, QLD",
  serviceArea: "Greater Brisbane, Logan, Moreton Bay, Redlands",
  abn: "XX XXX XXX XXX",
  qbccLicence: "#XXXXXXX",
  established: "Since 2010",
  googleRating: "4.9",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
] as const;

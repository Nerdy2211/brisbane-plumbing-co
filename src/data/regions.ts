export interface Region {
  name: string;
  icon: string;
  areas: string[];
  primary: boolean;
}

export const regions: Region[] = [
  {
    name: "Brisbane",
    icon: "Building2",
    areas: [
      "Inner City & CBD",
      "Paddington & West End",
      "New Farm & Teneriffe",
      "Southside suburbs",
    ],
    primary: true,
  },
  {
    name: "Moreton Bay",
    icon: "Waves",
    areas: [
      "Redcliffe Peninsula",
      "North Lakes & Mango Hill",
      "Pine Rivers & Strathpine",
    ],
    primary: false,
  },
  {
    name: "Logan & Redlands",
    icon: "Factory",
    areas: [
      "Logan Central & Springwood",
      "Underwood & Sunnybank",
      "Capalaba & Cleveland",
    ],
    primary: false,
  },
];

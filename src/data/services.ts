export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  fullDescription: string;
  commonProblems: string[];
}

export const services: Service[] = [
  {
    slug: "blocked-drains",
    title: "Blocked Drains",
    icon: "Droplets",
    description:
      "Drains backing up? We'll find the cause with CCTV cameras and clear it fast with high-pressure jet rodding. No guesswork.",
    fullDescription:
      "We don't just clear the blockage — we find out why it happened. Using CCTV drain cameras and high-pressure water jetters, we diagnose the root cause and fix it properly so it doesn't come back. Whether it's tree roots, grease buildup, or damaged pipes, we've seen it all.",
    commonProblems: [
      "Tree root intrusion",
      "Grease and fat buildup",
      "Broken or collapsed pipes",
      "Foreign objects in drains",
      "Slow-draining sinks and showers",
    ],
  },
  {
    slug: "hot-water-systems",
    title: "Hot Water Systems",
    icon: "Flame",
    description:
      "Supply, install, and repair all hot water systems — gas, electric, solar, and heat pump. Same-day replacements available.",
    fullDescription:
      "No hot water? We can usually get you sorted the same day. We install, repair, and service all types — gas, electric, solar, and heat pump — from brands like Rheem, Rinnai, Bosch, and Dux. We'll help you choose the right system for your home and budget.",
    commonProblems: [
      "No hot water or inconsistent temperature",
      "Leaking hot water unit",
      "Pilot light won't stay lit",
      "Rusty or discoloured water",
      "Old system needing replacement",
    ],
  },
  {
    slug: "leak-detection",
    title: "Leak Detection",
    icon: "Search",
    description:
      "Hidden leaks waste water and cause damage. We use the latest detection technology to find and fix leaks without tearing up your property.",
    fullDescription:
      "Hidden leaks waste water and cause damage. We use the latest detection technology to find and fix leaks without tearing up your property. Early detection saves you money on water bills and prevents costly structural damage down the track.",
    commonProblems: [
      "Unexplained high water bills",
      "Damp or wet patches on walls or floors",
      "Sound of running water when taps are off",
      "Mould or mildew appearing",
      "Water meter spinning when nothing is on",
    ],
  },
  {
    slug: "gas-fitting",
    title: "Gas Fitting",
    icon: "Gauge",
    description:
      "Licensed gas fitter for cooktops, BBQs, hot water, heaters, and gas line installations. Safety compliance certificates provided.",
    fullDescription:
      "We're licensed gas fitters who handle everything from cooktop and BBQ connections to full gas line installations. Safety is our top priority — every job comes with a compliance certificate so you know it's done right.",
    commonProblems: [
      "Gas cooktop or BBQ installation",
      "Gas hot water system connections",
      "Gas heater servicing and repairs",
      "Gas leak detection and repair",
      "New gas line installations",
    ],
  },
  {
    slug: "general-maintenance",
    title: "General Maintenance",
    icon: "Wrench",
    description:
      "Leaking taps, running toilets, burst pipes, and everything in between. No job is too small — we'll sort it quickly.",
    fullDescription:
      "From a dripping tap to a burst pipe, no job is too small or too urgent. We carry a full range of parts on the truck so most repairs can be done on the spot. We'll sort it quickly and leave your place clean.",
    commonProblems: [
      "Leaking or dripping taps",
      "Running or leaking toilets",
      "Burst or leaking pipes",
      "Blocked sinks and basins",
      "Water pressure issues",
    ],
  },
  {
    slug: "kitchen-bathroom",
    title: "Kitchen & Bathroom",
    icon: "Bath",
    description:
      "Renovating or building new? We work with your builder or designer to get the plumbing right — from rough-in to finished fixtures.",
    fullDescription:
      "Planning a bathroom reno or building a new home? We work alongside builders and designers to make sure the plumbing is done right from the start. From first-fix rough-in to final fixture installation, we handle it all with care and attention to detail.",
    commonProblems: [
      "Complete bathroom renovations",
      "Kitchen sink and dishwasher plumbing",
      "Tapware and fixture upgrades",
      "Rough-in plumbing for new builds",
      "Shower and bathtub installations",
    ],
  },
  {
    slug: "stormwater-drainage",
    title: "Stormwater & Drainage",
    icon: "CloudRain",
    description:
      "Stormwater and sewer pipe repairs, new installations, CCTV inspections, and drainage solutions for homes and commercial properties.",
    fullDescription:
      "We handle all aspects of stormwater and drainage — from new installations to repairs and CCTV inspections. Whether it's a blocked stormwater drain, damaged sewer line, or a new drainage system for your property, we've got the equipment and experience to get it done.",
    commonProblems: [
      "Blocked stormwater drains",
      "Sewer pipe repairs and replacements",
      "Drainage for new developments",
      "CCTV pipe inspections",
      "Yard flooding and poor drainage",
    ],
  },
  {
    slug: "commercial-plumbing",
    title: "Commercial Plumbing",
    icon: "Building2",
    description:
      "Reliable plumbing for offices, retail, restaurants, and body corporate. Maintenance plans and priority response available.",
    fullDescription:
      "We provide reliable plumbing services for offices, retail, restaurants, and body corporate properties. Whether you need a one-off repair or an ongoing maintenance plan, we offer priority response and flexible scheduling to minimise disruption to your business.",
    commonProblems: [
      "Office and retail plumbing maintenance",
      "Restaurant and kitchen grease trap servicing",
      "Body corporate common area plumbing",
      "Backflow prevention testing",
      "Planned maintenance programs",
    ],
  },
];

export const featuredServices = [
  {
    label: "Blocked Drains & Drainage",
    title: "Blocked Drains & Drainage",
    body: "We don't just clear the blockage — we find out why it happened. Using CCTV drain cameras and high-pressure water jetters, we diagnose the root cause and fix it properly so it doesn't come back. Whether it's tree roots, grease buildup, or damaged pipes, we've seen it all.",
    chips: ["CCTV Inspection", "High-Pressure Jetting", "Root Cause Fix"],
  },
  {
    label: "Hot Water Systems",
    title: "Hot Water Systems",
    body: "No hot water? We can usually get you sorted the same day. We install, repair, and service all types — gas, electric, solar, and heat pump — from brands like Rheem, Rinnai, Bosch, and Dux. We'll help you choose the right system for your home and budget.",
    chips: ["All Brands", "Same-Day Service", "Energy Efficient Options"],
  },
  {
    label: "Renovations & New Builds",
    title: "Renovations & New Builds",
    body: "Planning a bathroom reno or building a new home? We work alongside builders and designers to make sure the plumbing is done right from the start. From first-fix rough-in to final fixture installation, we handle it all with care and attention to detail.",
    chips: ["New Builds", "Renovations", "Queenslanders"],
  },
];

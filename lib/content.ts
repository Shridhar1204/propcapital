export const navLinks = [
  { href: "#properties", label: "Markets" },
  { href: "#services", label: "Services" },
  { href: "#ira", label: "IRA" },
  { href: "#contact", label: "Contact" },
] as const;

export const shell =
  "mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 xl:px-14";

export const kicker =
  "text-[11px] font-medium uppercase tracking-[0.22em] text-ash";

export type MarketHighlight = {
  id: string;
  name: string;
  image: string;
  alt: string;
  position: string;
  summary: string;
};

export const marketHighlights: MarketHighlight[] = [
  {
    id: "gurugram",
    name: "Gurugram",
    image: "/images/gurugram/apartments.jpg",
    alt: "Illustrative residential apartment buildings in Gurugram, Delhi NCR.",
    position: "center",
    summary:
      "Explore residential and commercial property opportunities with location-led discovery and guidance.",
  },
  {
    id: "noida",
    name: "Noida",
    image: "/images/noida/sector78.jpg",
    alt: "Illustrative residential apartment buildings in Noida, Delhi NCR.",
    position: "center",
    summary:
      "Discover homes, workspaces and investment property across Noida, with support shaped around your brief.",
  },
];

export const marketAreas = ["Delhi", "Gurugram", "Noida", "Faridabad"] as const;

export const principles = [
  {
    index: "01",
    title: "Start with what matters to you",
    body: "PropCapital’s discovery service is designed around budget, location and personal preferences, across residential and commercial property. IRA is the AI property consultant concept; its live assistant and property search are not connected on this page.",
  },
  {
    index: "02",
    title: "Residential and commercial property",
    body: "The service scope spans apartments, luxury homes, new launches, resale and RERA-verified listings, as well as offices, retail spaces, commercial investment property and warehouses. No live listings are shown here.",
  },
  {
    index: "03",
    title: "Guidance beyond the shortlist",
    body: "Property consultation can include comparisons, site visits, price negotiation, documentation, registration and home-loan assistance, so buyers can get help with the practical steps around a decision.",
  },
  {
    index: "04",
    title: "Support for more than buyers",
    body: "Services also cover remote NRI discovery and post-purchase support, property-owner listing and promotion assistance, and the Estatepreneur referral programme for buyer and seller referrals.",
  },
] as const;

export const serviceGroups = [
  {
    index: "01",
    title: "AI-powered property discovery",
    description:
      "Personalised recommendations based on budget, location and the qualities that matter to you.",
    items: [
      "IRA AI property consultant",
      "Budget- and location-based property matching",
      "Residential and commercial search",
    ],
  },
  {
    index: "02",
    title: "Residential property",
    description:
      "Property discovery across a range of home types and purchase stages.",
    items: [
      "Apartments and flats",
      "Luxury homes",
      "New-launch and resale properties",
      "RERA-verified listings",
    ],
  },
  {
    index: "03",
    title: "Commercial property",
    description:
      "Options for occupiers and investors looking beyond residential property.",
    items: [
      "Commercial offices",
      "Retail spaces",
      "Commercial investment properties",
      "Warehouses",
    ],
  },
  {
    index: "04",
    title: "Property consultation",
    description:
      "Practical assistance from shortlisting through the steps around a purchase.",
    items: [
      "Verified property consultants",
      "Personalised shortlisting and property comparisons",
      "Site visits and price negotiation assistance",
      "Documentation, registration and home-loan assistance",
    ],
  },
  {
    index: "05",
    title: "NRI property services",
    description:
      "Remote discovery and dedicated support for NRI property buyers.",
    items: [
      "Virtual property walkthroughs",
      "Property cost and financing guidance",
      "FEMA-related guidance",
      "Dedicated NRI relationship managers",
      "Post-purchase assistance",
    ],
  },
  {
    index: "06",
    title: "Property owner services",
    description:
      "Support for owners who want to present a property and reach potential buyers.",
    items: [
      "Free property listing",
      "Professional property photography and promotion",
      "Buyer enquiry assistance",
      "Dedicated relationship manager",
    ],
  },
  {
    index: "07",
    title: "Property financial tools",
    description:
      "EMI, stamp duty and NRI cost calculators are part of the service offering; none are interactive on this page.",
    items: ["EMI calculator", "Stamp duty calculator", "NRI cost calculator"],
  },
  {
    index: "08",
    title: "Estatepreneur referral programme",
    description:
      "Refer property buyers or sellers through the referral programme.",
    items: ["Buyer referrals", "Seller referrals", "Referral rewards"],
  },
  {
    index: "09",
    title: "Real estate market information",
    description:
      "Explore context to help you understand the wider property market.",
    items: [
      "Locality and developer discovery",
      "Property investment information",
      "Market insights",
    ],
  },
] as const;

export type IraPrompt = {
  id: string;
  label: string;
  visitor: string;
  reply: string;
};

export const iraGreeting =
  "I am IRA, PropCapital’s AI property consultant concept. This is a prepared preview: I am not connected to a live AI model or property listings, and nothing you choose here is sent.";

export const iraPrompts: IraPrompt[] = [
  {
    id: "budget",
    label: "Set a budget",
    visitor: "Help me find a home within my budget in Gurugram.",
    reply:
      "Budget and location are part of the planned matching experience. Live property search is not connected on this page, so I cannot return available homes.",
  },
  {
    id: "compare",
    label: "Compare options",
    visitor: "What should I compare before choosing a property?",
    reply:
      "You can compare the location, property type, costs and details that matter to your plans. This preview has no live listings or property figures to compare.",
  },
  {
    id: "nri",
    label: "Buying from abroad",
    visitor: "I am an NRI. Can I view a property remotely?",
    reply:
      "Remote discovery and virtual walkthroughs are part of PropCapital’s NRI services. This preview cannot arrange a walkthrough or provide property-specific FEMA or financing guidance.",
  },
];

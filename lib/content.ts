export const navLinks = [
  { href: "#properties", label: "Properties" },
  { href: "#about", label: "About" },
  { href: "#ira", label: "IRA" },
  { href: "#contact", label: "Contact" },
] as const;

export const shell =
  "mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 xl:px-14";

export const kicker =
  "text-[11px] font-medium uppercase tracking-[0.22em] text-ash";

export type SampleProperty = {
  id: string;
  image: string;
  alt: string;
  position: string;
};

export const sampleProperties: SampleProperty[] = [
  {
    id: "01",
    image: "/images/prop-1.jpg",
    alt: "Sample photograph of a white modern house beside a swimming pool.",
    position: "center",
  },
  {
    id: "02",
    image: "/images/prop-2.jpg",
    alt: "Sample photograph of a low white pavilion opening onto a terrace and pool.",
    position: "42% center",
  },
  {
    id: "03",
    image: "/images/prop-3.jpg",
    alt: "Sample photograph of a dark contemporary facade with a warm timber entrance.",
    position: "center",
  },
  {
    id: "04",
    image: "/images/prop-4.jpg",
    alt: "Sample photograph of a modern house with a timber screen and deep eaves.",
    position: "center",
  },
];

export const principles = [
  {
    index: "01",
    title: "Property discovery",
    body: "Homes are given room to be read. Photography, place, and the few facts that matter — held apart from a feed of identical tiles.",
  },
  {
    index: "02",
    title: "Investment intelligence",
    body: "A purchase deserves context: what to compare, what to ask, and which figures belong beside a home. Numbers appear only when they come from a real listing.",
  },
  {
    index: "03",
    title: "Personalised assistance",
    body: "IRA keeps the qualities you care about in view — light, quiet, scale, intention — and helps you think them through in plain language.",
  },
  {
    index: "04",
    title: "End-to-end buying support",
    body: "PropCapital is designed to stay with you from early interest through the practical path of a purchase, so the next step is not a separate search.",
  },
] as const;

export type IraPrompt = {
  id: string;
  label: string;
  visitor: string;
  reply: string;
};

export const iraGreeting =
  "I am IRA, PropCapital’s property assistant. Tell me the qualities you care about. This is a preview of that conversation — nothing you choose here is sent, and no listing search is running.";

export const iraPrompts: IraPrompt[] = [
  {
    id: "light",
    label: "Morning light",
    visitor: "Show me a home with quiet morning light.",
    reply: "I would keep morning light as a requirement, then set homes that share it side by side once listings are connected. I cannot search from this preview.",
  },
  {
    id: "compare",
    label: "What to compare",
    visitor: "What should I compare before an enquiry?",
    reply: "Light, orientation, the plan, and the few figures that change a decision. I would line those up beside each home. There are no live figures on this page.",
  },
  {
    id: "viewing",
    label: "A viewing",
    visitor: "How would a viewing begin?",
    reply: "With a short brief in your own words, then a note to PropCapital. Sending that note is not connected here — the enquiry further down is only a preview.",
  },
];

import { HoverEffect } from "./Card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Lack of Independent assessment",
    description:
      "The lack of independent assessment is a major barrier to obtaining unbiased evaluations and ensuring strong quality assurance.",
    link: "https://stripe.com",
  },
  {
    title: "Quality frameworks do not capture broader signals",
    description:
      "Current quality frameworks focus on auditing according to guidelines but often fail to capture vital signals essential for comprehensive operational insight.",
    link: "https://netflix.com",
  },
  {
    title:
      "In a multi-vendor environment, there is often a lack of comparative analysis",
    description:
      "In a multi-vendor environment, the lack of comparative analysis impedes effective evaluation and optimization of vendor performance and service quality.",
    link: "https://google.com",
  },
  {
    title:
      "The current model is unable to scale beyond the requirements of a quality audi",
    description:
      "The existing framework lacks scalability beyond basic quality audits, limiting its ability to effectively address broader operational and strategic needs.",
    link: "https://meta.com",
  },
  {
    title:
      "Quality is often viewed as a cost center rather than a transformation center",
    description:
      "Quality Assurance (QA) is frequently perceived as a cost center rather than a value creator because traditional frameworks focus primarily on defect detection instead of driving transformative initiatives. This narrow approach limits QA's potential to contribute strategically to business success.",
    link: "https://meta.com",
  },
];

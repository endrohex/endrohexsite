import React from "react";
import { FadeIn } from "../components/FadeIn";

interface ServiceItem {
  num: string;
  name: string;
  desc: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    num: "01",
    name: "3D Modeling",
    desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    num: "02",
    name: "Rendering",
    desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    num: "03",
    name: "Motion Design",
    desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    num: "04",
    name: "Branding",
    desc: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.",
  },
  {
    num: "05",
    name: "Web Design",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative bg-white text-darkBg rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-20 select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Services Heading */}
        <div className="mb-16 sm:mb-20 md:mb-28 text-center">
          <FadeIn delay={0} y={40}>
            <h2
              className="text-[#0C0C0C] font-black uppercase centered leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              Services
            </h2>
          </FadeIn>
        </div>

        {/* Vertical List of 5 items */}
        <div className="border-t border-[rgba(12,12,12,0.15)] flex flex-col w-full">
          {SERVICES_DATA.map((service, i) => (
            <FadeIn
              key={service.num}
              delay={i * 0.1}
              y={30}
              className="flex flex-row items-center gap-6 sm:gap-8 md:gap-14 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] w-full text-left"
            >
              {/* Left Column: Huge Number */}
              <div
                className="font-black text-[#0C0C0C] min-w-[70px] sm:min-w-[110px] md:min-w-[160px] leading-none shrink-0"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {service.num}
              </div>

              {/* Right Column: Name + Description stacked vertically */}
              <div className="flex flex-col gap-1.5 sm:gap-2.5">
                <h3
                  className="font-semibold uppercase tracking-wide text-[#0C0C0C] leading-tight"
                  style={{ fontSize: "clamp(1.1rem, 2.2vw, 2.1rem)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/65"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

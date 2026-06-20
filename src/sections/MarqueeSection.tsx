import React, { useState, useEffect, useRef } from "react";

const IMAGES = [
  { url: "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif", alt: "Space Voyage Web Design Portfolio Preview" },
  { url: "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif", alt: "CodeNest Web Development Project Showcase" },
  { url: "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif", alt: "Vex Ventures Custom Branding and Design" },
  { url: "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif", alt: "Stellar AI Responsive Interface Design" },
  { url: "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif", alt: "ASME Custom Engineering Web Application" },
  { url: "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif", alt: "Transform Data Visualization Platform" },
  { url: "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif", alt: "Vitara Interactive User Experience Design" },
  { url: "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif", alt: "Terra Earth Sciences Digital Platform" },
  { url: "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif", alt: "Skyelite Motion Graphics Showcase" },
  { url: "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif", alt: "Aethera Creative Agency Digital Branding" },
  { url: "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif", alt: "DesignPro Professional Service UX UI Design" },
  { url: "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif", alt: "Stellar AI Web Development Platform" },
  { url: "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif", alt: "XPortfolio Modern Interactive Portfolio Design" },
  { url: "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif", alt: "Orbit Web3 Application UI UX Design" },
  { url: "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif", alt: "Nexora Creative Agency Motion Graphics" },
  { url: "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif", alt: "EVR Ventures Venture Capital Branding" },
  { url: "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif", alt: "Planet Orbit 3D Animation Showcase" },
  { url: "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif", alt: "New Era Modern CGI and VFX Production" },
  { url: "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif", alt: "Wealth Financial Tech Web Design" },
  { url: "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif", alt: "Luminex Cinematic Lighting Design Project" },
  { url: "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif", alt: "Celestia Astronomy Web Platform Preview" },
];

const ROW1_IMAGES = IMAGES.slice(0, 11);
const ROW2_IMAGES = IMAGES.slice(11);

// Tripling the rows for seamless scrolling overlays
const ROW1_TRIPLED = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES];
const ROW2_TRIPLED = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const computedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(computedOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Initial run
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-hidden bg-darkBg pt-24 sm:pt-32 md:pt-40 pb-10 w-full flex flex-col gap-3"
    >
      {/* Row 1: Moves right on scroll (translateX(offset - 200)) */}
      <div className="w-full overflow-hidden whitespace-nowrap">
        <div
          className="flex gap-3 transition-transform duration-75 ease-out select-none"
          style={{
            transform: `translate3d(${offset - 200}px, 0, 0)`,
            willChange: "transform",
          }}
        >
          {ROW1_TRIPLED.map((item, i) => (
            <div
              key={`row1-${i}`}
              className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800"
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Moves left on scroll (translateX(-(offset - 200))) */}
      <div className="w-full overflow-hidden whitespace-nowrap">
        <div
          className="flex gap-3 transition-transform duration-75 ease-out select-none"
          style={{
            transform: `translate3d(${-(offset - 200)}px, 0, 0)`,
            willChange: "transform",
          }}
        >
          {ROW2_TRIPLED.map((item, i) => (
            <div
              key={`row2-${i}`}
              className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800"
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

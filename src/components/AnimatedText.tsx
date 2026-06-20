import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "", style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  let globalCharIndex = 0;

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, wordIndex) => {
        const characters = word.split("");
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
            {characters.map((char, charIndex) => {
              const index = globalCharIndex++;
              return (
                <Character
                  key={charIndex}
                  char={char}
                  index={index}
                  total={text.length}
                  progress={scrollYProgress}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, index, total, progress }) => {
  // Define active range for this specific character to fade in sequentially
  // We add a tiny buffer to avoid sudden transitions and create a smooth wave effect
  const start = index / total;
  const end = Math.min(1, start + 0.08);

  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block select-none">
      {/* Invisible placeholder to maintain layout and typography flow */}
      <span className="opacity-0 pointer-events-none">{char}</span>
      {/* Absolutely positioned animated span */}
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
};

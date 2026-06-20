import React from "react";
import { motion } from "framer-motion";

// Stable lookup of motion tags to prevent unmounting and re-triggering of animations
const STABLE_MOTION_TAGS: Record<string, any> = {
  div: motion.div,
  section: motion.section,
  nav: motion.nav,
  header: motion.header,
  footer: motion.footer,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  article: motion.article,
};

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: string;
  className?: string;
  blur?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = "div",
  className = "",
  blur = true,
}) => {
  const MotionComponent = STABLE_MOTION_TAGS[as] || motion.div;

  return (
    <MotionComponent
      initial={{
        opacity: 0,
        x,
        y,
        filter: blur ? "blur(12px)" : "none",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: blur ? "blur(0px)" : "none",
      }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};



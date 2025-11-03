"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  type Variants,
  type HTMLMotionProps,
  type UseInViewOptions,
} from "framer-motion";
import { cn } from "@/lib/utils";

// Use the same margin type that useInView expects
type MarginType = UseInViewOptions["margin"];

type BlurFadeProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  inView?: boolean;
  inViewMargin?: MarginType;
  yOffset?: number;
  blur?: string;
};

const BlurFade = ({
  children,
  className,
  delay = 0,
  inView = true,
  inViewMargin = "0px 0px -100px 0px" as MarginType,
  yOffset = 8,
  blur = "12px",
  ...props
}: BlurFadeProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const inViewResult = useInView(ref, {
    once: true,
    margin: inViewMargin,
  });

  const isInView = !inView || inViewResult;

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      variants={defaultVariants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;

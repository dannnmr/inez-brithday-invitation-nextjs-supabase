"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type AnimationStyle = "fade" | "float" | "spin" | "slideLeft" | "slideRight";

interface FloatingDecorationProps extends HTMLMotionProps<"div"> {
  src: string;
  alt: string;
  animationStyle?: AnimationStyle;
  imgClassName?: string;
  sizes?: string;
}

export function FloatingDecoration({
  src,
  alt,
  className,
  animationStyle = "fade",
  imgClassName,
  sizes = "(max-width: 768px) 100vw, 33vw",
  ...props
}: FloatingDecorationProps) {
  let targetOpacity = 1;
  if (className) {
    const opacityMatch = className.match(/opacity-(\d+)/);
    if (opacityMatch) {
      targetOpacity = parseInt(opacityMatch[1], 10) / 100;
    }
  }

  const getVariants = (): Variants => {
    switch (animationStyle) {
      case "float":
        return {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: targetOpacity, y: 0, transition: { duration: 1.5 } }
        };
      case "slideLeft":
        return {
          initial: { opacity: 0, x: -50, rotate: -20 },
          whileInView: { opacity: targetOpacity, x: 0, rotate: 0, transition: { duration: 1.5 } }
        };
      case "slideRight":
        return {
          initial: { opacity: 0, x: 50, rotate: 20 },
          whileInView: { opacity: targetOpacity, x: 0, rotate: 0, transition: { duration: 1.5, delay: 0.2 } }
        };
      case "spin":
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: targetOpacity, rotate: 360, transition: { duration: 40, repeat: Infinity, ease: "linear" } }
        };
      case "fade":
      default:
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: targetOpacity, transition: { duration: 1.5 } }
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className={cn("absolute pointer-events-none z-0", className)}
      style={{ ...props.style }}
      {...props}
    >
      <Image 
        src={src} 
        alt={alt} 
        fill 
        sizes={sizes}
        className={cn("object-contain mix-blend-multiply", imgClassName)} 
      />
    </motion.div>
  );
}

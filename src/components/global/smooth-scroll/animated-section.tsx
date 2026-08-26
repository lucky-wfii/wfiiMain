"use client";

import { useRef, type ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale";
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  animation = "fadeIn",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  const animationClasses = {
    fadeIn: isIntersecting
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-4",
    slideUp: isIntersecting
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8",
    slideLeft: isIntersecting
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-8",
    slideRight: isIntersecting
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-8",
    scale: isIntersecting ? "opacity-100 scale-100" : "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        animationClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

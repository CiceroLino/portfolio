import React, { useState, useCallback } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { AnimationType, ANIMATION_CONFIG } from "../constants/animations";

interface AnimatedElementProps {
  children: React.ReactNode;
  animation: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export function AnimatedElement({
  children,
  animation,
  delay = 0,
  className = "",
  threshold = ANIMATION_CONFIG.DEFAULT_THRESHOLD,
  rootMargin = ANIMATION_CONFIG.DEFAULT_ROOT_MARGIN,
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = useCallback(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, delay);
  }, [delay]);

  const ref = useIntersectionObserver({
    onIntersect: handleIntersect,
    threshold,
    rootMargin,
  });

  return (
    <div
      ref={ref}
      className={`${animation} ${isVisible ? "visible" : ""} ${className}`}
      style={{
        willChange: "opacity, transform",
        ...(delay ? { transitionDelay: `${delay}ms` } : {}),
        transition: `all ${ANIMATION_CONFIG.DEFAULT_DURATION} ease`,
      }}
    >
      {children}
    </div>
  );
}

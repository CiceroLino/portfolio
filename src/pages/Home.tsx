import React from "react";
import { GlitchText } from "../components/GlitchText";
import { AnimatedElement } from "../components/AnimatedElement";
import { ANIMATION_TYPES, ANIMATION_DELAYS } from "../constants/animations";

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        <AnimatedElement animation={ANIMATION_TYPES.FADE_IN}>
          <GlitchText
            text="Cícero Lino"
            className="text-4xl md:text-6xl font-bold mb-4 pixel-font"
          />
        </AnimatedElement>

        <AnimatedElement
          animation={ANIMATION_TYPES.SLIDE_IN_LEFT}
          delay={ANIMATION_DELAYS.SHORT}
        >
          <h2 className="text-xl md:text-2xl text-[var(--manjaro-text-secondary)] mb-8">
            Full Stack Developer
          </h2>
        </AnimatedElement>

        <AnimatedElement
          animation={ANIMATION_TYPES.SLIDE_IN_RIGHT}
          delay={ANIMATION_DELAYS.MEDIUM}
        >
          <p className="text-lg max-w-2xl">
            Transforming ideas into elegant, efficient, and scalable solutions.
          </p>
        </AnimatedElement>
      </div>
    </div>
  );
}

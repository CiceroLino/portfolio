import React from "react";
import { AnimatedElement } from "../components/AnimatedElement";
import { ANIMATION_TYPES, ANIMATION_DELAYS } from "../constants/animations";

export default function About() {
  return (
    <div className="container mx-auto max-w-4xl">
      <AnimatedElement animation={ANIMATION_TYPES.FADE_IN}>
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
      </AnimatedElement>

      <AnimatedElement
        animation={ANIMATION_TYPES.SLIDE_IN_LEFT}
        delay={ANIMATION_DELAYS.SHORT}
      >
        <div className="card p-6">
          <p className="mb-4">
            Hello! I'm a passionate Full Stack Developer with a love for
            creating efficient and elegant solutions.
          </p>
          <p className="mb-4">
            With expertise in modern web technologies and a keen eye for design,
            I specialize in building scalable applications that deliver
            exceptional user experiences.
          </p>
          <p>
            My approach combines technical excellence with creative
            problem-solving, ensuring that every project I undertake meets both
            functional requirements and aesthetic standards.
          </p>
        </div>
      </AnimatedElement>

      <AnimatedElement
        animation={ANIMATION_TYPES.SLIDE_IN_RIGHT}
        delay={ANIMATION_DELAYS.MEDIUM}
        className="mt-6"
      >
        <div className="card p-6">
          <h2 className="text-xl font-bold mb-4">Experience</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-bold">Senior Full Stack Developer</h3>
              <p className="text-[var(--manjaro-text-secondary)]">
                Building scalable web applications and leading development teams
              </p>
            </li>
            <li>
              <h3 className="font-bold">Open Source Contributor</h3>
              <p className="text-[var(--manjaro-text-secondary)]">
                Contributing to various open source projects and sharing
                knowledge
              </p>
            </li>
          </ul>
        </div>
      </AnimatedElement>
    </div>
  );
}

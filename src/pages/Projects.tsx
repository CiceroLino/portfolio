import React from "react";
import { AnimatedElement } from "../components/AnimatedElement";
import { ProjectCard } from "../components/ProjectCard";
import { ANIMATION_TYPES, ANIMATION_DELAYS } from "../constants/animations";
import { PROJECTS } from "../constants/projects";

export default function Projects() {
  return (
    <div className="container mx-auto max-w-4xl">
      <AnimatedElement animation={ANIMATION_TYPES.FADE_IN}>
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
      </AnimatedElement>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <AnimatedElement
            key={project.title}
            animation={
              index % 2 === 0
                ? ANIMATION_TYPES.SLIDE_IN_LEFT
                : ANIMATION_TYPES.SLIDE_IN_RIGHT
            }
            delay={ANIMATION_DELAYS.SHORT * (index + 1)}
          >
            <ProjectCard {...project} />
          </AnimatedElement>
        ))}
      </div>
    </div>
  );
}

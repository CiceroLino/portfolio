import React from "react";
import { AnimatedElement } from "../components/AnimatedElement";
import { ProgressBar } from "../components/ProgressBar";
import { ANIMATION_TYPES, ANIMATION_DELAYS } from "../constants/animations";
import { SKILLS } from "../constants/skills";

export default function Skills() {
  return (
    <div className="container mx-auto max-w-4xl">
      <AnimatedElement animation={ANIMATION_TYPES.FADE_IN}>
        <h1 className="text-3xl font-bold mb-6">Skills</h1>
      </AnimatedElement>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {SKILLS.map((category, categoryIndex) => (
          <AnimatedElement
            key={category.title}
            animation={
              categoryIndex % 2 === 0
                ? ANIMATION_TYPES.SLIDE_IN_LEFT
                : ANIMATION_TYPES.SLIDE_IN_RIGHT
            }
            delay={ANIMATION_DELAYS.SHORT * (categoryIndex + 1)}
          >
            <div className="card p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="flex items-center gap-4">
                    <skill.icon className="text-[var(--manjaro-green)] text-xl" />
                    <div className="flex-1">
                      <ProgressBar
                        label={skill.name}
                        percentage={skill.percentage}
                        className="w-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </div>
  );
}

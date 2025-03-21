export const ANIMATION_TYPES = {
  FADE_IN: "fade-in",
  SLIDE_IN_LEFT: "slide-in-left",
  SLIDE_IN_RIGHT: "slide-in-right",
} as const;

export const ANIMATION_DELAYS = {
  SHORT: 300,
  MEDIUM: 600,
  LONG: 900,
} as const;

export const ANIMATION_CONFIG = {
  DEFAULT_THRESHOLD: 0.1,
  DEFAULT_ROOT_MARGIN: "0px",
  DEFAULT_DURATION: "0.6s",
} as const;

export type AnimationType =
  (typeof ANIMATION_TYPES)[keyof typeof ANIMATION_TYPES];

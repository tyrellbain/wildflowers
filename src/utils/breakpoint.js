export const breakpoints = {
  MOBILE: "mobile",
  TABLET: "tablet",
  DESKTOP: "desktop",
}

export function getBreakpoint(width) {
  if (width <= 768) {
    return breakpoints.MOBILE
  } else if (width <= 1000) {
    return breakpoints.TABLET
  } else {
    return breakpoints.DESKTOP
  }
}

export const breakpoints = {
    MOBILE: 'mobile',
    TABLET: 'tablet',
    DESKTOP: 'desktop',
}

export function getBreakpoint(e) {
    const windowWidth = e.currentTarget.outerWidth;
    if(windowWidth <= 768 ) {
        return breakpoints.MOBILE;
    } else if(windowWidth <= 1000){
        return breakpoints.TABLET;
    } else {
        return breakpoints.DESKTOP;
    }
}
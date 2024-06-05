export async function tilt() {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    if (mediaQuery.matches) {
        $('.js-tilt').tilt({
            glare: true,
            maxGlare: .5,
            reset: false
        })
    }
    
};
tilt();
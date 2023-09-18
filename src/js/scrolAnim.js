export function scrolAnim() {
    let items = document.querySelectorAll(".anim");
    for (const el of items) {
        window.addEventListener("scroll", getAnim)
        let itemHeight = el.offsetHeight;
        let itemTop = el.getBoundingClientRect().top;
        let height = window.innerHeight
        let k = 4;

        let start = height - itemHeight / k;

        function getAnim() {
            if (pageYOffset > itemTop - start) {
                el.style.cssText = `
                    transition: 0.7s;
                    transform: translateY(0);`
            }
        }
    }
}
scrolAnim()
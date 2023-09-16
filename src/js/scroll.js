export function getColorHeader() {
    const header = document.querySelector(".header")
    window.addEventListener('scroll', getColor)
    function getColor() {
        if (window.pageYOffset === 0) {
            header.style.cssText = `background-color: transparent;`
        } else {
            header.style.cssText = `background-color: #09AFF4;`
        }
    }
}
getColorHeader()
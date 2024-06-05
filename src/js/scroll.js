export async function getColorHeader() {
    const header = document.querySelector(".header");
    let btn = document.querySelector(".header__form-btn");
    
    window.addEventListener('scroll', getColor)
    function getColor() {
        if (window.pageYOffset === 0) {
            header.style.cssText = `background-color: transparent;`
            btn.classList.remove("active");

        } else {
            header.style.cssText = `background-color: #09AFF4;`
            btn.classList.add("active");

        }
    }
}
getColorHeader()
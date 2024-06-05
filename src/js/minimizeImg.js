export async function getMinimize() {
    const exitImg = document.querySelectorAll(".img-exit")
    const img = document.querySelectorAll(".minimize")
    const popupBg = document.querySelector(".popup-bg")
    const body = document.querySelector("body")
    const container = document.querySelector(".popup-wrap")
    let count = 1;
    for (const el of img) {
        el.id = count
        el.addEventListener("click", toggleActiveClass)
        count++
    }
    for (const el of exitImg) {
        el.addEventListener("click", toggleActiveClass)
    }
    function toggleActiveClass(ev) {
        for (const el of img) {
            if (el.id === ev.target.id) {
                ev.preventDefault();
                popupBg.classList.toggle("active");
                body.style.cssText = `overflow: hidden;`
                container.innerHTML = ''
                container.insertAdjacentHTML("beforeend", `
                <img class="bigImg"
                            src="${el.src}" alt="">`)
            }
        }
        for (const el of exitImg) {
            if (el.id === ev.target.id) {
                ev.preventDefault();
                popupBg.classList.toggle("active");
                body.style.cssText = `overflow: auto;`
            }
        }
    }
}
getMinimize()
export function getAnimation() {
    let item = document.querySelectorAll(".portfolio__item");
    let wrap, btn


    for (const el of item) {
        el.addEventListener("mouseenter", addActive)
        el.addEventListener("mouseleave", removeActive)
    }

    function addActive(ev) {
        wrap = ev.target.lastElementChild;
        btn = wrap.firstElementChild;
        wrap.classList.add("active");
        const anim = setTimeout(() => { btn.classList.add("active"); clearTimeout(anim) }, 500);
    }
    function removeActive() {
        btn.classList.remove("active");
        const anim = setTimeout(() => { wrap.classList.remove("active"); clearTimeout(anim) }, 500);
    }
}
getAnimation()
export function getBlueBg() {
    const items = document.querySelectorAll(".service__content-item");
    for (const el of items) {
        el.addEventListener('mouseenter', addBg);
        el.addEventListener('mouseleave', removeBg);
    }
    function addBg(ev) {
        const bg = ev.target.firstElementChild
        bg.style.cssText = `
        background: #09aff4;
        transition: 0.5s;
        animation: go 0.5s forwards;`
    }
    function removeBg(ev) {
        const bg = ev.target.firstElementChild
        bg.style.cssText = `
        background: transparent;
        transition: 0.5s;
        animation: out 0.5s forwards;
        `
    }
}
getBlueBg()
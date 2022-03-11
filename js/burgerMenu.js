export function burgerMenu() {
    const logoMenu = document.querySelector('.btn-menu')
    logoMenu.addEventListener('click', getMenu);
    function getMenu() {
        const menu = document.querySelector('.burger-menu');
        const logo = document.querySelector('.menu-burger-logo')
        menu.classList.toggle('active')
        logo.classList.toggle('active')
        menu.addEventListener("click", e => {
            if (e.target.closest('.nav-item')) {
                menu.classList.remove('active')
                logo.classList.remove('active')
            }
        })
    }

}



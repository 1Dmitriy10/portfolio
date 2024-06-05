export async function getMobMenu() {
    let burgerMenuBTN = document.querySelector('.burger-menu-wrap');
    let exitBurgerMenuBTN = document.querySelector('.burger-menu-wrap-exit');
    let burgerMenu = document.querySelector('.burger-menu');
    let menu = document.querySelector('.nav_box-mob');
    let navLinks = document.querySelectorAll('.nav-item');
    let body = document.querySelector('body');
    let height = window.innerHeight

    burgerMenuBTN.addEventListener('click', openMenu);
    // exitBurgerMenuBTN.addEventListener('click', closeMenu);

    function openMenu() {
        //если меню открыто
        if (menu.className == "nav_box-mob active") {
            body.style.cssText = `overflow: auto`;
            menu.classList.remove('active')
            burgerMenu.classList.remove('active')
            //если меню закрыто
        } else {
            body.style.cssText = `overflow: hidden`;
            menu.classList.add('active')
            // menu.style.cssText = `height: ${height}px`;
            console.log(menu)
            burgerMenu.classList.add('active')
        };
        //отключение мобильного меню при клике по элементу меню
        navLinks.forEach(el => {
            el.addEventListener("click", () => {
                menu.classList.remove('active');
                burgerMenu.classList.remove('active');
                body.style.cssText = `overflow: auto`;
            });
        });
    }

    function closeMenu() {
        menu.classList.remove('active');
        burgerMenu.classList.remove('active');
        body.style.cssText = `overflow: auto`;
    }
}
getMobMenu()
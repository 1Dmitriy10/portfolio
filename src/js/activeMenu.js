export async function activeMenu() {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    if (mediaQuery.matches) {
//=== все элементы якорей
let about = $('#about').offset().top;
let service = $('#service').offset().top;
let sertificates = $('#sertificates').offset().top;
let portfolio = $('#portfolio').offset().top;
let reviews = $('#reviews').offset().top;
let technologies = $('#technologies').offset().top;
let footer = $('#footer').offset().top;
//все элементы меню
let items = document.querySelectorAll('.nav-li')
//нижнее подчеркивание
let line = $('.line');
let margin = window.getComputedStyle(items[0]).getPropertyValue("margin-right");
margin = margin.split('p');
margin = margin.shift();

let padding = document.querySelector(".navmenu_3"); 





//при скроле
$(window).scroll(function() {
    let plase = window.pageYOffset; //положение скрола
    let width = 0;
    let left = window.getComputedStyle(padding).getPropertyValue("padding-left");
    left = left.split('p');
    left = left.shift();

    //первый блок
    if(plase <= 950) {
        items.forEach(el=>{
            el.classList.remove('active')
        })
        items[0].classList.add('active');
        width = items[0].offsetWidth
        line.css({
            'left':`${left}px`,
            'width': `${width}px`
        });
    }
    //второй блок
    else if(plase >= service - 150) {
        items.forEach(el=>{
            el.classList.remove('active')
        })
        items[1].classList.add('active');
        let w = items[0].offsetWidth;
        width = items[1].offsetWidth;
        
        let cssLeft = +left + +margin + +w ; 
        line.css({
            'left':`${cssLeft}px`,
            'width': `${width}px`
        });

        //третий блок
        if(plase >= sertificates - 150) {
            items.forEach(el=>{
                el.classList.remove('active')
            })
            items[2].classList.add('active');
            let w = items[1].offsetWidth + items[0].offsetWidth;
            width = items[2].offsetWidth;
            let cssLeft = (left*2) + +margin + +w ; 
            line.css({
                'left':`${cssLeft}px`,
                'width': `${width}px`
            });
        }

        //четвертый блок
        if(plase >= portfolio - 150) {
            items.forEach(el=>{
                el.classList.remove('active')
            })
            items[3].classList.add('active');
            let w = items[1].offsetWidth + items[0].offsetWidth + items[2].offsetWidth;
            width = items[3].offsetWidth
            let cssLeft = (left*3) + +margin + +w ;
            line.css({
                'left':`${cssLeft}px`,
                'width': `${width}px`
            });
        }

        //пятый блок
        if(plase >= technologies - 150) {
            items.forEach(el=>{
                el.classList.remove('active')
            })
            items[4].classList.add('active');
            let w = items[1].offsetWidth + items[0].offsetWidth + items[2].offsetWidth + items[3].offsetWidth;
            width = items[4].offsetWidth
            let cssLeft = (left*4) + +margin + +w ;
            line.css({
                'left':`${cssLeft}px`,
                'width': `${width}px`
            });
        }

        // шестой блок
        if(plase >= reviews - 150) {
            items.forEach(el=>{
                el.classList.remove('active')
            })
            items[5].classList.add('active');
            let w = items[1].offsetWidth + items[0].offsetWidth + items[2].offsetWidth + items[3].offsetWidth  + items[4].offsetWidth;
            width = items[5].offsetWidth
            let cssLeft = (left*5) + +margin + +w ;
            line.css({
                'left':`${cssLeft}px`,
                'width': `${width}px`
            });
        }


        //седьмой блок
        if(plase >= footer - 450) {
            items.forEach(el=>{
                el.classList.remove('active')
            })
            items[6].classList.add('active');
            let w = items[1].offsetWidth + items[0].offsetWidth + items[2].offsetWidth + items[3].offsetWidth + items[4].offsetWidth + items[5].offsetWidth;
            width = items[6].offsetWidth
            let cssLeft = (left*6) + +margin + +w ;
            line.css({
                'left':`${cssLeft}px`,
                'width': `${width}px`
            });
        }
    }
});
    }


//===
};
activeMenu();
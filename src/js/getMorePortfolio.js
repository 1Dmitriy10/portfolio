import { getAnimation } from "./animationPortfolio.js";
export function getMore() {
    let items = [
`<div class="portfolio__item">
        <img src="img/portfolio/potfolio__site-1.png" alt="сайт - центр здоровья и красоты романов" class="portfolio__item-img">
        <div class="portfolio__description-box">
            <a target="_blank" href="https://romanov5.ru/" class="portfolio__btn"></a>
            <span class="portfolio__item-title">Романов</span>
        </div>
</div>`,
`<div class="portfolio__item">
    <img src="img/portfolio/potfolio__site-2.png" alt="Сайт поп парсингу webboster" class="portfolio__item-img">
    <div class="portfolio__description-box">
        <a target="_blank" href="https://salesdatahub.ru/" class="portfolio__btn"></a>
        <span class="portfolio__item-title">webboster парсинг</span>
    </div>
</div>`,
`<div class="portfolio__item">
<img src="img/portfolio/potfolio__site-3.png" alt="сайт по СВАПУ двигателей motorswapcastom" class="portfolio__item-img">
<div class="portfolio__description-box">
    <a target="_blank" href="https://www.motorswapcastom.ru/" class="portfolio__btn"></a>
    <span class="portfolio__item-title">motorswapcastom</span>
</div>
</div>`,
`<div class="portfolio__item">
<img src="img/portfolio/potfolio__site-4.png" alt="Сайт по интернет-маркетингу webboster" class="portfolio__item-img">
<div class="portfolio__description-box">
    <a target="_blank" href="https://1dmitriy10.github.io/devWbooster/" class="portfolio__btn"></a>
    <span class="portfolio__item-title">webboster маркетинг</span>
</div>
</div>`,
`<div class="portfolio__item">
<img src="img/portfolio/potfolio__site-5.png" alt="верстка html шаблона Investments" class="portfolio__item-img">
<div class="portfolio__description-box">
    <a target="_blank" href="https://1dmitriy10.github.io/investments/" class="portfolio__btn"></a>
    <span class="portfolio__item-title">Investments</span>
</div>
</div>`,
`<div class="portfolio__item">
<img src="img/portfolio/potfolio__site-6.png" alt="Верстка для сайта fines" class="portfolio__item-img">
<div class="portfolio__description-box">
    <a target="_blank" href="https://1dmitriy10.github.io/fines/" class="portfolio__btn"></a>
    <span class="portfolio__item-title">fines</span>
</div>
</div>`,
`<div class="portfolio__item">
<img src="img/portfolio/potfolio__site-7.png" alt="Верстка html шаблона assembly-course" class="portfolio__item-img">
<div class="portfolio__description-box">
    <a target="_blank" href="https://1dmitriy10.github.io/assembly-course/" class="portfolio__btn"></a>
    <span class="portfolio__item-title">assembly-course</span>
</div>
</div>`,
`<div class="portfolio__item">
<img src="img/portfolio/potfolio__site-8.png" alt="Верстка для сайта semitex" class="portfolio__item-img">
<div class="portfolio__description-box">
    <a target="_blank" href="https://1dmitriy10.github.io/semitex/" class="portfolio__btn"></a>
    <span class="portfolio__item-title">semitex</span>
</div>
</div>`,
`<div class="portfolio__item">
<img src="img/portfolio/potfolio__site-9.png" alt="Верстка html шаблона club-houses" class="portfolio__item-img">
<div class="portfolio__description-box">
    <a target="_blank" href="https://1dmitriy10.github.io/club-houses/" class="portfolio__btn"></a>
    <span class="portfolio__item-title">club-houses</span>
</div>
</div>`,
`<div class="portfolio__item">
<img src="img/portfolio/potfolio__site-10.png" alt="Верстка html шаблона ремонт и дизайн" class="portfolio__item-img">
<div class="portfolio__description-box">
    <a target="_blank" href="https://1dmitriy10.github.io/repair-and-design/" class="portfolio__btn"></a>
    <span class="portfolio__item-title">Ремонт и дизайн</span>
</div>
</div>`
    ];
    let box = $('.portfolio__item-box');
    let count = 0;
    
box.html('');
for (const el of items) {
    if(count == 3) {
        break;
    }
    box.append(el);
    count++
}
getAnimation();

$('.portfolio__btn-more').click(function() {
    let lang = $('.portfolio__item').length;
    lang = lang + 3;
    let count = 0;
    
    box.html('');
    for (const el of items) {
        
        if(count == lang) {
            break;
        }
        box.append(el);
        count++
        if (count >= items.length) {
            $('.portfolio__btn-more').remove();
        }
    }
    getAnimation();
})

};
getMore();
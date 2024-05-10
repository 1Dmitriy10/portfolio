export function getAos() {
const mediaQuery = window.matchMedia('(min-width: 768px)')
if (mediaQuery.matches) {
    AOS.init();
}else{
    $("[data-aos=fade-up]").css("transform", "translate3d(0, 0, 0)").css("opacity", "1");
    $(".reviews__arrow-next").css("transform", "rotate(180deg)")

}
};
getAos();


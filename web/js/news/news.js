/**
 * 순서대로 나타나는 기능
 */
// 나타날 요소들(.fade-in) 찾기.
const fadeEls = document.querySelectorAll('.visual .fade-in')
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
    // 각 요소들을 순서대로(delay) 보여지게 함!
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .4,
        opacity: 1
    })
})

/**
 * 각자의 사진에 마우스를 올리면?
 * */
function onMouseOverSang() {
    $('.sangyoon').attr('src', '../../images/news/sangyoon_r.png');
}

function onMouseOutSang() {
    $('.sangyoon').attr('src', '../../images/news/sangyoon.png');
}

function onMouseOverWoo() {
    $('.woohyoung').attr('src', '../../images/news/woohyoung_r.png');
}

function onMouseOutWoo() {
    $('.woohyoung').attr('src', '../../images/news/woohyoung.png');
}

function onMouseOverHee() {
    $('.heesoo').attr('src', '../../images/news/heesoo_r.png');
}

function onMouseOutHee() {
    $('.heesoo').attr('src', '../../images/news/heesoo.png');
}

function onMouseOverJae() {
    $('.jaebin').attr('src', '../../images/news/jaebin_r.png');
}

function onMouseOutJae() {
    $('.jaebin').attr('src', '../../images/news/jaebin.png');
}

/**
 * 각자의 사진에 마우스 클릭시?
 * */
function onMouseClickJae(){
    const jaebin = $('.jaebin');

}
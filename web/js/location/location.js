var windowHeight = document.body.scrollHeight;

// 페이지 맨위로 올리기
const toTopEl = document.querySelector('#to-top');

// 페이지 맨아래로 내리기
const toBottomEl = document.querySelector('#to-bottom');

$(window).scroll(function () {
    $('#to-top').hide();
    $('#to-bottom').hide();

    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function () {
        /**
         * $(window).scrollTop()
         * : 스크롤의 위치에 따라 변하는 값 (세로 좌표)
         * : 맨 위에서 0으로 시작하여 맨아래 도달시 스크롤 길이 max값을 가짐.
         * */

        if (Math.round($(window).scrollTop())
            === $(document).height() - $(window).height()) {
            $("#to-top").show();
        } else if ($(this).scrollTop()) {
            $("#to-top").show();
            $('#to-bottom').show();
        } else {
            $('#to-bottom').show();
        }
    }, 250))

})


// 페이지 맨위로 올리기
toTopEl.addEventListener('click', function () {
    // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
    gsap.to(window, .4, {
        scrollTo: 0
    })
})

// 페이지 맨아래로 내리기
toBottomEl.addEventListener('click', function () {
    // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
    gsap.to(window, .4, {
        scrollTo: windowHeight
    })
})


// active 화살표
const active = document.querySelector(".active");
const arrow = document.createElement('span');
arrow.classList.add('material-icons');
arrow.innerText = "navigate_next";

active.appendChild(arrow);

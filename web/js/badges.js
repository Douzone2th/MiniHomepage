function onClickBadges_g() {
	window.open('https://github.com/Douzone2thTeam6/MiniHomepage');
}

/**
 * 부유하는 요소 관리
 */
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
	// `.toFixed()`를 통해 반환된 '문자 데이터'를,
	// `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
	return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
// 부유하는(떠 다니는) 요소를 만드는 함수
function floatingObject(selector, delay, size) {
	gsap.to(
		selector, // 선택자
		random(0.5, 1.5), // 애니메이션 동작 시간
		{
			delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
			y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
			repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
			yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
			ease: Power1.easeInOut, // Easing 함수 적용.
		}
	);
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.1, 15);
floatingObject('.floating3', 1.5, 20);

//스크롤시 헤더 색깔
$(window).scroll(function () {
	clearTimeout($.data(this, 'scrollTimer'));
	$.data(
		this,
		'scrollTimer',
		setTimeout(function () {
			/**
			 * $(window).scrollTop()
			 * : 스크롤의 위치에 따라 변하는 값 (세로 좌표)
			 * : 맨 위에서 0으로 시작하여 맨아래 도달시 스크롤 길이 max값을 가짐.
			 * */

			if (
				Math.round($(window).scrollTop()) ===
				$(document).height() - $(window).height()
			) {
				$('#to-top').show();
			} else if ($(this).scrollTop()) {
				$('#to-top').show();
				$('#to-bottom').show();
			} else {
				$('#to-bottom').show();
			}
		}, 250)
	);
});

// 날씨를 해볼까?
function onClickBadges_w() {}

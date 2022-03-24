let windowOuterWidth = 0;
let windowOuterHeight = 0;

// 웹페이지 첫 로드 되면 실행

/**
 * 순서대로 나타나는 기능
 */
console.log(1123);
// 나타날 요소들(.fade-in) 찾기.
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
	// 각 요소들을 순서대로(delay) 보여지게 함!
	gsap.to(fadeEl, 1, {
		delay: (index + 1) * 0.4,
		opacity: 1,
	});
});

/**
 * 각자의 사진에 마우스를 올리면?
 * */
function onMouseOverSang() {
	$('.sangyoon').attr('src', '../../images/news/sangyoon_r2.png');
}

function onMouseOutSang() {
	$('.sangyoon').attr('src', '../../images/news/sangyoon.png');
}

function onMouseOverWoo() {
	$('.woohyoung').attr('src', '../../images/news/woohyeoung_r2.png');
}

function onMouseOutWoo() {
	$('.woohyoung').attr('src', '../../images/news/woohyeoung.png');
}

function onMouseOverHee() {
	$('.heesoo').attr('src', '../../images/news/heesoo_r2.png');
}

function onMouseOutHee() {
	$('.heesoo').attr('src', '../../images/news/heesoo.png');
}

function onMouseOverJae() {
	$('.jaebin').attr('src', '../../images/news/jaebin_r2.png');
}

function onMouseOutJae() {
	$('.jaebin').attr('src', '../../images/news/jaebin.png');
}

var arrName = ['정재빈', '김희수', '윤우형', '이상윤'];
var arrClassName = ['.jaebin', '.heesoo', '.woohyoung', '.sangyoon'];
var arrIdName = [
	'#jaebin-news',
	'#heesoo-news',
	'#woohyeoung-news',
	'#sangyoon-news',
];

/**
 * 각자의 사진에 마우스 클릭시?
 * */
function onMouseClick(index) {
	const main_js = document.getElementById('modal');
	const main_modal_js = document.getElementById('main_modal');

	const main = $('#modal');
	const mainModal = $('#main_modal');

	const jaebin = document.querySelector(arrClassName[index]);
	const heesoo = document.querySelector(arrClassName[index]);
	const woohyeoung = document.querySelector(arrClassName[index]);
	const sangyoon = document.querySelector(arrClassName[index]);

	if (!main_js.classList.contains('show')) {
		mainModal.toggle('show');
		main.toggle('show');
		if (index == 0) {
			jaebin.classList.toggle('show');
			console.log($(arrClassName[index]).css('display'));
			if ($(arrIdName[index]).css('display') == 'none') {
				$('#jaebin-news').css('display', 'block');
			} else {
				$('#jaebin-news').css('display', 'none');
			}
		} else if (index == 1) {
			heesoo.classList.toggle('show');
			if ($(arrIdName[index]).css('display') == 'none') {
				$('#heesoo-news').css('display', 'block');
			} else {
				$('#heesoo-news').css('display', 'none');
			}
		} else if (index == 2) {
			woohyeoung.classList.toggle('show');
			if ($(arrIdName[index]).css('display') == 'none') {
				$('#woohyeoung-news').css('display', 'block');
			} else {
				$('#woohyeoung-news').css('display', 'none');
			}
		} else if (index == 3) {
			sangyoon.classList.toggle('show');
			if ($(arrIdName[index]).css('display') == 'none') {
				$('#sangyoon-news').css('display', 'block');
			} else {
				$('#sangyoon-news').css('display', 'none');
			}
		}
	} else {
		$('#jaebin-news').css('display', 'none');
		$('#heesoo-news').css('display', 'none');
		$('#woohyeoung-news').css('display', 'none');
		$('#sangyoon-news').css('display', 'none');
	}
}

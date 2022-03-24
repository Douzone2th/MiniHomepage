//스크롤시 헤더 색깔
$(window).scroll(function () {
	var windowHeight = document.body.scrollHeight;
	var scrollBottom = $(document).height() - $(window).height();
	this.black();

	if (!$(window).scrollTop()) {
		this.white();
	} else if (Math.round($(window).scrollTop()) === scrollBottom) {
		this.white();
	}
});

function black() {
	$('.header').css({
		color: 'rgb(242, 243, 245)',
		'background-color': 'black',
	});

	$('.logo').css('color', 'white');
	$('.inner').css({
		color: 'black',
		'background-color': 'rgb(242, 243, 245)',
	});
}

function white() {
	$('.header').css({
		color: 'black',
		'background-color': 'rgb(242, 243, 245)',
	});
	$('.logo').css('color', 'black');
}

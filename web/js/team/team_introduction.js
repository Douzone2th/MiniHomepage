const show = document.querySelectorAll('.show-one')

function biograph(e) {
	var a = e.childNodes[3].childNodes[1].childNodes[0].data;
	if (e.className == 'about__slot') {

		e.className = 'about__slot bio';

		if (a === "Jung JaeBin") {
			$(show[0]).show();
		} else if (a === "Lee Sangyoon") {
			$(show[1]).show();
		} else if (a === "Yoon Woohyeoung") {
			$(show[2]).show();
		} else if (a === "Kim Heesoo") {
			$(show[3]).show();
		}
	} else {

		e.className = 'about__slot';
		if (a === "Jung JaeBin") {
			$(show[0]).hide();
		} else if (a === "Lee Sangyoon") {
			$(show[1]).hide();
		} else if (a === "Yoon Woohyeoung") {
			$(show[2]).hide();
		} else if (a === "Kim Heesoo") {
			$(show[3]).hide();
		}
	}

}

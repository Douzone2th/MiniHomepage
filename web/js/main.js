// main.js
// main.js
$(document).ready(function(){
	if($("#infolist01").attr('class','on')){
		$("#info01").show();
		$("#info02").hide();
		$("#info03").hide();
	}
})


function contentmenuClick(id){
		
	var id;
	let info_id = "#infolist" + id.charAt(id.length-1);
	$("#info0"+id.charAt(id.length-1)).toggle();
	$(".min_cont").not("#info0"+id.charAt(id.length-1)).hide();
	
	if(id === 'infolist01'){
		$("#infolist01").attr('class','on');
		$("#infolist02").attr('class','');
		$("#infolist03").attr('class','');

		
	}else if(id === 'infolist02'){
		$("#infolist01").attr('class','');
		$("#infolist02").attr('class','on');
		$("#infolist03").attr('class','');

	}else if(id === 'infolist03'){
		$("#infolist01").attr('class','');
		$("#infolist02").attr('class','');
		$("#infolist03").attr('class','on');

	}else if(id === 'infolist04'){
		$("#infolist01").attr('class','');
		$("#infolist02").attr('class','');
		$("#infolist03").attr('class','');

	}
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// main.js
// main.js
$(document).ready(function(){
	if($("#infolist01").attr('class','on')){
		$("#info01").show();
		$("#info02").hide();
		$("#info03").hide();
		$("#info04").hide();
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
		$("#infolist04").attr('class','');

		
	}else if(id === 'infolist02'){
		$("#infolist01").attr('class','');
		$("#infolist02").attr('class','on');
		$("#infolist03").attr('class','');
		$("#infolist04").attr('class','');

	}else if(id === 'infolist03'){
		$("#infolist01").attr('class','');
		$("#infolist02").attr('class','');
		$("#infolist03").attr('class','on');
		$("#infolist04").attr('class','');

		$("#id").hide();
	}else if(id === 'infolist04'){
		$("#infolist01").attr('class','');
		$("#infolist02").attr('class','');
		$("#infolist03").attr('class','');
		$("#infolist04").attr('class','on');

	}
}
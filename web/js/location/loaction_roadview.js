//로드뷰 보기
var roadviewContainer = document.getElementById('roadview'); //로드뷰를 표시할 div
var roadview = new kakao.maps.Roadview(roadviewContainer); //로드뷰 객체
var roadviewClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

//로드뷰 보기
function findRoadView() {
	var position = new kakao.maps.LatLng(location_x, location_y);
	if ($('#map').css('display') == 'block') {
		$('#map').css('display', 'none');
		$('#roadview').css('display', 'block');
		$('.btn-on').text('로드뷰 끄기');
		// 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
		roadviewClient.getNearestPanoId(position, 50, function (panoId) {
			roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
		});
	} else {
		$('#map').css('display', 'block');
		$('#roadview').css('display', 'none');
		$('.btn-on').text('로드뷰 켜기');
	}
}

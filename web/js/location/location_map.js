var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var location_x = 37.49510523701345;
var location_y = 127.12241381977768;

var options = {
	//지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(location_x, location_y), //지도의 중심좌표.
	level: 3, //지도의 레벨(확대, 축소 정도)
};
var location_map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

//마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
var positions = [
	{
		// content: '한국 소프트웨어 협회',
		latlng: new kakao.maps.LatLng(location_x, location_y),
	},
];
var content = '한국 소프트웨어 협회';
// kosa 내용
var text =
	'소프트웨어산업의 건전한 발전과' +
	'<br>' +
	' 소프트웨어 및 시스템의 이용촉진';

// 마커 이미지의 이미지 주소입니다
var imageMarker1 = '../../images/marker1_3.png';

// 마커 이미지의 이미지 크기 입니다
var imageMarkerSize = new kakao.maps.Size(70, 100);

// 마커 이미지를 생성합니다
var markerImage1 = new kakao.maps.MarkerImage(imageMarker1, imageMarkerSize);

// 마커를 생성합니다
var location_marker = new kakao.maps.Marker({
	map: location_map, // 마커를 표시할 지도
	position: positions[0].latlng, // 마커의 위치
	title: content, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
	image: markerImage1, // 마커 이미지
	clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
});
var info =
	'    <div class="info-window">' +
	'               <div class="info-window-title">' +
	content +
	'               </div>' +
	'               <div class="info-window-sub-title">' +
	'                       <div>' +
	'                            <div>' +
	text +
	'</div>' +
	'                       </div>' +
	'                       <div class="info-window-title-link"><a class="link" href="https://www.sw.or.kr/site/sw/main.do" target="_blank" >' +
	'                               홈페이지<span class="material-icons">' +
	'                                   home' +
	'                               </span></a>' +
	'                       </div>' +
	'                </div>' +
	'               </div>';

var iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 마커에 표시할 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
	position: positions[0].latlng,
	content: info,
	removable: iwRemoveable,
});

kakao.maps.event.addListener(
	location_marker,
	'click',
	makeClickListener(location_map, location_marker, infowindow)
);

function makeClickListener(map, marker, infowindow) {
	return function () {
		infowindow.open(map, marker);
		clickMarker = true;
		console.log(clickMarker);
	};
}

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

// 다음 주소 검색으로 주소를 검색하여 좌표로 변환한후 해당 맵으로 가고 마커를 찍음
function findHome() {
	new daum.Postcode({
		oncomplete: function (data) {
			address = data.address;

			geocoder.addressSearch(data.address, function (results, status) {
				// 정상적으로 검색이 완료됐으면
				if (status === daum.maps.services.Status.OK) {
					positions.content = address;
					var result = results[0]; //첫번째 결과의 값을 활용 // 해당 주소에 대한 좌표를 받아서
					var coords = new daum.maps.LatLng(result.y, result.x); // 지도를 보여준다.
					location_x = result.y;
					location_y = result.x;
					container.style.display = 'block';
					location_map.relayout(); // 지도 중심을 변경한다.
					location_map.setCenter(coords); // 마커를 결과값으로 받은 위치로 옮긴다.
					location_marker.setImage(markerImage1);
					location_marker.setPosition(coords);
				}
			});
		},
	}).open();
}

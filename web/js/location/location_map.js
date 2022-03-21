var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(37.49510523701345, 127.12241381977768), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};
var location_map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


// 마커 이미지의 이미지 주소입니다
var imageMarker1 = "../../images/marker1_3.png";

// 마커 이미지의 이미지 크기 입니다
var imageMarkerSize = new kakao.maps.Size(70, 100);

// 마커 이미지를 생성합니다
var markerImage1 = new kakao.maps.MarkerImage(imageMarker1, imageMarkerSize);

//마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
var positions = [
    {
        content: '한국 소프트웨어 협회',
        latlng: new kakao.maps.LatLng(37.49510523701345, 127.12241381977768),
        text: '소프트웨어산업의 건전한 발전과' + '<br>' + ' 소프트웨어 및 시스템의 이용촉진'
    }];

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    map: location_map, // 마커를 표시할 지도
    position: positions[0].latlng, // 마커의 위치
    title: positions[0].content, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    image: markerImage1, // 마커 이미지
    clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
});
var info = '    <div class="info-window">' +
    '               <div class="info-window-title">' + positions[0].content +
    '               </div>' +

    '               <div class="info-window-sub-title">' +
    '                       <div>' +
    '                            <div>' + positions[0].text + '</div>' +
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
    content: info,
    removable: iwRemoveable
});

// 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
// 이벤트 리스너로는 클로저를 만들어 등록합니다
// for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다

kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(location_map, marker));
kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
kakao.maps.event.addListener(marker, 'click', makeClickListener(location_map, marker, infowindow));


// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
function makeOverListener(map, marker,) {
    return function () {
        imageMarkerSize = new kakao.maps.Size(100, 200);
        var markerImage1 = new kakao.maps.MarkerImage(imageMarker1, imageMarkerSize);
        marker.image = markerImage1;
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
    return function () {
        infowindow.close();
    };
}

function makeClickListener(map, marker, infowindow) {
    return function () {
        window.infowindow.open(map, marker);
    };
}
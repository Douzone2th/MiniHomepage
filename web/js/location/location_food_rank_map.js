var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.49510523701345, 127.12241381977768), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
// 맛집 좌표, 맛집 제목
var positionsArr = [
    {
        content: '함경도 찹쌀순대',
        latlng: new kakao.maps.LatLng(37.494738316939724, 127.12132721009284)
    },
    {
        content: '오향가',
        latlng: new kakao.maps.LatLng(37.49683174957435, 127.12139126913031)
    },
    {
        content: '아끼야',
        latlng: new kakao.maps.LatLng(37.49640878087381, 127.12093495945359)
    },
    {
        content: '만당 불 쭈꾸미',
        latlng: new kakao.maps.LatLng(37.4957247055887, 127.1204824564849)
    },
    {
        content: '뿅의전설',
        latlng: new kakao.maps.LatLng(37.49499230002788, 127.12389842515762)
    }
];
// 맛집 제목
var title = ['함경도 찹쌀순대', '오향가', '아끼야', '만당 불 쭈꾸미', '뿅의전설']
// 맛집 내용
var text = ['경찰병원 근처 현지인 맛집으로 유명한 순대국밥.', '3대족발보다 맛있는 경찰병원 오향족발.', '오늘의 메뉴도 있는 등심,안심 돈까스 전문 맛집.'
    , '석쇠쭈꾸미의 정석 쭈꾸미 맛집.', '칠리새우와 짜장면이 만나는 맛있는 중국집 뿅의전설.']


for (var i = 0; i < positionsArr.length; i++) {

    // 마커 이미지의 이미지 주소입니다
    var imageMarker1 = "../../images/marker2_2.png";

    // 마커 이미지의 이미지 크기 입니다
    var imageMarkerSize = new kakao.maps.Size(50, 85);

    // 마커 이미지를 생성합니다
    var markerImage1 = new kakao.maps.MarkerImage(imageMarker1, imageMarkerSize);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positionsArr[i].latlng, // 마커의 위치
        title: title[i],// 맛집 제목
        image: markerImage1, //마커 이미지
        clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    });

    var info = '    <div class="info-window">' +
        '               <div class="info-window-title">' + positionsArr[i].content +
        '               </div>' +

        '               <div class="info-window-sub-title">' +
        '                       <div>' +
        '                            <div>' + text[i] + '</div>' +
        '                       </div>' +
        // '                            <button id="btn' + i + '" type="button" class="btn-outline-primary btn-on">로드뷰 켜기</button>' +
        '                       </div>' +
        '                </div>' +
        '               </div>';
    var iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 마커에 표시할 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content: info,
        removable: iwRemoveable
    });

    function makeClickListener(map, marker, infowindow) {
        return function () {
            infowindow.open(map, marker);
        };
    }

    kakao.maps.event.addListener(marker, 'click', makeClickListener(map, marker, infowindow));
}


function findMap() {
    $('#map').css('display', 'block');
    $('#roadview').css('display', 'none');
}


// // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
// function makeOverListener(location_map, marker, infowindow) {
//     return function () {
//         infowindow.open(location_map, marker);
//     };
// }
//
// // 인포윈도우를 닫는 클로저를 만드는 함수입니다
// function makeOutListener(infowindow) {
//     return function () {
//         infowindow.close();
//     };
// }


/* 아래와 같이도 할 수 있습니다 */
/*
for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        location_map: location_map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });

    // 마커에 이벤트를 등록하는 함수 만들고 즉시 호출하여 클로저를 만듭니다
    // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    (function(marker, infowindow) {
        // 마커에 mouseover 이벤트를 등록하고 마우스 오버 시 인포윈도우를 표시합니다
        kakao.maps.event.addListener(marker, 'mouseover', function() {
            infowindow.open(location_map, marker);
        });

        // 마커에 mouseout 이벤트를 등록하고 마우스 아웃 시 인포윈도우를 닫습니다
        kakao.maps.event.addListener(marker, 'mouseout', function() {
            infowindow.close();
        });
    })(marker, infowindow);
}
*/
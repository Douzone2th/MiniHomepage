var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.49510523701345, 127.12241381977768), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
var positions = [
    {
        content: '함경도 찹쌀순대',
        latlng: new kakao.maps.LatLng(37.494738316939724, 127.12132721009284)
    },
    {
        content: '<div>생태연못</div>',
        latlng: new kakao.maps.LatLng(33.450936, 126.569477)
    },
    {
        content: '<div>텃밭</div>',
        latlng: new kakao.maps.LatLng(33.450879, 126.569940)
    },
    {
        content: '<div>근린공원</div>',
        latlng: new kakao.maps.LatLng(33.451393, 126.570738)
    }
];

for (var i = 0; i < positions.length; i++) {

    // 마커 이미지의 이미지 주소입니다
    var imageMarker1 = "../../images/marker2_2.png";

    // 마커 이미지의 이미지 크기 입니다
    var imageMarkerSize = new kakao.maps.Size(50, 85);

    // 마커 이미지를 생성합니다
    var markerImage1 = new kakao.maps.MarkerImage(imageMarker1, imageMarkerSize);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커의 위치
        title: positions[i].content,
        image: markerImage1,
        clickable: true
    });

    var iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 마커에 표시할 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({

        content: '    <div class="info-window">' +
            '        <div class="title" style="color: black">' +
            '제목' +
            '        </div>' +
            '        <div style="font-size: 15px">' +
            '            <div>' +
            '                <div>' + '아아아아아' + '</div>' +
            '                <div><a href="https://naver.com" starget="_self" class="link">홈페이지</a></div>' +
            '            </div>' +
            '        </div>' +
            '    </div>'
        ,
        removable: iwRemoveable
    });
    kakao.maps.event.addListener(marker, 'click', makeClickListener(map, marker, infowindow));

}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
function makeOverListener(map, marker, infowindow) {
    return function () {
        infowindow.open(map, marker);
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

/* 아래와 같이도 할 수 있습니다 */
/*
for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
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
            infowindow.open(map, marker);
        });

        // 마커에 mouseout 이벤트를 등록하고 마우스 아웃 시 인포윈도우를 닫습니다
        kakao.maps.event.addListener(marker, 'mouseout', function() {
            infowindow.close();
        });
    })(marker, infowindow);
}
*/
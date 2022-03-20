//food-modal
var title = ['함경도 찹쌀순대', '오향가', '아끼야', '만당 불 쭈꾸미', '뿅의전설'];
var content = ['경찰병원 근처 현지인 맛집으로 유명한 순대국밥.', '3대족발보다 맛있는 경찰병원 오향족발.', '오늘의 메뉴도 있는 등심,안심 돈까스 전문 맛집.'
    , '석쇠쭈꾸미의 정석 쭈꾸미 맛집.', '칠리새우와 짜장면이 만나는 맛있는 중국집 뿅의전설.']

function onModal(index) {
    document.getElementById('exampleModalLabel').innerText = title[index];
    let a = document.querySelectorAll('.d-block');
    console.log(a);

    for (let i = 0; i < a.length; i++) {
        let src = "../../images/food/image" + (index + 1) + "_" + (i + 1) + ".jpg";
        console.log(src)
        a[i].setAttribute('src', src);
    }
}
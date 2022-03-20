// import imageUpdate from "./location_food_modal";

let btnEl_1 = document.querySelector('#button_1')
let btnEl_2 = document.querySelector('#button_2')

// tab
function onClickSidebar_1() {
    document.getElementById('map').style.display = 'block';
    document.getElementById('food-photo').style.display = 'none';

    btnEl_1.classList.add('this');
    btnEl_2.classList.remove('this');

    document.querySelector("#kosa-title").innerHTML = '맛집장소';
    // console.log(document.querySelector("#kosa-title").attributes);
}

function onClickSidebar_2() {
    document.getElementById('map').style.display = 'none';
    document.getElementById('food-photo').style.display = 'block';
    btnEl_2.classList.add('this');
    btnEl_1.classList.remove('this');

    document.querySelector("#kosa-title").innerHTML = '음식사진';
}

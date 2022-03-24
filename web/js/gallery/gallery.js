const body = document.querySelector("body");
const mainBody = document.querySelector(".mainModal");
//모달창 오픈
function modalOpen(val) {
  $(mainBody).show();
  $(mainBody).children(".mainModalBody").attr("id", val);
  location.href = "#modal_top";
}
//모달창 종료
function modalClose() {
  $(mainBody).hide();
  body.style.overflow = "auto";
}
const subBody = document.querySelector(".subModal");
function subOpen(id) {
  $(subBody).show();
  let val = $(".mainModalBody").attr("id");
  $(subBody).html(
    '<div class="subModalBody"><span class="close_modal" onclick="subClose()">&times;</span><img src="/images/' +
      id +
      "/" +
      val +
      '.png"/><div class="subModalImg"></div>'
  );
}
function subClose() {
  $(subBody).hide();
  body.style.overflow = "auto";
}

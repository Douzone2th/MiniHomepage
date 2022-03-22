const $news_btn = document.getElementById("news_woohyeoung");
const $schedule_btn = document.getElementById("schedule_woohyeoung");
const $news_body = document.getElementsByClassName("news");
const $schedule_body = document.getElementsByClassName("schedule");

$($news_btn).click((e) => {
  $($news_body).show();
});
$($schedule_btn).click((e) => {
  $($news_body).hide();
  $($schedule_body).show();
});

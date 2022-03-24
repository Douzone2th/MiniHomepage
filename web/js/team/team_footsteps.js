String.prototype.format = function () {
  var args = arguments;
  return this.replace(/\{(\d+)\}/g, function (m, n) {
    return args[n];
  });
};

$(document).ready(function () {
  $('#timeline0>li').hide()
  $('#timeline1>li').hide()
  $('#timeline2>li').hide()
  $('#timeline3>li').hide()
})

$(document).on("click", "#btn", function () {
  var idx = $(this).index();
  var lastYear;
  // $('#timeline' + idx).show();
  jQuery("#timeline{0}>li".format(idx)).css("margin-bottom", 0).each(function () {
    var year = jQuery("input", this).val();
    if (lastYear) {
      var px = (year - lastYear) * 5;
      jQuery(this).css("margin-top", px);
    }
    lastYear = year;
  });
  $("#timeline{0}>li".format(idx)).toggle('slow');
});

$(function () {
  var owl = $(".owl-carousel"),
    owlOptions = {
      loop: false,
      margin: 30,
      smartSpeed: 700,
      nav: false,
      items: 1,
    };

  if ($(window).width() < 768) {
    var owlActive = owl.owlCarousel(owlOptions);
  } else {
    owl.addClass("off");
  }

  $(window).resize(function () {
    if ($(window).width() < 768) {
      if ($(".owl-carousel").hasClass("off")) {
        var owlActive = owl.owlCarousel(owlOptions);
        owl.removeClass("off");
      }
    } else {
      if (!$(".owl-carousel").hasClass("off")) {
        owl.addClass("off").trigger("destroy.owl.carousel");
        owl.find(".owl-stage-outer").children(":eq(0)").unwrap();
      }
    }
  });
});

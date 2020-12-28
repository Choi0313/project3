$(function(){
  /* gnb */
  $("nav > ul > li").hover(
    function(){
      $(this).parent("ul").stop().animate({height:220}, 400);
      $(this).parents("nav").next(".shadow_box").stop().animate({height:150}, 400);
    },
    function(){
      $(this).parent("ul").stop().animate({height:80}, 400);
      $(this).parents("nav").next(".shadow_box").stop().animate({height:0}, 400);
    }
  );
  $("nav > ul > li").focusin(function(){
		$(this).parent("ul").stop().animate({height:220}, 400);
		$(this).parents("nav").next(".shadow_box").stop().animate({height:150}, 400);
	});
	$("nav > ul > li").focusout(function(){
		$(this).parent("ul").stop().animate({height:80}, 400);
		$(this).parents("nav").next(".shadow_box").stop().animate({height:0}, 400);
	});

  /* slick slide */
  $(".fade").slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  });

  /* family site */
  var sw = true;

  $(".fsite .link").click(function(){
    sw =! sw;

    if(sw == true) {
      $(".fsite ul").hide(300);
    } else {
      $(".fsite ul").show(300);
    }
  });
});
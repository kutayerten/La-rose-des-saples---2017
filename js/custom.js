$(document).ready(function () {

$('.productList').bxSlider({
  /*infiniteLoop: false,
  hideControlOnEnd: true*/
  mode: 'fade',
  auto: true,
  autoControls: true,
  pause: 3000
});

$('#subscriber').parallax("20%", 0.3);
$('#aboutUs').parallax("20%", 0.3);

/*$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
        $(".subMenuAll").css({"position":"fixed"});

        } else {
          $(".subMenuAll").css({"position":"relative"});
        }
        });*/


$(".downİco").click(function() {
    $('html, body').animate({
        scrollTop: $(".productShowAll").offset().top+= 70
    }, 1000);
});
$(".footerUpArrow").click(function() {
    $('html, body').animate({
        scrollTop: $("header").offset().top
        
    }, 1000);
});


var menuWidth = $("header").width();
if(menuWidth < 1025){

	$(".subMenuMbl").click(function(){
	$(this).children("ul").slideToggle();
	});
	/*$("ul").click(function(p){
		p.stopPropagation();
	});*/

	$(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
        $(".menuOpenMbl").css({"position":"fixed"});

        } else {
          $(".menuOpenMbl").css({"position":"relative"});
        }
        });

	$('#subscriber').parallax("50%", 0.0);
	$('#aboutUs').parallax("50%", 0.0);
}


$(".productOpen ul li a").hover(function(){
       $(this).find("img").stop().animate({'opacity':'toggle'}, 10);
        
        }, function(){
       $(this).find("img").stop().animate({'opacity':'toggle'}, 10);
    });

$(".subProductOpen ul li a").hover(function(){
       $(this).find("img").stop().animate({'opacity':'toggle'}, 10);
        
        }, function(){
       $(this).find("img").stop().animate({'opacity':'toggle'}, 10);
    });


$(".productOpen ul li a").hover(function(){
        $(".shopBackground").stop().animate({'opacity':'toggle'}, 500);
        }, function(){
        $(".shopBackground").stop().animate({'opacity':'toggle'}, 500);
    });

$(".subProductOpen ul li a").hover(function(){
        $(".SubShopBackground").stop().animate({'opacity':'toggle'}, 500);
        }, function(){
        $(".SubShopBackground").stop().animate({'opacity':'toggle'}, 500);
    });


});



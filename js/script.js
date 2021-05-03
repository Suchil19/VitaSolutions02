// Preloader
$(window).on('load', function() {
	$('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
  });


(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
	
	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();

	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
		}
	});
	
})(jQuery);



/*HEROE*/
// HERO SLIDER
$(document).ready(function(){
var menu = [];
jQuery('.swiper-slide').each( function(index){
	menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
});
var interleaveOffset = 0.5;
var swiperOptions = {
	loop: true,
	speed: 1000,
	parallax: true,
	autoplay: {
		delay: 6500,
		disableOnInteraction: false,
	},
	watchSlidesProgress: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	on: {
		progress: function() {
			var swiper = this;
			for (var i = 0; i < swiper.slides.length; i++) {
				var slideProgress = swiper.slides[i].progress;
				var innerOffset = swiper.width * interleaveOffset;
				var innerTranslate = slideProgress * innerOffset;
				swiper.slides[i].querySelector(".slide-inner").style.transform =
				"translate3d(" + innerTranslate + "px, 0, 0)";
			}      
		},

		touchStart: function() {
		  var swiper = this;
		  for (var i = 0; i < swiper.slides.length; i++) {
			swiper.slides[i].style.transition = "";
		  }
		},

		setTransition: function(speed) {
			var swiper = this;
			for (var i = 0; i < swiper.slides.length; i++) {
				swiper.slides[i].style.transition = speed + "ms";
				swiper.slides[i].querySelector(".slide-inner").style.transition =
				speed + "ms";
			}
		}
	}
};

var swiper = new Swiper(".swiper-container", swiperOptions);

// DATA BACKGROUND IMAGE
var sliderBgSetting = $(".slide-bg-image");
sliderBgSetting.each(function(indx){
	if ($(this).attr("data-background")){
		$(this).css("background-image", "url(" + $(this).data("background") + ")");
	}
});

});



// PRECIOS

function check() {
	var checkBox = document.getElementById("checbox");
	var text1 = document.getElementsByClassName("text1");
	var text2 = document.getElementsByClassName("text2");
  
	for (var i = 0; i < text1.length; i++) {
	  if (checkBox.checked == true) {
		text1[i].style.display = "block";
		text2[i].style.display = "none";
	  } else if (checkBox.checked == false) {
		text1[i].style.display = "none";
		text2[i].style.display = "block";
	  }
	}
  }
  check();
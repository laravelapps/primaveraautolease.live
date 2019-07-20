// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

jQuery(document).ready(function($) {
	
	$('li.email').click(function() {
		disableScroll();
		$('.email_fade').fadeIn(500);	
		$('.overs2').fadeIn(500);
	})
	
		$('.overs2').click(function() {
			enableScroll();
		$('.email_fade').fadeOut(500);	
		$('.overs2').fadeOut(500);
	})
	
   /* function setEqualHeight(columns)
{
var tallestcolumn = 0;
columns.each(
function()
{
currentHeight = $(this).height();
if(currentHeight > tallestcolumn)
{
tallestcolumn = currentHeight;
}
}
);
columns.height(tallestcolumn);
}
$(document).ready(function() {
setEqualHeight($("body .listing-sidebar"));
});


    function setEqualHeight(columns)
{
var tallestcolumn = 0;
columns.each(
function()
{
currentHeight = $(this).height();
if(currentHeight > tallestcolumn)
{
tallestcolumn = currentHeight;
}
}
);
columns.height(tallestcolumn);
}
$(document).ready(function() {
setEqualHeight($("body .wpb_wrapper .car_listings.boxed.boxed_left"));
}); */
	
	$('body .content-nav ul li a.fancybox_div ').click(function() {
		$('.former_into').fadeIn(500);
		$('.form_fader').fadeIn(500);
		});
		
		$('.closed').click(function() {
			$('.form_fader').fadeOut(500);	
			$('.former_into').fadeOut(500);
		});
		
		var counter = $('body .pagination>li').length;
	if(counter < 4) {
		$('body .pagination').hide();	
	}
	
		if($('body').hasClass('parent-pageid-179')) {
		$('.main-menu .navbar-collapse > ul > li.menu-item-1121').addClass('current_page_item');
	}	
	
	(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(500).fadeOut(500);
		}
	}
	
	
	//Update Header Style + Scroll to Top
	/*function headerStyle() {
		if($('.main-header').length){
			var topHeader = $('.header-top').innerHeight();
			var windowpos = $(window).scrollTop();
			if (windowpos >= topHeader) {
				$('.main-header').addClass('fixed-top-header');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.main-header').removeClass('fixed-top-header');
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}*/
	
	$(function() {
     var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
		 $(".main-menu .navbar-collapse > ul > li > a").each(function(){
			  if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
			  $(this).addClass("visitactive");
		 })
	});
	
	
	
	
	
	function headerStyle() {
		if($('body .banner').length){
			var topHeader = $('header').innerHeight();
			var windowpos = $(window).scrollTop();
			if (windowpos >= topHeader) {
				$('body .banner').addClass('fixed-top-header');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('body .banner').removeClass('fixed-top-header');
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}
	

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown .submenu').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('.submenu').slideToggle(500);
		});
	}
	
	

	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('.tabs-box .tab-btn').removeClass('active-btn');
			$(this).addClass('active-btn');
			$('.tabs-box .tab').fadeOut(0);
			$('.tabs-box .tab').removeClass('active-tab');
			$(target).fadeIn(300);
			$(target).addClass('active-tab');
			var windowWidth = $(window).width();
			if (windowWidth <= 700) {
				$('html, body').animate({
				   scrollTop: $('.tabs-box .tabs-content').offset().top
				 }, 1000);
			}
		});
		
	}
	
	
	if($('.car_listings > div.inboxes').length<12){$('.pagination').hide();}
	
	
	//Four Column Slider
	if ($('.column-carousel.four-column').length) {
		$('.column-carousel.four-column').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			autoplayHoverPause:true,
			autoplay:false,
			smartSpeed: 1000,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2,
					nav:true
				},
				800:{
					items:3,
					nav:true
				},
				1024:{
					items:3,
					nav:true
				},
				1100:{
					items:3
				}
			}
		});    		
	}
	
	
	//Three Column Slider
	if ($('.column-carousel.three-column').length) {
		$('.column-carousel.three-column').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			autoplayHoverPause:false,
			autoplay: 5000,
			smartSpeed: 700,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1100:{
					items:1
				}
			}
		});    		
	}
	
	//Two Column Slider
	if ($('.column-carousel.two-column').length) {
		$('.column-carousel.two-column').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			autoplayHoverPause:false,
			autoplay: 5000,
			smartSpeed: 1000,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1100:{
					items:2
				}
			}
		});    		
	}
	
	
	
	//Sponsors Slider
	if ($('.sponsors .slider').length) {
		$('.sponsors .slider').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			autoplay: 5000,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1100:{
					items:5
				}
			}
		});    		
	}
	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox();
	}
	
	
	//Vertical Gallery Slider
	if ($('.vertical-gallery').length) {
		var slider = new MasterSlider();
		slider.setup('vertical-gallery' , {
			autoplay:true,
			loop:true,
			width:870,
			height:530,
			space:5,
			view:'basic',
			dir:'h'
		});
		slider.control('arrows');	
		slider.control('scrollbar' , {dir:'h'});	
		slider.control('circletimer' , {color:"#FFFFFF" , stroke:9});
		slider.control('thumblist' , {autohide:false ,dir:'v'});  		
	}
	
	
	//Filters Section / Mixitup
	if($('.filter-list').length){
		$('.filter-list').mixitup({});
	}
	
	
	//Contact Form Validation
	
	/*if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}*/
	
	
	// Google Map Settings
	if($('#map-location').length){
		var map;
		 map = new GMaps({
			el: '#map-location',
			zoom: 14,
			scrollwheel:false,
			//Set Latitude and Longitude Here
			lat: -37.817085,
			lng: 144.955631
		  });
		  
		  //Add map Marker
		  map.addMarker({
			lat: -37.817085,
			lng: 144.955631,
			infoWindow: {
			  content: '<p style="text-align:center;"><strong>Envato</strong><br>Melbourne VIC 3000, Australia</p>'
			}
		 
		});
	}
	
	
	// Scroll to top
	if($('.scroll-to-top').length){
		$(".scroll-to-top").on('click', function() {
		   // animate
		   $('html, body').animate({
			   scrollTop: $('html, body').offset().top
			 }, 1000);
	
		});
	}
	
	
	

/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
	jQuery(document).on('ready', function($) {
		headerStyle();
	});

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
			$('#nav-icon2').click(function() {
			disableScroll()
			$('.mobiles').addClass('topped');
		});
		
		$('.closeit').click(function() {
			enableScroll()
			$('.mobiles').removeClass('topped');
		})
		
		
		
		if (document.body.clientWidth < '993') {
			$('.mobiles ul').navgoco({
				accordion:true	
			})    
    	}
	});
	

	// Filter
	$(function(){

		$('.js-auto-filter').on('click', function(){
			var listing_sort_action = [];

			$(".filter_blocks").find('.listing_sort select').each(function(){
				listing_sort_action[$(this).data('sort')] = $(this).find('[selected="selected"]').data('key');
			});

			console.log(listing_sort_action);

			var next_url = '/car-lease-deals';

			if (listing_sort_action['make'] != undefined)
			{
				next_url += '/' + listing_sort_action['make'] + '-lease-specials';
			}
			if (listing_sort_action['vehicle-type'] != undefined)
			{
				var vt_urls = {
					'convertible': 'convertible-lease-specials',
					'sedan': 'sedan-lease-specials',
					'wagon': 'wagon-lease-specials',
					'crossover': 'crossover-lease-specials',
					'coupe': 'coupe-lease-specials',
					'minivan': 'minivan-lease-specials',
					'sport': 'sport-cars-lease-specials',
					'hatchback': 'hatchback-cars-lease-specials',
					'suv': 'suv-lease-specials',
					'truck': 'truck-lease-specials',
					'hybrid': 'hybrid-cars-lease-specials',
					'luxury': 'luxury-cars-lease-specials'
				};

				if (listing_sort_action['make'] == undefined)
					next_url += '/' + vt_urls[listing_sort_action['vehicle-type']];
				else
					next_url += '/' + listing_sort_action['vehicle-type'];
			}
			if (listing_sort_action['model'] != undefined)
			{
				next_url += '/' + listing_sort_action['model'];
			}
			if (listing_sort_action['year'] != undefined)
			{
				next_url += '/' + listing_sort_action['year'];
			}

			$('.listing_sort').attr('action', next_url).submit();

			console.log(next_url);

			//[make: "acura", model: "2-series", vehicle-type: "convertible", year: 2017]
			return false;

		});
	});
	// Filter End
	

})(window.jQuery);
});
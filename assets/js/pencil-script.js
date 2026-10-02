jQuery(document).ready(function ($) {
 "use strict";

// 
//----------------------------------
 /*----------------------------
 jQuery MeanMenu
------------------------------ */
jQuery('nav#dropdown').meanmenu();	

//wow js active
//=================
 new WOW().init();

//google map activation 
//===========================
	if ($('#gmap').length > 0) {
		new GMaps({
			div: '#gmap',
			lat: 23.7947172, // 23.7947172,90.3971412
			lng: 90.3971412,
			scrollwheel: false,				
			styles: [
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#dddddd"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#ffffff"
						},
						{
							"lightness": 17
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#ffffff"
						},
						{
							"lightness": 29
						},
						{
							"weight": 0.2
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#ffffff"
						},
						{
							"lightness": 18
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#dddddd"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#ffffff"
						},
						{
							"lightness": 21
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#ffffff"
						},
						{
							"lightness": 21
						}
					]
				},
				{
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#ffffff"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				}
			]
		}).addMarker({
			lat: 23.792930, //23.792930, 90.403798
			lng: 90.403798,
			infoWindow: {
				content: '<p>Radontheme,Gulshan</p>'
			}
			});

	}


// fancybox
//=================
	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true
	})

// progress bar
//=================
$('.skills-list').appear(function() {
	$('#demoprogressbar1').LineProgressbar({
		percentage: 80,
		fillBackgroundColor: '#f7f7f7',
		backgroundColor: '#202c3d',
		height: '10px',
		radius: '6px',

	});
	$('#demoprogressbar2').LineProgressbar({
		percentage: 90,
		fillBackgroundColor: '#f7f7f7',
		backgroundColor: '#202c3d',
		height: '10px',
		radius: '6px',
	});
	$('#demoprogressbar3').LineProgressbar({
		percentage: 60,
		fillBackgroundColor: '#f7f7f7',
		backgroundColor: '#202c3d',
		height: '10px',
		radius: '6px',
	});
	$('#demoprogressbar4').LineProgressbar({
		percentage: 80,
		fillBackgroundColor: '#f7f7f7',
		backgroundColor: '#202c3d',
		height: '10px',
		radius: '6px',
	});
	$('#demoprogressbar5').LineProgressbar({
		percentage: 50,
		fillBackgroundColor: '#f7f7f7',
		backgroundColor: '#202c3d',
		height: '10px',
		radius: '6px',
	});
	$('#demoprogressbar6').LineProgressbar({
		percentage: 80,
		fillBackgroundColor: '#ffdf00',
		backgroundColor: '#202c3d',
		height: '10px',
		radius: '6px',

	});
	$('#demoprogressbar7').LineProgressbar({
		percentage: 90,
		fillBackgroundColor: '#ffdf00',
		backgroundColor: '#202c3d',
		height: '10px',
		radius: '6px',
	});
	$('#demoprogressbar8').LineProgressbar({
		percentage: 60,
		fillBackgroundColor: '#ffdf00',
		backgroundColor: '#202c3d',
		height: '10px',
		radius: '6px',
	});
	$('#demoprogressbar9').LineProgressbar({
		percentage: 80,
		fillBackgroundColor: '#ffdf00',
		backgroundColor: '#202c3d',
		height: '10px',
		radius: '6px',
	});
	$('#demoprogressbar10').LineProgressbar({
		percentage: 50,
		fillBackgroundColor: '#ffdf00',
		backgroundColor: '#202c3d',
		height: '10px',
		radius: '6px',
	});
  });

//profile-img 	
//=================
  $(".profile-img").hover3d({
	selector: ".project__card"
});


//isotope activation 	
//=================
$('.grid').appear(function() {
	// filter items on button click
	$('.filtering-button').on('click', 'a', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
	var $grid = $('.grid').isotope({
		// set itemSelector so .grid-sizer is not used in layout
		itemSelector: '.grid-item',
		percentPosition: true,
		animationOptions: {
			duration: 500,
			easing: 'zoom-in'
		},
		masonry: {
			// use element for option
			columnWidth: '.grid-item'
		},
		transitionDuration: '.9s'
	})

	$('.filtering-button a').on('click',  function () {
		$('.filtering-button a').removeClass('active');
		$(this).addClass('active');
	});
});






}); 
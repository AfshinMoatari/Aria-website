$(function() {

  /* ========================================================================= */
	/*	Mixitup
	/* =========================================================================  */

	$("#filter-container").mixItUp();

  /* ========================================================================= */
	/*	Price Nav
	/* =========================================================================  */

  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#price").toggleClass("toggled");
  });

  /* ========================================================================= */
	/*	Google Map Customization
	/* =========================================================================  */

	function initialize() {

		var myLatLng = new google.maps.LatLng(55.6677704,12.5963379);

		var roadAtlasStyles = [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#757575"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "landscape",
        "stylers": [
          {
            "color": "#2f3642"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#181818"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1b1b1b"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2c2c2c"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8a8a8a"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#373737"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3c3c3c"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#4e4e4e"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#161b24"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3d3d3d"
          }
        ]
      }
    ];

		var mapOptions = {
			zoom: 13,
			center: myLatLng,
			disableDefaultUI: false,
			scrollwheel: false,
			navigationControl: false,
			mapTypeControl: false,
			scaleControl: false,
			draggable: false,
      fullscreenControl: true,
      streetViewControl: false,
      fullscreenControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
      },
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
      },
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
			}
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: 'img/location.png',
		});

		var RoadMapType = new google.maps.StyledMapType(roadAtlasStyles);

		map.mapTypes.set('roadatlas', RoadMapType);
		map.setMapTypeId('roadatlas');
	}

	google.maps.event.addDomListener(window, "load", initialize);


  /* ========================================================================= */
	/*	Comments Carousel
	/* =========================================================================  */


  	$("#comments").owlCarousel({
  		slideSpeed: 500,
  		paginationSpeed: 500,
  		singleItem: true,
  		pagination : false,
  		autoPlay: true,
  		transitionStyle : "fade"
  	});


    /* =========================================================================== */
    /*	Star
    /* =========================================================================== */


    $('.rating-loading').rating({
      displayOnly: true,
      step: 0.1,
    });


    /* ========================================================================= */
    /*	Nice Scroll - Custom Scrollbar
    /* ========================================================================= */


    var nice = $("html").niceScroll({
        cursorborderradius: "15px",
        cursorwidth: "10px",
        cursorfixedheight: 45,
        cursorcolor: "#F1DDBF",
        zindex: 9999,
        cursorborder: 0,
        autohidemode: true,
        scrollspeed: 200,
        boxzoom: true,
        dblclickzoom: true,
    });


    /* ========================================================================= */
    /*	Menu button trigger
    /* ========================================================================= */


    $('.show-menu a').on('click', function(e) {
        e.preventDefault();
        $(this).fadeOut(100, function(){ $('nav').slideDown(); });
    });

    $('.hide-menu a').on('click', function(e) {
        e.preventDefault();
        $('nav').slideUp(function(){ $('.show-menu a').fadeIn(); });
    });


    /* ========================================================================= */
    /*	On scroll fade/bounce fffect
    /* ========================================================================= */

    wow = new WOW({
        animateClass: 'animated',
        offset: 120
    });
    wow.init();


    /* ========================================================================= */
    /*	Hero
    /* ========================================================================= */

    $(document).scroll(function() {
      var st = $(this).scrollTop();
      $("#hero").css({
        "background-position-y": (-st/20)
      })
      $("#hero-parallax").css({
        "top": (-st/5),
        "bottom": (st/5)
      })
    });


});

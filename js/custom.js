$(function() {
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
    /*	Fix Slider Height
    /* ========================================================================= */


    var slideHeight = $(window).height();

    $('#slitSlider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);

    $(window).resize(function(){
        $('#slitSlider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
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
    /*	Home page Slider
    /* ========================================================================= */

    $(function() {

        var Page = (function() {

            var $navArrows = $( '#nav-arrows' ),
                $nav = $( '#nav-dots > span' ),
                slitslider = $( '#slitSlider' ).slitslider( {

                    speed : 1600,

                    onBeforeChange : function( slide, pos ) {

                        $nav.removeClass( 'nav-dot-current' );
                        $nav.eq( pos ).addClass( 'nav-dot-current' );

                    }
                } ),

                init = function() {
                    initEvents();
                },
                initEvents = function() {
                    // add navigation events
                    $navArrows.children( ':last' ).on( 'click', function() {
                        slitslider.next();
                        return false;
                    } );

                    $navArrows.children( ':first' ).on( 'click', function() {
                        slitslider.previous();
                        return false;
                    });

                    $nav.each( function( i ) {
                        $( this ).on( 'click', function( event ) {
                            var $dot = $( this );
                            if( !slitslider.isActive() ) {
                                $nav.removeClass( 'nav-dot-current' );
                                $dot.addClass( 'nav-dot-current' );
                            }

                            slitslider.jump( i + 1 );
                            return false;

                        });
                    });
                };
                return { init : init };

        })();

        Page.init();

    });


});


$(function() {

  /* ========================================================================= */
	/*	About item loading
	/* =========================================================================  */

  var rowNumber = 2;
	var $post = $(".service-item");
	var fadeInSpeed = 500;

	for(var i = 0, length = $post.length; i < length; i += 3) {
		$post.slice(i, i+3).wrapAll("<div class='row'></div>");
	}

  for(var i = 0, length = $post.length; i < length; i += rowNumber) {
    $post.parent().slice(i, i+rowNumber).wrapAll("<div class='postContainer'></div>");
  }

	$(".postContainer").each(function(){
		$(this).append("<div class='loadMore my-3 text-center'><a class='loadMore_btn btn btn-transparent animated fadeInUp' id='loadMore_btn' href='#'>Load more item</a></div>");
	});

  $('.postContainer').last().find('.loadMore').fadeOut(0);

  $('.postContainer').not(":first").fadeOut(0);

  $('#about .container').on('click', '#loadMore_btn', function(evt){
    evt.preventDefault();
    $(this).parents('.postContainer').next().fadeIn(fadeInSpeed);
    $(this).parent().fadeOut(0);
  });

  /* ========================================================================= */
	/*	Opening Notice
	/* =========================================================================  */

  var currentDate = new Date();
  var weekday = [];
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

    var currentDay = weekday[currentDate.getDay()];
    var currentTimeHours = currentDate.getHours();
    currentTimeHours = currentTimeHours < 10 ? "0" + currentTimeHours : currentTimeHours;
    var currentTimeMinutes = currentDate.getMinutes();
    var timeNow = currentTimeHours + "" + currentTimeMinutes;
    var currentDayID = "#" + currentDay;

    var openTimeSplit = $(currentDayID + " " + ".opens").text().split(":");
    var openTimeHours = openTimeSplit[0];
    openTimeHours = openTimeHours < 10 ? "0" + openTimeHours : openTimeHours;
    var openTimeMinutes = openTimeSplit[1];
    var openTimex = openTimeSplit[0] + openTimeSplit[1];

    var closeTimeSplit = $(currentDayID).children('.closes').text().split(":");
    var closeTimeHours = closeTimeSplit[0];
    closeTimeHours = closeTimeHours < 10 ? "0" + closeTimeHours : closeTimeHours;
    var closeTimeMinutes = closeTimeSplit[1];
    var closeTimex = closeTimeSplit[0] + closeTimeSplit[1];

    $(".openorclosed span.day").html(currentDay + " " + currentTimeHours + " : " + currentTimeMinutes);
    if (timeNow >= openTimex && timeNow <= closeTimex) {
      $("#indicator").attr("fill", "#1EC4B4");
      $(".openorclosed").css("color", "#1EC4B4");
      $(".openorclosed span.day-stat").html("open");
      $(currentDayID + " " + "span").css("background-color", "#1EC4B4");
    } else {
      $("#indicator").attr("fill", "#EE4747");
      $(".openorclosed").css("color", "#EE4747");
      $(".openorclosed span.day-stat").html("closed");
      $(currentDayID + " " + "span").css("background-color", "#EE4747");
    }

      /* ========================================================================= */
    	/*	progress bar
    	/* =========================================================================  */

      var getMax = function(){
              return $(document).height() - $(window).height();
          }

          var getValue = function(){
              return $(window).scrollTop();
          }

          if('max' in document.createElement('progress')){
              // Browser supports progress element
              var progressBar = $('progress');

              // Set the Max attr for the first time
              progressBar.attr({ max: getMax() });

              $(document).on('scroll', function(){
                  // On scroll only Value attr needs to be calculated
                  progressBar.attr({ value: getValue() });
              });

              $(window).resize(function(){
                  // On resize, both Max/Value attr needs to be calculated
                  progressBar.attr({ max: getMax(), value: getValue() });
              });
          }
          else {
              var progressBar = $('.progress-bar'),
                  max = getMax(),
                  value, width;

              var getWidth = function(){
                  // Calculate width in percentage
                  value = getValue();
                  width = (value/max) * 100;
                  width = width + '%';
                  return width;
              }

              var setWidth = function(){
                  progressBar.css({ width: getWidth() });
              }

              $(document).on('scroll', setWidth);
              $(window).on('resize', function(){
                  // Need to reset the Max attr
                  max = getMax();
                  setWidth();
              });
          }

  /* ========================================================================= */
	/*	Opening Notice
	/* =========================================================================  */

  $(window).scroll(function() {

      if ($(this).scrollTop()>0)
       {
        $("#banner").css("top", "0");
        $('.opening-notice').slideUp();
       }
      else
       {
        $("#banner").css("top", "10%");
        $('.opening-notice, .nav').slideDown();
        $('.show-menu').hide();
       }

   });

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

    // Options
    var mapOptions = {
        zoom: 13,
        backgroundColor: 'transparent',
        disableDefaultUI: true,
        center: new google.maps.LatLng(55.633065,12.5999103),
        mapTypeControlOptions: {
    				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
    			}
    };

    // Styles
    var mapStyles = [
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

    // Create map
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Apply styles to map
    var styledMap = new google.maps.StyledMapType(mapStyles, {name: 'Styled Map'});

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    // geolocation.
    navigator.geolocation.getCurrentPosition(function(position) {

      var From = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }

      var To = {
        lat: 55.633065,
        lng: 12.5999103
      }

      // Add markers
      var mapMarkerTo = new google.maps.Marker({
        position: new google.maps.LatLng(To.lat, To.lng),
        map: map,
        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=|02aebd|000000',
      });

      var mapMarkerFrom = new google.maps.Marker({
        position: new google.maps.LatLng(From.lat, From.lng),
        map: map,
        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=|fff|000000',
        animation: google.maps.Animation.DROP
      });


      // Add directions
      var directionsService = new google.maps.DirectionsService();

      var directionsRequestFrom = new google.maps.LatLng(From.lat, From.lng);

      var directionsRequestTo = new google.maps.LatLng(To.lat, To.lng);

      var directionsRequest = {
          origin: directionsRequestFrom,
          destination: directionsRequestTo,
          travelMode: google.maps.DirectionsTravelMode.WALKING,
          unitSystem: google.maps.UnitSystem.METRIC
      };

      directionsService.route(directionsRequest, function (response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
              var mapDirection = new google.maps.DirectionsRenderer({
                  map: map,
                  preserveViewport: true,
                  suppressInfoWindows: true,
                  suppressMarkers: true,
                  zIndex: 100,
                  directions: response,
                  polylineOptions: {
                      strokeColor: 'yellow'
                  }
              });
          }
      });

    });

	}

	google.maps.event.addDomListener(window, "load", initialize);

    /* ========================================================================= */
    /*	Nice Scroll - Custom Scrollbar
    /* ========================================================================= */

    var nice = $("body").niceScroll({
        cursorborderradius: "15px",
        cursorwidth: "15px",
        cursorfixedheight: 55,
        cursorcolor: "#F1DDBF",
        zindex: 999,
        autohidemode: true,
        scrollspeed: 100,
        boxzoom: true,
        dblclickzoom: true,
    });


    /* ========================================================================= */
    /*	Menu button trigger
    /* ========================================================================= */


    $('.show-menu').on('click', function(e) {
        e.preventDefault();
        $(this).fadeOut(100, function(){ $('.nav').slideDown(); });
    });

    $('.hide-menu').on('click', function(e) {
        e.preventDefault();
        $('.nav, .opening-notice ').slideUp(function(){ $('.show-menu').show(); });
        $("#banner").css("top", "0");
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
    /*	banner
    /* ========================================================================= */

    $(document).scroll(function() {
      var st = $(this).scrollTop();
      $("#banner").css({
        "background-position-y": (-st/20)
      })
      $("#banner-parallax").css({
        "top": (-st/5),
        "bottom": (st/5)
      })
    });


});

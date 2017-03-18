$(function() {

    $.googleReviews = function(element, options) {

        var defaults = {
              placeId: ''
            , min_rating: 0
            , max_rows: 0
        };

        var plugin = this;
        plugin.settings = {}

        plugin.init = function() {
          plugin.settings = $.extend({}, defaults, options);

          initialize_place(function(place){
            plugin.place_data = place;
            renderReviews(plugin.place_data.reviews);

            addSchemaMarkup(plugin.place_data);
          });

        }

        var initialize_place = function(c){
          var map = new google.maps.Map(document.getElementById('map-canvas'));

          var request = {
            placeId: plugin.settings.placeId
          };

          var service = new google.maps.places.PlacesService(map);

          service.getDetails(request, function(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
              c(place);
            }
          });
        }

        var sort_by_date = function(ray) {
          ray.sort(function(a, b){
            var keyA = new Date(a.time),
            keyB = new Date(b.time);
            // Compare the 2 dates
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
          });
          return ray;
        }

        var filter_minimum_rating = function(reviews){
          for (var i = reviews.length -1; i >= 0; i--) {
            if(reviews[i].rating < plugin.settings.min_rating){
              reviews.splice(i,1);
            }
          }
          return reviews;
        }

        var renderReviews = function(reviews){
          reviews = sort_by_date(reviews);
          reviews = filter_minimum_rating(reviews);
          var html = ""
          var row_count = (plugin.settings.max_rows > 0)? plugin.settings.max_rows - 1 : reviews.length - 1;
          row_count = (row_count > reviews.length-1)? reviews.length -1 : row_count;

          for (var i = row_count; i >= 0; i--) {
            var stars = reviews[i].rating;
            var date = convertTime(reviews[i].time);
            html = html+"<div class='item text-center'><div class='comment-info'><div class='comment-meta'><h3>"+reviews[i].author_name+"</h3><span>"+date+"</span></div><div class='comment-text'><p>"+reviews[i].text+"</p><div class='comment-rating' id="+ i +">"+stars+"</div></div></div></div>"
          };
          $(html).appendTo("#comments");

  				$(".comment-rating").starRating({
  					starSize: 20,
  					readOnly: true,
  					totalStars: 5,
  					initialRating: 1.5,
  					strokeColor: '#161B24',
  					useGradient: false,
  					emptyColor: '#161B24',
  					activeColor: '#F1DDBF',
  				});

          for (var i = row_count; i >= 0; i--) {
            var stars = reviews[i].rating;
            $("#"+i).starRating('setRating', stars, true);
          };

  				$(".main-rating").starRating({
  					starSize: 35,
  					readOnly: true,
  					totalStars: 5,
  					initialRating: 3.5,
  					strokeColor: '#161B24',
  					useGradient: false,
  					emptyColor: '#161B24',
  					activeColor: '#F1DDBF',
  				});

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

        }

        var convertTime = function(UNIX_timestamp){
          var a = new Date(UNIX_timestamp * 1000);
          var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
          var time = months[a.getMonth()] + ' ' + a.getDate() + ', ' + a.getFullYear();
          return time;
        }

        var addSchemaMarkup = function(placeData) {
          var reviews = placeData.reviews;
          var lastIndex = reviews.length - 1;
          var reviewPointTotal = 0;
          for (var i = lastIndex; i >= 0; i--) {
            reviewPointTotal += reviews[i].rating;
          };

          var averageReview = reviewPointTotal / ( reviews.length );
          var avg = "<span>"+averageReview.toFixed(1)+"</span>"
          $(avg).appendTo( ".rating label");
          $(".main-rating").starRating('setRating', averageReview, true);

        }

        plugin.init();

    }

    $.fn.googleReviews = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('googleReviews')) {
                var plugin = new $.googleReviews(this, options);
                $(this).data('googleReviews', plugin);
            }
        });

    }

});

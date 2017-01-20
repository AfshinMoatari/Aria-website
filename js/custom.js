$(function() {


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

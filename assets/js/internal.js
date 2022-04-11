'use strict';
jQuery(document).ready(function () {    
    
    $('.ajax-popup-link').magnificPopup({
        fixedContentPos : true,
      type: 'ajax',
      tLoading: 'Loading Content #%curr%...',
    });
    /*
    $('#close').click(function(){
        $('.mfp-close').trigger('click');
    });
*/
    
    //lazy load for images
    var myLazyLoad = new LazyLoad();
    
    // sticky
    $(".navbar").sticky({topSpacing:0}); 
    
    //slider
    var swiper = new Swiper('.swiper-container', {
      autoHeight: true, //enable auto height
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 11000,
        disableOnInteraction: false,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
    });    
    
    // Isotope
    $('.grid-portfolio').isotope({
      itemSelector: '.grid-item',
      //percentPosition: true,
        layoutMode: 'fitRows'
      
    });
    // For Filtering
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
    }).css('overflow','hidden');;
    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };
    // bind filter button click
    $('.filters-button-group').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.btn-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.active').removeClass('active');
        $( this ).addClass('active');
      });
    });

    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.isotope('layout');
    });
    
});
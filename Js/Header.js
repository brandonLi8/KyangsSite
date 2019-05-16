/**
 * Portfolio
 * Header.js
 *
 * @author Brandon Li <brandon.li820@icloud.com> 
 * Created on 4/20/19
 * Copyright © 2019 Brandon Li. All rights reserved.
 *
 * ## Description:
 *
 * This handles the header interactivity and setup so that all animations
 * happen after the header is finished.
 *
 *  
 */

// strict mode
"use strict";

// class that handles the header animations
export default class Header {
  /**
   * @constructor
   * @param {page} page - the current page
   */
  constructor( page ){
    // @private {page} page - the current page
    this.page = page;

    var self = this;
     // On load animation when the page is fully loaded
    page.isLoaded.addListener( function( ){
      // make the thing responsve
      self.animateInitial();
    }) 
    this.scrollPast = false;
    var self = this;
    self.currentAnimation;
    $( "#responsive-icon" ).click( () => {
      $( "#mobile-navigation" ).css( "height", window.innerHeight + 200 ); 
      $( window ).resize( () => { $( "#mobile-navigation" ).css( "height", window.innerHeight + 200 ) } )
      if ( self.currentAnimation ) self.currentAnimation.pause()
      self.currentAnimation = anime({
        targets: "#mobile-navigation",
        width: window.innerWidth < 450 ? "80%": 400,
        easing: "spring( 1, 50, 7, 2 )",
      })
    } )

    $( "#mobile-navigation-exit" ).click( () => {
      if ( self.currentAnimation ) self.currentAnimation.pause()
      self.currentAnimation = anime({
        targets: "#mobile-navigation",
        width: 0,
        easing: "linear",
        duration: 300
      })
    } )

    
    var top1 = $("#intro").offset().top;
    var top2 = $("#about").offset().top;
    var top3 = $("#education").offset().top;
    var top4 = $("#awards").offset().top;
    var top5 = $("#projects").offset().top;
    var top6 = $("#organizations").offset().top;
    var top7 = $("#contact").offset().top;
    var headerCheck = function() {
      var scrollPos = $(document).scrollTop();
      if (scrollPos >= top1 && scrollPos < top2) {
        $( ".link" ).each( ( i ) => {
          $( ".link" ).eq( i ).css("color", "rgb( 80, 80, 80 )" );
        } )
        $( ".mobile-link" ).each( ( i ) => {
          $( ".mobile-link" ).eq( i ).css("color", "#CCC" );
        } )
        $("#navigation .about").css("color", "#000");
        $("#mobile-navigation .about").css("color", "white");
      } 
      else if (scrollPos >= top2 && scrollPos < top3) {
        $( ".link" ).each( ( i ) => {
          $( ".link" ).eq( i ).css("color", "rgb( 80, 80, 80 )" );
        } )
        $( ".mobile-link" ).each( ( i ) => {
          $( ".mobile-link" ).eq( i ).css("color", "#CCC" );
        } )
        $("#navigation .about").css("color", "#000");
        $("#mobile-navigation .about").css("color", "white");
      } 
      else if (scrollPos >= top3 && scrollPos < top4) {
        $( ".link" ).each( ( i ) => {
          $( ".link" ).eq( i ).css("color", "rgb( 80, 80, 80 )" );
        } )
        $( ".mobile-link" ).each( ( i ) => {
          $( ".mobile-link" ).eq( i ).css("color", "#CCC" );
        } )
        $("#navigation .education").css("color", "#000");
        $("#mobile-navigation .education").css("color", "white");
      } 
      else if (scrollPos >= top4 && scrollPos < top5) {
        $( ".link" ).each( ( i ) => {
          $( ".link" ).eq( i ).css("color", "rgb( 80, 80, 80 )" );
        } )
        $( ".mobile-link" ).each( ( i ) => {
          $( ".mobile-link" ).eq( i ).css("color", "#CCC" );
        } )
        $("#navigation .awards").css("color", "#000");
        $("#mobile-navigation .awards").css("color", "white");
      } 
      else if (scrollPos >= top5 && scrollPos < top6) {
        $( ".link" ).each( ( i ) => {
          $( ".link" ).eq( i ).css("color", "rgb( 80, 80, 80 )" );
        } )
        $( ".mobile-link" ).each( ( i ) => {
          $( ".mobile-link" ).eq( i ).css("color", "#CCC" );
        } )
        $("#navigation .projects").css("color", "#000");
        $("#mobile-navigation .projects").css("color", "white");
      } 
      else if (scrollPos >= top6 && scrollPos < top7) {
        $( ".link" ).each( ( i ) => {
          $( ".link" ).eq( i ).css("color", "rgb( 80, 80, 80 )" );
        } )
        $( ".mobile-link" ).each( ( i ) => {
          $( ".mobile-link" ).eq( i ).css("color", "#CCC" );
        } )
        $("#navigation .organizations").css("color", "#000");
        $("#mobile-navigation .organizations").css("color", "white");
      } 
      else if (scrollPos >= top7) {
        $( ".link" ).each( ( i ) => {
          $( ".link" ).eq( i ).css("color", "rgb( 80, 80, 80 )" );
        } )
        $( ".mobile-link" ).each( ( i ) => {
          $( ".mobile-link" ).eq( i ).css("color", "#CCC" );
        } )
        $("#navigation .contact").css("color", "#000");
        $("#mobile-navigation .contact").css("color", "white");
      } 
    }
    headerCheck()
    $(document).scroll( headerCheck );

  }
  /**
   * @private
   * Animate the initial animations
   */
  animateInitial() {
    anime({
      targets: '.link',
      easing: "spring( 1, 100, 7, 5 )",
      opacity: [ 0, 1 ],
      translateY: [ -40, 0 ],
      delay: function( _, i ) {
        return 10 + 30 * i;
      }  
    })  
    var scrollHandler = () => {
      var scrollTop = window.pageYOffset || 
                      ( document.documentElement || 
                        document.body.parentNode || 
                        document.body 
                      ).scrollTop;
      if ( scrollTop > 50 ){
        if ( this.scrollPast ) return;
        anime({
          targets: "#header",
          backgroundColor: [ "rgba( 238, 238, 238, 0 )", "#E0E3E6" ],
          padding: "7px 0",
          easing: "linear",
          duration: 500
        })
        this.scrollPast = true;
      }
      else {
        if ( !this.scrollPast ) return; 
        anime({
          targets: "#header",
          backgroundColor: [ "#E0E3E6", "rgba( 238, 238, 238, 0 )" ],
          padding: "20px 0",
          easing: 'linear',
          duration: 500
        })
        this.scrollPast = false;
      }
    }
    scrollHandler();
    // on scroll animate it down
    $( document ).scroll( scrollHandler );

    var hoverButton;
    $( ".link" ).each( ( i ) => {
      $( ".link" )[ i ].addEventListener( "mouseenter" , () => {
        hoverButton = anime({
          targets: $( ".link" )[ i ],
          opacity: [ 1, 0.2 ],
          easing: "linear",
          duration: 200,
        });
      } )
      $( ".link" )[ i ].addEventListener( "mouseleave" , () => {
        hoverButton.reset();
      } )

    } );
  }

}
    

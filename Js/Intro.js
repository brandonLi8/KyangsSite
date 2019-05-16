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
 * This handles the Intro interactivity and setup so that all animations
 * happen after the animation is finished.
 *
 *  
 */

// strict mode
"use strict";

// class that handles the header animations
export default class Intro {
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

    // set up the scroll based animations
    this.scrollPast = false;

    var resizeEvent = () => {
      $( "#intro" ).css( "height", window.innerHeight );
    }
    resizeEvent();
    // resize the intro node
    $( window ).resize( resizeEvent );

    // button animations
    var hoverButton;
    $( ".button" ).each( ( i ) => {
      $( ".button" )[ i ].addEventListener( "mouseenter" , () => {
        hoverButton = anime({
          targets: $( ".button" )[ i ],
          opacity: [ 1, 0.8 ],
          borderBottom: "2px solid #111",
          borderTop: "2px solid #111",
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: "#000",
          easing: "easeOutExpo",
          color: "#fff",
          duration: 400,
          complete: () => {
            $( ".button" )[ i ].style.padding = "3px 10px"
          }
        });
      } )
      $( ".button" )[ i ].addEventListener( "mouseleave" , () => {
        hoverButton.reset();
        $( ".button" )[ i ].style.borderTop = "";
        $( ".button" )[ i ].style.borderBottom = "";
         $( ".button" )[ i ].style.padding = "5px 20px"
      } )

    } );
  }
  /**
   * @private
   * Animate the initial animations
   */
  animateInitial() {
    anime({
      targets: '#intro-mask',
      easing: "linear",
      opacity: [ 1, 0.2 ],
      duration: 100
    })  
    // animate the 'kevin yang text'
    // Wrap every letter in a span
    $( "#intro-letters" ).each( function(){
      $( this ).html( $( this ).text().replace(
        /([^\x00-\x80]|\w)/g, "<span id='intro-letter'>$&</span>"
        )
      );
    } );

  
    $( "#intro-letters" ).css( "opacity", 1 );
    var reveal = anime({
      targets: "#intro-line",
      scaleY: [ 0,1 ],
      opacity: [ 0.5,1 ],
      easing: "easeOutExpo",
      duration: 400,
      autoplay: false,
      delay: 100,
      complete: () => {
        anime({
          targets: "#intro-line",
          translateX: [0,$("#intro-letters").width()],
          easing: "easeOutExpo",
          duration: 600,
        })
        anime({
          targets: "#intro-letter",
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 600,
          offset: "-=775",
          delay: function(el, i) {
            return 40 * (i + 1 )
          },
          complete: () => {
            anime({
              targets: "#intro-line",
              scaleY: [ 1, 0 ],
              opacity: [ 1, 0.5 ],
              easing: "easeOutExpo",
              duration: 700
            })
          }
        })
      }
    })
    $( "#intro-title" ).on( "inview", function( _, isInView ) {
      if (isInView) {
        reveal.restart();
      } 
    });

  }

}
    

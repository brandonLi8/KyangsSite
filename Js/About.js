/**
 * Portfolio
 * About.js
 *
 * @author Brandon Li <brandon.li820@icloud.com> 
 * Created on 4/22/19
 * Copyright © 2019 Brandon Li. All rights reserved.
 *
 * ## Description:
 *
 * This handles the About interactivity and setup so that all animations
 * happen after the animation is finished.
 *
 *  
 */

// strict mode
"use strict";

// class that handles the header animations
export default class About {
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
  }
  /**
   * @private
   * Animate the initial animations
   */
  animateInitial() {
    var revealProfile = anime({
      targets: "#profile",
      translateY: [ 20, 0 ],
      opacity: 1,
      easing: "linear",
      duration: 800,
      autoplay: false,
      delay: 200,
      autoplay: false
    })
    $( "h2" ).each( ( i ) => {
      $( "h2" ).eq( i ).on( "inview" , ( _, isInView ) => {
        if ( isInView ) {
          anime({
            targets: $( "h2" )[ i ],
            translateY: [ -30, 0 ],
            opacity: 1,
            easing: "linear",
            duration: 800,
            delay: 100,
          })
          // only once
          $( "h2" ).eq( i ).off( "inview" );
        } 
      } )
    } )

    // animate the profile reveal
    $( "#profile" ).on( "inview", function( _, isInView ) {
      if ( isInView ) {
        revealProfile.play();
        // only once
        $( "#profile" ).off( "inview" );
      } 
    });

  }

}
    

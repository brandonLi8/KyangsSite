/**
 * Portfolio
 * PreLoader.js
 *
 * @author Brandon Li <brandon.li820@icloud.com> 
 * Created on 4/20/19
 * Copyright © 2019 Brandon Li. All rights reserved.
 *
 * ## Description:
 *
 * This handles the preloader interactivity and setup so that all animations
 * happen after the preloader is finished.
 *
 * Animations onload should wait for this to finish loading, and in order to do
 * that you must listen to the page that is passed isLoaded property 
 * (../../Sherpa/Observe/ObservableVariable.min.js) and call its addListener 
 * method.
 *  
 */

// strict mode
"use strict";

// class that handles the pre loader animations
export default class PreLoader {
  /**
   * @constructor
   * @param {page} page - the page with the listeners
   */
  constructor( page ){
    // @private {page} page - the current page
    this.page = page;
    // animate the nodes on to the screen
    this.animateInitial();
  }
  /**
   * @private
   * Animate the initial animations
   */
  animateInitial() {
    // Since we don't split up the loading text untill runtime of the script,
    // we first set the #greeter node's opacity to 0. Now, we make it visible 
    $( "#greeter" ).css( "opacity", 1 ); 

    // wrap every letter of the 'loading...' in a span
    var spans = "";
    $.each( $( "#greeter" ).html().split( "" ), function( _, letter ) {
      spans += "<span id='letter'>" + letter + "</span>";
    });
    $( "#greeter" ).html( spans );

    // animate the 'loading...' node
    anime({
      targets: '#greeter #letter',
      translateX: [ 70, 30 ],
      translateZ: 0,
      opacity: [ 0, 1 ],
      easing: 'spring( 1, 100, 6, 10 )',
      delay: function( _, i ) {
        return 120 + 25 * i;
      }
    })
    // animate the logo
    anime({
      targets: '#loader-image',
      easing: "easeOutCirc",
      duration: 700,
      opacity: [ 0, 1 ],
      delay: 600,
    })
    // animate the counter (precentage)
    anime({
      targets: '#loader-counter',
      scale: [ 14, 1 ],
      easing: 'easeOutElastic( 3, 0.8 )',
      duration: 600,
      opacity: [ 0, 1 ],
      translateY: [ 50, 20 ],
      delay: 500,
      complete: () => {
        // once this animation is finished, load
        setTimeout( this.load(), 0 );
      }
    })  
  }
  /**
   * @private
   * Load by getting percentages
   */
  load() {
    // alias self because 'this' scope changes in setInterval
    var self = this;
    // check that the initial nodes are actually there
    var checkInitial = setInterval( function() {
      if ( $( "#greeter" )[ 0 ].readyState != "loading" && 
           $( "#loader-counter" )[ 0 ].readyState != "loading" ) {
        clearInterval( checkInitial );
        // make sure the stack is empty first
        setTimeout( drawCounter, 10 );
      }
    }, 200 );

    // draw the Counter changing
    var drawCounter = () => {
      // decimal percentage
      var progress = 0;
      var interval = setInterval( function() {
        // simulate a loading bar
        progress = Math.min( progress + Math.random() * 0.16, 1 );
        // once completly loaded, finish the animations
        if ( progress === 1 ){
          $( "#loader-counter" )[ 0 ].textContent = "100%";
          clearInterval( interval )
          self.finishAnimations();
        }
        else {
          $( "#loader-counter" )[ 0 ].textContent = Math.round( 
                                                      progress * 100 
                                                    ) + "%";
        }
      }, 102 );
    }
  }
  /**
   * @private
   * handling the exit animations
   */
  finishAnimations(){
    // alias self for the functions
    var self = this;
    // function that changes the page.isloaded value so that other places can
    // animate at the right time
    var finishLoader = () => {
      // we are finished loading, now lets tell everyone else!
      // clear the stack
      setTimeout( () => { self.page.isLoaded.value = true } , 0 );
      // dispose the loader
      $( "#loader" ).remove();
    }
    // function that is the closing animation for the loader as a whole
    var closeLoader = () => {
      anime({
        targets: '#loader',
        opacity: [ 1, 0 ],
        easing: "easeInExpo",
        duration: 600,
        delay: 100,
        complete: finishLoader
      })
    }
    // now animate the closing of the greeter
    anime({
      targets: '#greeter #letter',
      translateY: [ 0,-100 ],
      opacity: [ 1, 0 ],
      easing: "easeInExpo",
      duration: 800,
      delay: function( _ , i ) {
        return 20 * i;
      }
    })
    // animate the closing of the image
    anime({
      targets: '#loader-image',
      opacity: [ 1, 0 ],
      easing: "easeInExpo",
      duration: 600,
      delay: 100,
    })
     // animate the exit counter
    anime({
      targets: '#loader-counter',
      scale: [ 1, 4 ],
      easing: "easeInExpo",
      duration: 800,
      opacity: [ 1, 0 ],
      translateY: [ 20, 30 ],
      delay: 400,
      complete: closeLoader
    })
  }
}
    

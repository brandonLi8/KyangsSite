/**
 * Portfolio
 * Portfolio.js
 *
 * @author Brandon Li <brandon.li820@icloud.com>
 * Created on 3/5/19
 * Copyright © 2019 Brandon Li. All rights reserved.
 *
 * Top level file for the Portfolio. ALL pages must go through here first.
 * 
 * ## Description:
 * This class is to make a page on the portfolio website. This module is
 * required for the Templates and is required for the pre-load animation of the 
 * webpage.
 *
 * The loading screen will wait untill the document is ready and make a
 * animation. You can add a listener to when thescreen has fully loaded and has
 * finished its animations by calling the addListener( function ... ) 
 * to Pages.isLoaded property, which is an ObservableVariable.
 *
 */

// scrict mode
"use strict";

// modules
import ObservableVariable from "./Sherpa/Observe/ObservableVariable.min.js";

export default class Site {
  /**
   * @constructor
   * Make a page and set up the on-load animations and the root node for the 
   * screen view. 
   *
   * @param {string} title - this is the page title ie ( home, resume etc. )
   */
  constructor( title ) {

    // @public (read-only), the title of the page
    this.title = title;

    // @public {boolean} if the page is on a mobile device
    this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    // @public {boolean} if the page is on desktop
    this.isDesktop = !this.isMobile;

    // @public (read-only) {observableVariable<bool>} is the page fully loaded
    // including animations
    this.isLoaded = new ObservableVariable( false );
  }
}



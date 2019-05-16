/**
 * KevinYangsWebsite
 * Main.js
 *
 * @author Brandon Li <brandon.li820@icloud.com> 
 * Created on 4/20/19
 * Copyright © 2019 Brandon Li. All rights reserved.
 *
 */

// imports
import Site from "../Site.js";
import PreLoader from "./PreLoader.js";
import Header from "./Header.js";
import Intro from "./Intro.js";
import About from "./About.js";
import Education from "./Education.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";

/*~~~~~~~~~~~~~~ */
/* Smooth Scroll */
/*~~~~~~~~~~~~~~ */
smoothScroll.init({
  speed: 1000,
  offset: 70
});
/*~~~~~~~~~~~~~~~~ */
/* Set up the page */
/*~~~~~~~~~~~~~~~~ */
var page = new Site();

/*~~~~~~~~~~~~~~~~~~~~~~ */
/* Make a PreLoader load */
/*~~~~~~~~~~~~~~~~~~~~~~ */
var loader = new PreLoader( page );

// make the header
var header = new Header( page );

// make the intro
var intro = new Intro( page );

var education = new Education( page );

var projects = new Projects( page );

var contact = new Contact( page );
// about page
var about = new About( page );
$(document).ready( function(){

  // $("#loader").hide();

} );
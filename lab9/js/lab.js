/*
* Author: Elisa Anderson,elanande@ucsc.edu>
* Created: May 2 2024
* License: Public Domain
* lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
* Requirements: jQuery must be loaded for this script to work.
*/

  
// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add button to challenge section
$("#problems").append("<button id='button-problems'>Make Special</button>");

// add button to challenge section
$("#reflection").append("<button id='button-reflection'>Make Special</button>");

// add a click listener to the challenge button
$("#button-reflection").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#reflection").toggleClass("special");
});

// add a click listener to the challenge button
$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});
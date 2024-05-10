/*
* Author: Elisa Anderson,elanande@ucsc.edu>
* Created: May 2 2024
* License: Public Domain
* lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
* Requirements: jQuery must be loaded for this script to work.
*/

$(document).ready(function() {
});
// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");

// add a click listener to the challenge button
$("#challenge").on("click", "#button-challenge", function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// add a click listener to the problems button
$("#problems").on("click", "#button-problems", function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});

// add a click listener to the results button
$("#results").on("click", "#button-results", function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});
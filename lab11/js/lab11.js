/*
* Author: Elisa Anderson,elanande@ucsc.edu>
* Created: May 2 2024
* License: Public Domain
*/

//sortUserName - a function that takes user input and sorts the letters
//of their name

$(document).ready(function() {
  // your script here
});

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
  }

  // click listener for button
$("#submit").click(function(){
});

// get value of input field
const userName = $("#user-name").val();

// now let's sort it
userNameSorted = sortString(userName);

// append a new div to our output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');

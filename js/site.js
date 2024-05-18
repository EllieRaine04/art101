// index.js - Experimenting
// Author: Elisa Anderson 
// Date:5-14-24

function getNameAndDisplay() {
  //prompt the user to input their name
  //var name = prompt("Name Please:");
  var name 
  // Use this input to change the text of the h1 using
$('#title').html('Hello, ' + name);
}

//Attatch a click handler to the button within the JS file
$("#my-button").click(getNameAndDisplay);
//$("#my-button").click(function(){
  //console.log("Click")
//});



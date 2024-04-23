// Author: Elisa Anderson ,elanande@ucsc.edu>
// Created: 23 April

// Define Variables
myTransport = ["Mini Cooper S Hatchback 2D", "bike", "rides from friends"];

myMainRide = {
  make : "Mini Cooper",
  model : "S Hatchback 2D",
  color : "Yellow",
  year : 2007,
  age : function () {
    return 2024 - this.year;

  }
}

document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre");
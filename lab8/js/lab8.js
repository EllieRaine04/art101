/*
* Author: Elisa Anderson,elanande@ucsc.edu>
* Created: May 2 2024
* License: Public Domain
*/

//sortUserName - a function that takes user input and sorts the letters
//of their name


function isEven(x){
    return (x % 2 == 0);
}

// test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [100, 34, 345, 278, 200, 26, 13, 3, 100000]
console.log("My array", array);

var result = array.map(isEven);
// should return [true, true, false, true, true, true, false, false, true]
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
    return x ** 0.5;
})
// should return [10, 5.830951894845301, 18.57417562100671, 16.673332000533065, 14.142135623730951, 5.0990195135927845, 3.605551275463989, 1.7320508075688772, 316.22776601683796]0: 101: 5.8309518948453012: 18.574175621006713: 16.6733320005330654: 14.1421356237309515: 5.09901951359278456: 3.6055512754639897: 1.73205080756887728: 316.22776601683796length: 9[[Prototype]]: Array(0)
console.log("Squareroot of array:", result);

// Map results data
let mapResults = [
    "<li>Original Array: " + JSON.stringify(array) + "</li>",
    "<li>Evenness of Array: " + JSON.stringify(array.map(isEven)) + "</li>",
    "<li>Squareroot of Array: " + JSON.stringify(array.map(function(x){
        return x ** 0.5;
    })) + "</li>"
];

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html("<ul>" + mapResults.join("") + "</ul>");
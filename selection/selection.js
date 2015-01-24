'use strict';

var gen = require('../utils/generator');
var array = gen.createArray(20);

function selectionSort(array) {
  var length = array.length, min;

  for (var i = 0; i < array.length; i++) {
    min = i;
    //    j is initliazed to be i+1 to check if it's the same as i
    //       V    V
    for (var j = i+1; j < length ; j++) {
      // Check if the array at index j (which is i+1) is the same as the min set
      if(array[j] < array[min]) {
        // if it is, set a new minimum
        min = j;
      }
    }
    // If i Isn't the same as min, swap them out
    if (i !== min) {
      gen.swap(array, i, min);
    }
  }
  return array;
}
// Example
// selectionSort(array);

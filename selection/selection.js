'use strict';

var gen = require('../utils/generator');
var array = gen.createArray(20);

function selectionSort(array) {
  var length = array.length,
    min;

  for (var i = 0; i < array.length; i++) {
    min = i;
    //   After each pass, the items at the beginning of the array are already in their correct spots and so there is no need to re-evaluate them. setting j to i also works (won't break everything), but isn't necessary.
    //       V   V V
    for (var j = i + 1; j < length; j++) {
      // Check if the array at index j (which is i+1) is the same as the min set
      if (array[j] < array[min]) {
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
//console.log(selectionSort(array));

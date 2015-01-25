'use strict';
// Steps:
// 1. If the item value goes after the last item in the sorted section, then do nothing.
// 2. If the item value goes before the last item in the sorted section, remove the item value from the array and shift the last sorted item into the now-vacant spot.
// 3. Compare the item value to the previous value (second to last) in the sorted section.
// 4. If the item value goes after the previous value and before the last value, then place the item into the open spot between them, otherwise, continue this process until the start of the array is reached.

var gen = require('../utils/generator');

function insertionSort(array) {

  var len = array.length, // number of items in the array
    value, // the value currently being compared
    i, // index into unsorted section
    j; // index into sorted section

  for (i = 0; i < len; i++) {
    // store the current value because it may shift later
    value = array[i];
    // Whenever the value in the sorted section is greater than the value
    // in the unsorted section, shift all items in the sorted section over
    // by one. This creates space in which to insert the value.
    for (j = i - 1; j > -1 && array[j] > value; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = value;
  }
  return array;
}


//for example:
// console.log(insertionSort(gen.createArray(500)));

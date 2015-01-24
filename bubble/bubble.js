'use strict';

var gen = require('../utils/generator');

function bubbleSort(items){
  var len = items.length, i, j, stop;
  // initialized to 0; stop is set to the length of length minus the for index; while
  for (i=0; i < len; i++){
    console.log(items);
    for (j=0, stop=len-i; j < stop; j++){
      if (items[j] > items[j+1]){
        gen.swap(items, j, j+1);
      }
    }
  }
  return items;
}

console.log(bubbleSort(gen.createArray(5)));

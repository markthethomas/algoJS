'use strict';

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function generateRandomLargeArray(length) {
  var array = new Array(length);
  for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random()*10);
  }
  shuffle(array);
  return shuffle(array);
}

function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function bubbleSort(items){
  var len = items.length, i, j, stop;
  // initialized to 0; stop is set to the length of length minus the for index; while
  for (i=0; i < len; i++){
    console.log(items);
    for (j=0, stop=len-i; j < stop; j++){
      if (items[j] > items[j+1]){
        swap(items, j, j+1);
      }
    }
  }
  return items;
}

var array = bubbleSort(generateRandomLargeArray(5));
console.log(array);

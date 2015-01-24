'use strict';
var gen = {
  shuffle: function(array) {
    var currentIndex = array.length,
      temporaryValue, randomIndex;
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
  },

  createArray: function(length) {
    var array = new Array(length);
    for (var i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 10);
    }
    gen.shuffle(array);
    return gen.shuffle(array);
  },
  swap: function(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
  }
};

module.exports = gen;

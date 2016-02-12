exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {

  },

  sum : function(arr) {

  },

  remove : function(arr, item) {
    arr.forEach(function(el, i, arr) {
      if (el === item) {
        arr.splice(i, 1);
      }
    });
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    arr.map(function(el, i, arr) {
      if (el === item) {
        arr.splice(i, 1);
      }
    });
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {

  },

  square : function(arr) {
    return arr.map(function(el) {
      return el * el;
    });
  },

  findAllOccurrences : function(arr, target) {

  }
};

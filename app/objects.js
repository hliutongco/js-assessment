exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj)
  },

  alterObjects: function(constructor, greeting) {
    return constructor.prototype.greeting = greeting
  },

  iterate: function(obj) {
    return Object.entries(obj).map(arr => `${arr[0]}: ${arr[1]}`)
  }
};

exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr)
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return (str2) => `${str}, ${str2}`
  },

  makeClosures: function(arr, fn) {
    return arr.map(num => () => fn(num))
  },

  partial: function(fn, str1, str2) {
    return (str3) => fn(str1, str2, str3)
  },

  useArguments: function() {
    return [...arguments].reduce((acc, num) => acc += num)
  },

  callIt: function(fn) {
    const args = [...arguments]
    // remove function first argument
    args.shift()

    return fn(...args)
  },

  partialUsingArguments: function(fn) {
    const firstArgs = arguments
    return function() {
      const fullArgArr = [...firstArgs, ...arguments]
      const fn = fullArgArr.shift()
      return fn(...fullArgArr)
    }
  },

  curryIt: function(fn) {
    return (a) => {
      return (b) => {
        return (c) => {
          return fn(a, b, c)
        }
      }
    }
  }
};

exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.findIndex((element) => element === item)
  },

  sum: function(arr) {
    return arr.reduce((sum, num) => sum += num)
  },

  remove: function(arr, item) {
    return arr.filter((element) => element !== item)
  },

  removeWithoutCopy: function(arr, item) {
    arr.forEach((element, index) => {
      if(element === item){
        arr.splice(index, index + 1)
      }
    })

    return arr
  },

  append: function(arr, item) {
    arr.push(item)

    return arr
  },

  truncate: function(arr) {
    arr.splice(-1)

    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item)

    return arr
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    return [...arr1, ...arr2]
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function(arr, item) {
    let counter = 0
    arr.forEach((element) => {
      if(element === item){
        counter++
      }
    })
    return counter
  },

  duplicates: function(arr) {
    const key = {}
    return arr.filter((num) => {
      if(key[num] === 1){
        key[num]++
        return true
      } else if(!key[num]) {
        key[num] = 1
        return false
      } else {
        key[num]++
        return false
      }
    })
  },

  square: function(arr) {
    return arr.map(element => element * element)
  },

  findAllOccurrences: function(arr, target) {
    return arr.map((num, index) => target === num ? index : false).filter(element => element !== false)
  }
};

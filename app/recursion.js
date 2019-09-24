exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName = "app") {
    const filesArray = []

    const recursiveFunction = (data) => {
      data['files'].forEach((fileOrFolder) => {
        if(typeof fileOrFolder === 'string'){
          filesArray.push(fileOrFolder)
        }
        else {
          recursiveFunction(fileOrFolder)
        }
      })
    }

    const recursiveFindDir = (array) => {
      array.forEach((fileOrFolder) => {
        if(typeof fileOrFolder === 'object'){
          runner(fileOrFolder)
        }
      })
    }

    const runner = (dataObj) => {
      if(dataObj['dir'] === dirName){
        recursiveFunction(dataObj)
      } else {
        recursiveFindDir(dataObj['files'])
      }
    }

    runner(data)

    return filesArray
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    const arr = [0, 1]
    let sum = 1

    const addtoArray = (num) => {
      for(let i = 3; i < num; i++){
        sum += arr[arr.length - 1]
        arr.push(sum)
      }
    }

    if(n <= 1){
      return 0
    }
    else if (n === 2) {
      return 1
    } else {
      addtoArray(n)
      return arr[arr.length - 1]
    }
  },

  validParentheses: function(n) {
    const arr = []

    const constructParen = (num) => {
      let paren = '()'
      for(let i=1; i < num; i++){
        paren += '()'
      }
      return paren
    }

    const parenString = constructParen(n)
    arr.push(parenString)

    if(n === 1) return arr

    const switchParens = (string, int) => {
      console.log(int);
        const newArr = string.split("")
        newArr.splice(int, 2, '()')
        const stringify = newArr.join('')

        if(!arr.includes(stringify)) arr.push(stringify)

        if(stringify.includes(')(')){
          // find other parens in the string
          switchParens(stringify, stringify.indexOf(')('))
        }

        return arr
    }




  }
};

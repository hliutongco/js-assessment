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

  },

  validParentheses: function(n) {

  }
};

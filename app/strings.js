exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let currentLetter = null
    let counter = 0
    const newArr = str.split("").filter((letter) => {
      if(!currentLetter || currentLetter !== letter){
        counter = 0
      }
      currentLetter = letter
      counter++
      return counter > amount ? false : true
    })
    return newArr.join("")
  },

  wordWrap: function(str, cols) {
    let counter = 0
    let spaceCounter = 0
    const newArr = str.split("").map((letter) => {
      if(letter === " "){
        spaceCounter++
        if(counter === 1 && spaceCounter === 1 || counter === 2 && spaceCounter === 2){
          return " "
        }
        return "\n"
      } else {
        counter++
        return letter
      }
    })
    return newArr.join("");
  },

  reverseString: function(str) {
    const reverseArr = []
    const originalArr = str.split("")

    for(let i = originalArr.length - 1; i >= 0; i--){
      reverseArr.push(originalArr[i])
    }

    return reverseArr.join("")
  }
};

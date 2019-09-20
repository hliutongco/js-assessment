exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let counter = start
    const helper = () => {
      if(counter < end){
        console.log(counter);
        counter++
      }
      else {
        clearInterval(interval)
      }
    }
    const interval = setInterval(helper, 100)

    return {
      cancel: () => clearInterval(interval)
    }
  }
};

exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    // return {
    //   name: str2,
    //   greeting: str1,
    //   sayIt: function() {
    //     return `${this.greeting}, ${this.name}`
    //   }
    // }
    return new function(){
      this.name = str2
      this.greeting = str1
      this.sayIt = () => {
        return `${this.greeting}, ${this.name}`
      }
    }
  }
};

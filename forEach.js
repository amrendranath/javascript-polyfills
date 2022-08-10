const numbers = [1, 2, 3, 4];

Array.prototype.customForEach = function (callback, context) {
  for (let i = 0; i < this.length; i++) {
    if (this.indexOf(this[i]) > -1) {
      callback.call(context, this[i], i, this);
    }
  }
};

const words = ["adam", "ate", "an", "apple"];
const upperCaseList = [];
words.customForEach((word, index, context) => {
  upperCaseList.push(word.toUpperCase());
});
console.log(upperCaseList);

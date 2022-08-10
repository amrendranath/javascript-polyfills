const numbers = [1, 2, 3, 4];
const even = numbers.filter((item) => item % 2 === 0);
console.log("filter >>>", even);

Array.prototype.customFilter = function (callback, context) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      results.push(this[i]);
    }
  }
  return results;
};

const customeven = numbers.customFilter((item) => item % 2 === 0);
console.log("customFilter >>>", customeven);

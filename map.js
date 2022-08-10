const numbers = [1, 2, 3, 4];
numbers[10] = 34;

console.log("numbers >>", numbers);

const double = numbers.map((item, index) => {
  return item * 2;
});

console.log("map double >>", double);

Array.prototype.customMap = function (callback) {
  const results = Array(this.length);
  for (let i = 0; i < this.length; i++) {
    if (this.indexOf(this[i]) > -1) {
      results[i] = callback(this[i], i, this);
    }
  }
  return results;
};

const customDouble = numbers.customMap((item) => {
  return item * 2;
});

console.log("custom double >>", customDouble);

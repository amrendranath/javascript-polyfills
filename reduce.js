const nums = [1, 2, 3, 4, 5];
const double = nums.reduce((accum, current) => {
  accum.push(current * 2);
  return accum;
}, []);

console.log("double >>>", double);
const queryString = "cat=meow&duck=quack&dog=woof";
const queryObject = queryString.split("&").reduce((accum, current) => {
  const splitString = current.split("=");
  accum[splitString[0]] = splitString[1];
  return accum;
}, {});

console.log("queryObject >>>>", queryObject);

Array.prototype.customReduce = function (callback, initialValue) {
  let previousValue = initialValue || undefined;
  for (let i = 0; i < this.length; i++) {
    if (previousValue) {
      previousValue = callback.call(null, previousValue, this[i], i, this);
    } else {
      previousValue = this[i];
    }
  }
  return previousValue;
};

const customdouble = nums.customReduce((accum, current) => {
  accum.push(current * 2);
  return accum;
}, []);

console.log("customdouble >>>", customdouble);

const customqueryObject = queryString
  .split("&")
  .customReduce((accum, current) => {
    const splitString = current.split("=");
    accum[splitString[0]] = splitString[1];
    return accum;
  }, {});

console.log("customqueryObject >>>>", customqueryObject);

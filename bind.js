const person = {
  firstname: "Amrendra",
  lastname: "Nath",
};

function print(city, country) {
  console.log(
    this.firstname + " " + this.lastname + ", " + city + ", " + country
  );
}

const printName = print.bind(person, "Kanpur");
printName("India");

Function.prototype.customBind = function (...args) {
  const context = this;
  const thisParam = args[0];
  const otherParams = args.slice(1);
  return function (...args1) {
    context.apply(thisParam, [...otherParams, ...args1]);
  };
};

const cusPrintName = print.customBind(person, "Kanpur");
cusPrintName("India");

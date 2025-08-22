const callObj = {
  fName: "saurabh",
  lName: "chawda",
};
function getFullName(greet, countryName) {
  console.log(greet, countryName, this.fName + " " + this.lName);
}

const bindResult = getFullName.bind(callObj, ["Hello", "world"]);
console.log(bindResult("test"));

Function.prototype.myBind = function (object, args) {
  if (typeof this == "function" && Array.isArray(args)) {
    object.fn = this;
    return function (...newArgs) {
      return object.fn(...args, ...newArgs);
    };
  } else {
    throw new Error();
  }
};

const myBindResult = getFullName.myBind(callObj, ["Hello"]);
console.log(myBindResult("world"));

const callObj = {
  fName: "saurabh",
  lName: "chawda",
};
function getFullName(greet, countryName) {
  console.log(greet, countryName, this.fName + " " + this.lName);
}

getFullName.apply(callObj);

Function.prototype.myApply = function (object, args) {
  if (typeof this == "function") {
    if (args === undefined) {
      object.fn = this;
      object.fn();
      delete object.fn;
    } else if (Array.isArray(args)) {
      object.fn = this;
      object.fn(...args);
      delete object.fn;
    } else {
      throw new Error();
    }
  } else {
    throw new Error();
  }
};

getFullName.myApply(callObj);

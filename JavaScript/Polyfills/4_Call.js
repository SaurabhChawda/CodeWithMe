const callObj = {
  fName: "saurabh",
  lName: "chawda",
};
function getFullName(greet, countryName) {
  console.log(greet, countryName, this.fName + " " + this.lName);
}

getFullName.call(callObj);

Function.prototype.myCall = function (object, ...args) {
  if (typeof this == "function") {
    object.fn = this;
    object.fn(...args);
    delete object.fn;
  } else {
    return new TypeError("Not a function");
  }
};

getFullName.myCall(callObj, "Hello", "World");

function printName(city, country) {
  console.log(this.firstName, this.lastName, city, country);
}
const obj = {
  firstName: "abhinay",
  lastName: "kanduri",
};
Function.prototype.myApply = function (context, args) {
  context.printName = this;
  context.printName(...args);
};
printName.myApply(obj, ["pargi", "india"]);

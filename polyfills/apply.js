function printName(city, country) {
  console.log(this.firstName, this.lastName, city, country);
}
const obj = {
  firstName: "abhinay",
  lastName: "kanduri",
};

printName.apply(obj, ["pargi", "india"]);

Function.prototype.customApply = function (context, args) {
  context.printName = this;
  context.printName(args);
};

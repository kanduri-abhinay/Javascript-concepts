function printName(city, country) {
  console.log(this.firstName, this.lastName, city, country);
}
const obj = {
  firstName: "abhinay",
  lastName: "kanduri",
};

Function.prototype.customBind = function (context, ...args1) {
  const func = this;
  return function (...args2) {
    func.apply(context, [...args1, ...args2]);
  };
};
const printNameBind = printName.customBind(obj, "pargi");

printNameBind("india");

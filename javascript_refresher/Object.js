const person = {
  name: "Mohit",
  age: 29,
  greet() {
    console.log("Hi , I am " + this.name);
  },
};
console.log(person);
person.greet();

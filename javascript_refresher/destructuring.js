const person = {
  name: "mohit",
  age: 20,
  greet() {
    console.log("Hi my name is " + this.name);
  },
};
const personName = ({ name, age }) => {
  console.log("Hi my name is " + name + " and my age is " + age);
};
personName(person);
const hobbies = ["Sport", "Programming"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

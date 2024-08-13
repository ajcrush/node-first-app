const name = "mohit";
let age = 28;
const hasHobby = true;
let summarised = (userName, userAge, userHobby) => {
  return (
    "name is " +
    userName +
    " , age is " +
    userAge +
    " , and the user has hobby " +
    userHobby
  );
};
const add = (a, b) => a + b;
console.log(summarised(name, age, hasHobby));
console.log(add(1, 2));

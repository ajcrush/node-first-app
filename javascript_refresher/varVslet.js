const name = "mohit";
let age = 28;
const hasHobby = true;
age = 30;
name = "rohit";
function summarised(userName, userAge, userHobby) {
  return (
    "name is " +
    userName +
    " , age is " +
    userAge +
    " , and the user has hobby " +
    userHobby
  );
}
console.log(summarised(name, age, hasHobby));

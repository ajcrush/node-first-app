const hobbies = ["cooking", "sports"];
const copiedHobbies = [...hobbies];
hobbies.push("yo");
console.log(copiedHobbies);
console.log(hobbies);
// In JavaScript, the spread operator (...) performs a shallow copy of an object or array, not a deep copy.

// Shallow Copy with Spread Operator

// 	•	When you use the spread operator to copy an object or array, it creates a new top-level object or array.
//     However, if the original object or array contains nested objects or arrays, the references to these nested structures are copied,
//      not the structures themselves.
let originalArray = [1, 2, [3, 4]];
let shallowCopyArray = [...originalArray];

shallowCopyArray[2][0] = "Changed";

console.log(originalArray); // Output: [1, 2, ['Changed', 4]]
console.log(shallowCopyArray); // Output: [1, 2, ['Changed', 4]]
// In this example, modifying the nested array within shallowCopyArray also modifies the originalArray
// because they share the same reference to the nested array [3, 4].
let originalObject = { a: 1, b: { c: 2 } };
let shallowCopyObject = { ...originalObject };

shallowCopyObject.b.c = "Changed";

console.log(originalObject); // Output: {a: 1, b: {c: 'Changed'}}
console.log(shallowCopyObject); // Output: {a: 1, b: {c: 'Changed'}}

// In this example, modifying the nested object within shallowCopyObject also modifies the originalObject
// because they share the same reference to the nested object {c: 2}.

// for deep copy
// Using JSON.parse(JSON.stringify(obj))

// This method works well for simple objects and arrays that do not contain functions, undefined,
// or special objects like Date, RegExp, etc.

let originalObject1 = {
  a: 1,
  b: { c: 2, d: [3, 4] },
};

let deepCopyObject = JSON.parse(JSON.stringify(originalObject1));

deepCopyObject.b.c = "Changed";
deepCopyObject.b.d[0] = "New Value";

console.log(originalObject1); // Output: { a: 1, b: { c: 2, d: [3, 4] } }
console.log(deepCopyObject); // Output: { a: 1, b: { c: 'Changed', d: ['New Value', 4] } }

const toArray = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
};
console.log(toArray(1, 2, 3));

// but what if we have to pass 4 element to do that we use rest operator
const toArray1 = (...args) => args;
console.log(toArray1(1, 2, 3, 4, 5));

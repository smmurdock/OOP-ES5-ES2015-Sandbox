// BUILT IN CONSTRUCTORS
// String

const name1 = "Jeff"; // sets primitive value to variable
const name2 = new String("Jeff");

// name2.foo = "bar";

console.log(name1); // returns Jeff
console.log(name2); // returns 'Jeff' as object // can add properties

console.log(typeof name1); // returns string
console.log(typeof name2); // returns object - not a primitive value

if (name1 === "Jeff") {
  console.log("YES"); // returns yes
} else {
  console.log("NO");
}

if (name2 === "Jeff") {
  console.log("YES");
} else {
  console.log("NO"); // returns no
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(num1); // returns number
console.log(num2); // returns object, not number

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1); // returns true
console.log(bool2); // returns object

// Functions
const getSum1 = function(x, y) {
  return x + y;
};

console.log(getSum1(1, 1)); // returns number

const getSum2 = new Function("x", "y", "return 1 + 1");

console.log(getSum2(1, 1)); // same result but more code

// Object
const john1 = { name: "John" };
const john2 = new Object({ name: "John" });

console.log(john1);
console.log(john2); // same result but more code

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

console.log(arr1);
console.log(arr2); // same result but more code

// Regular Expressions
const re1 = /\w+/; // looking for word character that occurs one or more times
const re2 = new RegExp("\\w+");

console.log(re1);
console.log(re2); // loses backslash unless you escape character

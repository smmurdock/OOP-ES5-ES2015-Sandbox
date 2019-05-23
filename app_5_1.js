// Object Literal
const shanay = {
  name: "Shanay",
  age: 29
};

// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// console.log(this); // when 'this' is in the global scope, it applies to the window object

// this.alert(1);

// const brad = new Person("Brad", 36);
// const john = new Person("John", 30);

// console.log(john.age);

const brad = new Person("Brad", "9-10-1981");
console.log(brad.calculateAge());

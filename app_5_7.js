// SUB CLASSES
// Original Class
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// Sub class which is an extensio of Person class
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName); // calls the parent class constructor

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer("John", "Doe", "555-555-5555", "Standard");

console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());

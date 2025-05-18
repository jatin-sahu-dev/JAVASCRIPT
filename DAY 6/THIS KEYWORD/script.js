// 3. this Keyword Basics

// Problems:
// 	1.	Create a person object with name, age, and a method introduce() 
// that uses this to return "Hi, I'm John and I'm 25 years old."
// 	2.	Explain what this refers to in the introduce() method.
// 	3.	Add a nested object inside person (e.g. address with city) and add a method in it using this—observe how this behaves differently.

let person = {
  name: "John",
  age: 25,

  // Method using 'this'
  introduce: function () {
    return "Hi, I'm " + this.name + " and I'm " + this.age + " years old.";
  },

  // 3. Nested object
  address: {
    city: "Mumbai",

    showCity: function () {
      return "City is " + this.city;
    }
  }
};

console.log(person.introduce()); 
console.log(person.address.showCity()); 


// 	4.	Convert a regular method to an arrow function and explain how this changes.

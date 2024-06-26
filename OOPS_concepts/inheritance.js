// Inheritance
// Encapsulation

class Person {
  // to make name variable private
  #name;

  constructor(name) {
    console.log("person class constructor called");

    this.#name = name;
  }

  introduceSelf() {
    console.log(`Hello! My name is ${this.#name}`);
  }
}

class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    console.log("professor class constructor called");
    super(name);
    this.teaches = teaches;
  }

  grade() {
    console.log(
      `Your grade in ${this.teaches} is ${Math.floor(Math.random() * 100)}`
    );
  }
}

const amanProf = new Professor("Aman", "Science");
amanProf.introduceSelf();
amanProf.grade();

const neilProf = new Professor("Neil", "History");
neilProf.introduceSelf();
neilProf.grade();

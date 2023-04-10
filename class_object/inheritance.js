// This clas represents all that is common between Student and Metor
class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }

}

class Student extends Person {
  // stays in Student class since it's specific to student only
  enroll(cohort) {
    this.cohort = cohort;
  }
}

class mentor extends Person {
  //specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  //specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}


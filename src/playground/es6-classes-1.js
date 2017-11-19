
class Person {
  constructor(name = 'Anonymous',age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi. I am ${this.name}! I am ${this.age} years(s) old.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    
    if(this.hasMajor()) {
      description += ` Their majos is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGretting() {
    let gretting = super.getGretting();

    if(this.homeLocation) {
      gretting += ` I am visiting from ${this.homeLocation}.`
    }

    return gretting;
  }
}

const me = new Traveler('bruno temple',34,'engineering');
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());
// const add = function(a, b){
//   console.log(arguments);
//   return a + b;
// };

const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

// const user = {
//   name: 'Bruno',
//   cities: ['Sao Paulo', 'Perth', 'BH'],
//   printPlacesLived: function (){
//     const that = this;

//     this.cities.forEach(function (city) {
//       console.log(that.name + ' has lived in ' + city);
//     });
//   }
// };


// const user = {
//   name: 'Bruno',
//   cities: ['Sao Paulo', 'Perth', 'BH'],
//   printPlacesLived() {
//     this.cities.forEach((city) => {
//       console.log(this.name + ' has lived in ' + city);
//     });
//   }
// };

const user = {
  name: 'Bruno',
  cities: ['Sao Paulo', 'Perth', 'BH'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city  + '!');
  }
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
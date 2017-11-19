function square(x) {
  return x * x;
};

console.log(square(2));


// const squareArrow = (x) => {
//   return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(7));



const fullName = 'Bruno Temple';

let firstName = (fullname) => {
    return fullname.split(' ')[0];
};

console.log(firstName(fullName));

let firstName01 = (fullname) => fullname.split(' ')[0];

console.log(firstName01(fullName));
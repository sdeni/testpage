console.log("demo.js OK.");

let x = 10;
let y = 20;
let z = x + y;

console.log(z);

z = z + 'AAA!';

console.log(z);

z = 100;
z = z + Number('23');

console.log(z);

function squareEven(x) {
  if(x % 2 == 0) {
    return x;
  }
  else {
    return x*x;
  }
}

function factorial(x) {
  if(x > 1) {
    return x * factorial(x-1);
  }
  return 1;
}

// 6! = 1*2*3*4*5*6

for(let i=1;i<=10;i=i+1) {
  console.log(squareEven(i));
}

console.log("factorial: ", factorial(50));

let data = [];
for(let i=1;i<=10;i=i+1) {
  data.push(factorial(i));
}
console.log(data);

let person1 = {
  name: 'Alex',
  age: 15,
  car: {model: 'Tesla', year: 2020},
  friends: ['Mary', 'Sophie', 'Serge']
};

let person2 = {
  name: 'Mary',
  age: 17,
  car: {
    model: 'Maybah',
    year: 2020
  },
  friends: ['Alex', 'Sophie', 'Serge']
};

let persons = [person1, person2];

console.log(persons);

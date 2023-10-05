function sum(a, b) {
  //pure
  return a + b;
}

console.log(sum(2, 3));
console.log(sum(2, 33));

function greeting(name) {
  //pure
  return `Welcome inside the company ${name}`;
}

console.log(greeting('Nissim'));
console.log(greeting('Paul'));

let lifes = 10;

const bonus = 15;

lifes = lifes + bonus;

function die() {
  //impure
  return lifes--;
}

function loto() {
  //impure
  return Math.random();
}

console.log(loto());

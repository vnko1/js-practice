let a = 1;

let b = a;

a = 2;
console.log(b);

let objA = { name: 1 };
let objB = objA;

objB.name = 2;

console.log(objA);

let foo = () => {
  console.log(1);
};

let goo = foo;

goo = () => {
  console.log(2);
};

foo();
goo();

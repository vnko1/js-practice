// let a = 1;

// let b = a;

// a = 2;
// console.log(b);

// let objA = { name: 1 };
// let objB = objA;

// objB.name = 2;

// console.log(objA);

// let foo = () => {
//   console.log(1);
// };

// let goo = foo;

// goo = () => {
//   console.log(2);
// };

// foo();
// goo();

// const a = 'Hello';

// const b = 'world';
// console.log(a + b);
// console.log(!!(+'123' + 'b'));

// const age = 41;
// const otherAge = 40;
// const value =
//   age < 45 ? (age < otherAge ? 'is older' : 'is nos so older') : 'is younger';

// console.log(value);

// function foo() {
//   const name = 'Bob';

//   function noo() {
//     const name = 'John';
//     too();
//   }

//   function too() {
//     console.log(name);
//     console.log(this);
//     function boo() {
//       console.log(this);
//     }
//     boo();
//   }
//   noo();
// }

// foo();

// function multiply(a, b) {
//   return a * b;
// }

// function multiply2(b) {
//   return multiply(2, b);
// }

// console.log(multiply2(2));

// const multiply3 = multiply.bind(null, 3, 10);

// console.log(multiply3());

// const multiply4 = multiply.bind(null, 4);

// console.log(multiply4(5));

// const multiply5 = multiply.call(null, 5, 10);

// function multiply6(a) {
//   return multiply.call(null, 6, a);
// }

// console.log(multiply6(6));

// class User {
//   constructor(par) {
//     this.name = par.name;
//     this.age = par.age;
//   }

//   getName() {
//     console.log('object');
//     return this.name;
//   }
// }

// class Car extends User {
//   constructor({ type, ...rest }) {
//     super(rest);
//     this.type = type;
//   }
//   getCar() {
//     return super.getName();
//   }
// }
// const car = new Car({ name: 'AA', age: 20, type: 'BMW' });

// console.log(car.getCar());
// --------------------------------------------------

// function counter() {
//   let count = 0;
//   function inreaseCount() {
//     count += 1;
//   }
//   function getCount() {
//     return count;
//   }

//   return { inreaseCount, getCount };
// }

// const foo = counter();
// foo.inreaseCount();
// foo.inreaseCount();
// console.log(foo.getCount());
// -----------------------------------------------------
// Пример самовызывающей функции

// const counter = (() => {
//   let count = 0;
//   function inreaseCount() {
//     count += 1;
//   }
//   function getCount() {
//     return count;
//   }

//   return { inreaseCount, getCount };
// })();

// counter.inreaseCount();
// counter.inreaseCount();
// counter.inreaseCount();
// console.log(counter.getCount());
// --------------------------------------------
// var a = 7;

// function foo() {
//   debugger;
//   console.log('before', a);
//   var a = 10;
//   console.log('after', a);
// }

// foo();
// --------------------------------------------
// function foo() {
//   return 'decl';
// }
// console.log(foo());
// foo = 2;
// console.log(foo);
// --------------------------------------------
// console.log(
//   [].map
//     .call('hello', item => item)
//     .reverse()
//     .join(''),
// );

// console.log('hello'.map(item => item));
// --------------------------------------------
// const exampleObj = {
//   data1: 10,
//   cbfunc: null,

//   f1(cb) {
//     cb();
//   },
//   f3(cb) {
//     this.cbfunc = cb;
//     this.cbfunc();
//     cb.call(this);
//   },
// };
// exampleObj.f3(function () {
//   console.log(this);
// });
// --------------------------------------------
// 'use strict';
// const f1 = () => {
//   console.log(this);
// };
// f1();

// const f2 = function () {
//   console.log(this);
// }.bind(this);
// f2();

// const obj = {
//   a: 1,
//   getcontext: () => {
//     console.log(this);
//   },
// };

// const obj = {
//   a: 1,
//   getcontext() {
//     [(1, 2, 3)].forEach(el => {
//       console.log(this);
//     });
//   },
// };

// obj.getcontext();
// obj.getcontext();
// [(1, 2, 3)].forEach(el => {
//   console.log(this);
// });

const obj = {
  a: 2,
};

const f1 = () => {
  console.log(this);
};

function f2() {
  console.log(this);
}

const f1C = f1.bind(obj);
const f2C = f2.bind(obj);

f1();
f2();
f1C();
f2C();
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------

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

// --------------------------------------------

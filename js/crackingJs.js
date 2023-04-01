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

// const obj = {
//   a: 2,
// };

// const f1 = () => {
//   console.log(this);
// };

// function f2() {
//   console.log(this);
// }

// const f1C = f1.bind(obj);
// const f2C = f2.bind(obj);

// f1();
// f2();
// f1C();
// f2C();
// --------------------------------------------
// const multiply = (a = 1, b = 3) => a * b;
// const multiply5 = multiply.bind(null, 5);
// console.log(multiply(2, 3));
// console.log(multiply5(10));
// console.log(multiply());
// console.log(multiply5());
// --------------------------------------------
// function foo1() {
//   return function (a) {
//     console.log(a);
//   };
// }
// const foo2 = foo1();
// console.log(foo2);
// foo2(2);
// --------------------------------------------

// const arr = [1, 2, 3, 4, 5];
// const iterator = arr[Symbol.iterator]();
// console.log(iterator);
// console.log(iterator.next().value);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// --------------------------------------------
// function* makeGenerator() {
//   console.log(1, get);
//   yield 'First action';
//   console.log(2);
//   yield `Second action ${get()}`;
//   yield get();
//   function get() {
//     console.log('Hello');
//     return 'Hello';
//   }
// }

// const gen = makeGenerator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// gen.next();
// gen.next();

// function* makeGenerator() {
//   console.log('start');
//   let a = yield 1;
//   console.log(a);
//   a = yield 2;
//   console.log(a + ' world');
// }

// const gen = makeGenerator();

// console.log(gen.next());
// console.log(gen.next('Bob'));
// console.log(gen.next('Hello'));
// console.log(gen.next('Good'));
// console.log(gen.next('Hello'));

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// gen.next();
// gen.next();
// gen.next();

// --------------------------------------------

// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   setTimeout(() => console.log('i', i), 1000);
// }
// --------------------------------------------

// function showBg() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log('1 is done');
//       res('done');
//     }, 1000);
//   });
// }

// function slideBar() {
//   console.log('sync 2 works');
//   setTimeout(() => {
//     console.log('async 2 works');
//   }, 1000);
// }

// showBg().then(text => {
//   console.log('text', text);
//   slideBar();
// });

// console.log(
//   showBg().then(text => {
//     console.log('text', text);
//     slideBar();
//   }),
// );
// const prom = showBg();
// console.log(
//   prom.then(text => {
//     console.log('text', text);
//     slideBar();
//   }),
// );

// function showBg(fva) {
//   console.log(fva);
//   return value => {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         console.log(value);
//         res(value);
//       }, 1000);
//     });
//   };
// }

// const foo = showBg('1');
// foo('2').then(val => {
//   console.log('then', val);
// });

// function prom(mess) {
//   return new Promise(res => {
//     setTimeout(() => {
//       res(mess);
//     }, 4000);
//   });
// }

// Promise.all([prom('1'), prom('2'), prom('3')]).then(console.log);

// Promise.race([prom('1'), prom('2'), prom('3')]).then(console.log);
// --------------------------------------------
// const gallery = function () {
//   const state = {};
//   const mount = () => {
//     console.log('object');
//   };
//   const nextSlide = () => {};
//   const prevSlide = () => {};
//   const toFirstSlide = () => {};
//   const unmount = () => {};

//   return { state, mount, nextSlide, prevSlide, toFirstSlide, unmount };
// };

// gallery().mount();
// const gallery1 = gallery();
// gallery1.mount();

// const gallery = (function () {
//   const state = {
//     node: null,
//     images: [],
//     settings: {},
//     currentSlide: 1,
//   };

//   const goToSlide = () => {};

//   const mount = (node, images, settings) => {
//     state.node = node;
//     state.images = images;
//     state.settings = { ...state.settings, ...settings };
//   };

//   const nextSlide = () => {
//     const nextSlide = state.currentSlide + 1;
//     goToSlide(nextSlide);
//     state.currentSlide = nextSlide;
//   };

//   const prevSlide = () => {
//     const prevSlide = state.currentSlide - 1;
//     goToSlide(prevSlide);
//     state.currentSlide = prevSlide;
//   };

//   const toFirstSlide = () => {
//     const firstSlide = 1;
//     goToSlide(firstSlide);
//     state.currentSlide = firstSlide;
//   };

//   const unmount = () => {
//     state.node.parentElement.removeChild(state.node);
//   };

//   return { state, mount, nextSlide, prevSlide, toFirstSlide, unmount };
// })();

// gallery.mount();

// --------------------------------------------

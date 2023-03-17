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

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

function saveUser(user) {
  console.log('User saved: ', user.name);
}

function checkPermissionDecorator(cb) {
  return user => {
    if (user.isAdult()) {
      cb(user);
      return;
    }
    console.log('User not saved: ', user.name);
  };
}

const user1 = {
  name: 'Bob',
  age: 20,
  isAdult: function () {
    return this.age >= 18;
  },
};

const user2 = {
  name: 'John',
  age: 17,
  isAdult: function () {
    return this.age >= 18;
  },
};

const addUser = checkPermissionDecorator(saveUser);

addUser(user1);
addUser(user2);
// console.log(user2.isAdult());

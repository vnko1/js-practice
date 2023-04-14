// console.log(a);

var f = function () {
  console.log(1);
};

var execute = function (f) {
  setTimeout(f, 1000);
};

f = function () {
  console.log(2);
};

// execute(f); // что выведет в консоль и почему

console.log(d);

d = 2;

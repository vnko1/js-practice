Array.prototype.toup = function () {
  console.log(this);
};
const s = 'hello';

[1, 2].toup();
String.prototype.toup = function () {
  console.log(this);
};

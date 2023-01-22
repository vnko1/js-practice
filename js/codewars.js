// for (let i = 1; i <= 60; i++) {
//   let quarterValue = Math.ceil(i / 15);
//   console.log(`${i} - це ${quarterValue} чверть.`);
// }

// const timeValue = Math.round(Math.random() * (60 - 1) + 1);
// const timeValue = 61;

// if (timeValue <= 15) {
//   console.log(`1 чверть години`);
// } else if (timeValue > 15 && timeValue <= 30) {
//   console.log(`2 чверть години`);
// } else if (timeValue > 30 && timeValue <= 45) {
//   console.log(`3 чверть години`);
// } else if (timeValue > 45 && timeValue < 60) {
//   console.log(`4 чверть години`);
// } else {
//   const hoursValue = Math.floor(timeValue / 60);
//   const quarterValue = Math.ceil((timeValue % 60) / 15);
//   if (timeValue % 60 === 0) {
//     console.log(`${hoursValue} година`);
//   } else {
//     console.log(`${quarterValue} чверть ${hoursValue} години `);
//   }
// }

// const timeValue = 360;
// if (timeValue <= 60) {
//   console.log(`${Math.ceil(timeValue / 15)} чверть години`);
// } else {
//   const hoursValue = Math.floor(timeValue / 60);
//   const quarterValue = Math.ceil((timeValue % 60) / 15);
//   if (timeValue % 60 === 0) {
//     console.log(`${hoursValue} година`);
//   } else {
//     console.log(`${quarterValue} чверть ${hoursValue} години `);
//   }
// }

// function descendingOrder(n) {
//   const arr = Array.from(String(n));

//   return arr
//     .sort((a, b) => b - a)
//     .map(x => parseInt(x))
//     .reduce(function (accum, digit) {
//       console.log(digit);
//       return accum * 10 + digit;
//     }, 0);
// }
// descendingOrder(123);

// function capitals(word) {
//   const indexArr = [];

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === word[i].toUpperCase()) {
//       indexArr.push(i);
//       // console.log();
//     }
//   }
//   return indexArr;
// }

// var humanYearsCatYearsDogYears = function (humanYears) {
//   const arr = [];
//   let catYears = 0;
//   let dogYears = 0;
//   for (let i = 1; i <= humanYears; i++) {
//     if (i === 1) {
//       catYears += 15;
//       dogYears += 15;
//     }
//     if (i === 2) {
//       catYears += 9;
//       dogYears += 9;
//     }
//     if (i > 2) {
//       catYears += 4;
//       dogYears += 5;
//     }
//   }

//   arr.push(humanYears, catYears, dogYears);

//   return arr;
// };

// console.log(humanYearsCatYearsDogYears(10));

// function unusualFive() {
//   return 'fivee'.length;
// }

// console.log(unusualFive());

// function getSum(a, b) {
//   let total = 0;
//   if (a === b) {
//     return b;
//   }
//   if (a < b) {
//     for (let i = a; i <= b; i++) {
//       total += i;
//     }
//   }
//   if (a > b) {
//     for (let i = a; i >= b; i--) {
//       total += i;
//     }
//   }
//   return total;
// }

// console.log(getSum(0, -3));

// function arrayDiff(a, b) {
//   const arr = [];
//   for (let i = 0; i < a.length; i++) {
//     if (b.indexOf(a[i]) === -1) {
//       arr.push(a[i]);
//     }
//   }
//   return arr;
// }

// console.log(arrayDiff([], [1, 2]));

// function arrayDiff(a, b) {
//   if (b.length == 0 || a.length == 0) return a;
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] == b[j]) {
//         a.splice(i, 1);
//         console.log(a[i]);
//         i--;
//       }
//     }
//   }
//   return a;
// }

// arrayDiff([1, 2], [1]);

// const minValue = (values) =>
//   Number(
//     values
//       .reduce((acc, el) => {
//         if (!acc.includes(el)) acc.push(el);
//         return acc;
//       }, [])
//       .sort((a, b) => a - b)
//       .join("")
//   );
// console.log(minValue([5, 6, 9, 9, 7, 6, 4]));

// function count(string) {
//   return [...string].reduce((acc, el, index, array) => {
//     if (!acc.hasOwnProperty(el)) {
//       acc[el] = 0;
//     }
//     acc[el] += 1;
//     return acc;
//   }, {});
// }

// console.log(count('aba'));

// function sortArray(array) {
//   for (let first = 0; first < array.length; first++) {
//     for (let second = first; second < array.length; second++) {
//       if (
//         (array[first] % 2 === 1 || array[first] % 2 === -1) &&
//         (array[second] % 2 == 1 || array[second] % 2 == -1) &&
//         array[first] > array[second]
//       ) {
//         const temp = array[first];
//         array[first] = array[second];
//         array[second] = temp;
//       }
//     }
//   }
//   return array;
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4]));

// function findUniq(arr) {
//   const obj = arr.reduce((acc, el) => {
//     if (!acc.hasOwnProperty(el)) {
//       acc[el] = 0;
//     }
//     acc[el] += 1;
//     return acc;
//   }, {});

//   return Number(Object.keys(obj).filter((el) => obj[el] === 1));
// }
// console.log(findUniq([1, 0, 1]));

// function findOdd(A) {
//   const obj = A.reduce((acc, el) => {
//     if (!acc.hasOwnProperty(el)) {
//       acc[el] = 0;
//     }
//     acc[el] += 1;
//     return acc;
//   }, {});
//   console.log(obj);
//   return Number(
//     Object.keys(obj).filter((el) => obj[el] % 2 === 1 || obj[el] % 2 === -1)
//   );
// }

// console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));

// function gimme(triplet) {
//   const sortedArray = [...triplet].sort((a, b) => a - b);
//   console.log(sortedArray);

//   return triplet.indexOf(sortedArray[1]);
// }

// console.log(gimme([5, 10, 14]));

// function validateUsr(username) {
//   /**
//     - `^`        Start from the beginning of the string.
//     - `[]`       Allow any character specified, including...
//     - `a-z`      anything from a to z,
//     - `0-9`      anything from 0 to 9,
//     - `_`        and underscore.
//     - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
//     - `$`        End the string right after specified amount of allowed characters is given.
//   */
//   const validator = /^[a-z0-9_]{4,16}$/;

//   return validator.test(username);
// }

// function twoSum(numbers, target) {
//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let k = i + 1; k < numbers.length; k++) {
//       if (numbers[i] + numbers[k] === target) {
//         return [i, k];
//       }
//     }
//   }
// }

// console.log(twoSum([1, 2, 2, 3], 5));

// function solution(string) {
//   const arr = string.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i].toUpperCase()) {
//       arr.splice(arr.indexOf(arr[i]), 1, ` ${arr[i]}`);
//     }
//   }
//   return arr.join("");
// }

// function moveZeros(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arr.splice(arr.indexOf(arr[i]), 1);
//       arr.push(0);
//     }
//   }
//   return arr;
// }
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// function duplicateCount(text) {
//   const arr = text.toLowerCase().split('');
//   const obj = arr.reduce((acc, el) => {
//     if (!acc.hasOwnProperty(el)) {
//       acc[el] = 0;
//     }
//     acc[el] += 1;
//     return acc;
//   }, {});

//   return Object.values(obj).reduce((acc, el) => {
//     if (el > 1) {
//       acc += 1;
//     }
//     return acc;
//   }, 0);
// }

// console.log(duplicateCount('aAAbbccde'));

// function toCamelCase(str) {
//   if (str.length === 0) {
//     return str;
//   }
//   let normalizedStr = str;
//   if (str.includes('-')) {
//     normalizedStr = str.replaceAll('-', '_');
//   }

//   const arr = normalizedStr.split('_');
//   const newStr = arr.map(el => el.replace(el[0], el[0].toUpperCase())).join('');
//   if (str[0] === newStr[0].toLowerCase()) {
//     return newStr.replace(newStr[0], newStr[0].toLowerCase());
//   }
//   return newStr;
// }

// console.log(toCamelCase('A_cat-Was-Pippi'));

// function maxSum(arr, range) {
//   const arrOfValue = [];
//   for (const el of range) {
//     let total = 0;
//     for (let i = el[0]; i <= el[1]; i++) {
//       total += arr[i];
//     }

//     arrOfValue.push(total);
//   }

//   return Math.max(...arrOfValue);
// }
// console.log(
//   maxSum(
//     [1, -2, 3, 4, -5, -4, 3, 2, 1],
//     [
//       [1, 3],
//       [0, 4],
//       [6, 8],
//     ]
//   )
// );

// var Ghost = function () {
//   var colors = ['white', 'yellow', 'purple', 'red'];
//   var colorIndex = Math.floor(Math.random() * colors.length);
//   this.color = colors[colorIndex];
// };

// теж саме що this.color = ["white", "yellow", "purple", "red"][Math.floor(Math.random() * 4)]

// class Animal {
//   constructor(name, age, legs = 0, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// class Shark extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 0, "shark", status);
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 4, "cat", status);
//   }

//   introduce() {
//     return super.introduce() + "  Meow meow!";
//   }
// }
// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, "dog", status);
//     this.master = master;
//   }
//   greetMaster() {
//     return `Hello ${this.master}`;
//   }
// }



class DataSet {
  constructor(...data) {
    this.data = data;
    this.mean = this.setMean();

    this.variance = this.setVar();

    this.stdDeviation = Math.sqrt(this.variance);
  }

  setMean() {
    const means =
      this.data.reduce((acc, el) => {
        acc += el;
        return acc;
      }, 0) / this.data.length;

    this.mean = means;
    return this.mean;
  }

  setVar() {
    this.variance =
      this.data
        .map((v) => Math.pow(v - this.mean, 2))
        .reduce((a, b) => a + b, 0) / this.data.length;
    this.stdDeviation = Math.sqrt(this.variance);
    return this.variance;
  }
}
var myData1 = new DataSet(1, 2, 3, 4, 5, 6, 7);
console.log(myData1.setMean());
console.log(myData1);

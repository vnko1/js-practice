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

var humanYearsCatYearsDogYears = function (humanYears) {
  const arr = [];
  let catYears = 0;
  let dogYears = 0;
  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    }
    if (i === 2) {
      catYears += 9;
      dogYears += 9;
    }
    if (i > 2) {
      catYears += 4;
      dogYears += 5;
    }
  }

  arr.push(humanYears, catYears, dogYears);

  return arr;
};

console.log(humanYearsCatYearsDogYears(10));

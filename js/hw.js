// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// async function logNumber() {
//   setInterval( () => {
//     getData();
//   }, 3000);
// }

// function foo() {
//   const data = arr.splice(0, 3);
//   return new Promise(onres => {
//     setTimeout(() => {
//       onres(data);
//     }, 2000);
//   });
// }

// function getData() {
//   foo().then(data => {
//     data.map(el => {
//       console.log(el);
//     });
//   });
// }
// logNumber();

// const pokeList = [
//   'https://pokeapi.co/api/v2/pokemon/1',
//   'https://pokeapi.co/api/v2/pokemon/2',
//   'https://pokeapi.co/api/v2/pokemon/3',
//   'https://pokeapi.co/api/v2/pokemon/4',
//   'https://pokeapi.co/api/v2/pokemon/5',
//   'https://pokeapi.co/api/v2/pokemon/6',
//   'https://pokeapi.co/api/v2/pokemon/7',
//   'https://pokeapi.co/api/v2/pokemon/8',
//   'https://pokeapi.co/api/v2/pokemon/9',
// ];

// function fetchPokemon(pokemon) {
//   return new Promise(async res => {
//     await fetch(pokemon)
//       .then(data => data.json())
//       .then(pokemon => console.log(pokemon));
//     res();
//   });
// }

// async function logPokemon() {
//   for (let i = 0; i < pokeList.length; i++) {
//     await fetchPokemon(pokeList[i]);
//   }
// }
// logPokemon();

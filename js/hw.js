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

// ==============================================
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

// function fetchPokemon(pokemon) {
//   return new Promise(res => {
//     fetch(pokemon)
//       .then(data => data.json())
//       .then(pokemon => res(pokemon));
//   });
// }

// async function fetchPokemon(pokemon) {
//   const pokeData = await fetch(pokemon);
//   return pokeData.json();
// }

// async function logPokemon() {
//   for (let i = 0; i < pokeList.length; i++) {
//     const poke = await fetchPokemon(pokeList[i]);
//     console.log(poke);
//   }
// }
// logPokemon();

// ==================================
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

// const iterator = pokeList[Symbol.iterator]();
// // console.log(iterator.next());

// async function fetchPokemon(pokemon) {
//   const pokeData = await fetch(pokemon);
//   return pokeData.json();
// }

// async function logPokemon(curePokeIt) {
//   if (curePokeIt.done) {
//     console.log('done!!');
//     return;
//   }
//   const poke = await fetchPokemon(curePokeIt.value);
//   console.log(poke);
//   logPokemon(iterator.next());
// }

// logPokemon(iterator.next());

// ======================================
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
//   'https://pokeapi.co/api/v2/pokemon/10',
// ];

// const newPokemonList = [...pokeList];

// async function fetchPokemon(pokemon) {
//   const data = await fetch(pokemon);
//   return data.json();
// }

// async function getPokemon() {
//   if (!newPokemonList.length) {
//     console.log('done');
//     return;
//   }
//   const sliced = newPokemonList.splice(0, 3);

//   const pokeData = await Promise.all(sliced.map(el => fetchPokemon(el)));
//   console.log(pokeData);

//   getPokemon();
// }
// getPokemon();
// =====================================================
const pokeList = [
  'https://pokeapi.co/api/v2/pokemon/1',
  'https://pokeapi.co/api/v2/pokemon/2',
  'https://pokeapi.co/api/v2/pokemon/3',
  'https://pokeapi.co/api/v2/pokemon/4',
  'https://pokeapi.co/api/v2/pokemon/5',
  'https://pokeapi.co/api/v2/pokemon/6',
  'https://pokeapi.co/api/v2/pokemon/7',
  'https://pokeapi.co/api/v2/pokemon/8',
  'https://pokeapi.co/api/v2/pokemon/9',
  'https://pokeapi.co/api/v2/pokemon/10',
];

const pokemonListEl = document.querySelector('.poke-list');

const newPokemonList = [...pokeList];

async function fetchPokemon(pokemon) {
  const data = await fetch(pokemon);
  return data.json();
}

async function getPokemon() {
  if (!newPokemonList.length) {
    console.log('done');
    return;
  }
  const sliced = newPokemonList.splice(0, 3);

  const pokeData = await Promise.all(sliced.map(el => fetchPokemon(el)));

  showPokemon(pokeData);
  getPokemon();
}

function showPokemon(data) {
  const markUp = data
    .map(pokemon => {
      return `<div><p>${pokemon.name}</p><img onload src=${pokemon.sprites.back_default} alt='pokemon'/></div>`;
    })
    .join('');

  pokemonListEl.insertAdjacentHTML('beforeend', markUp);
}

getPokemon();
// ===================================================================

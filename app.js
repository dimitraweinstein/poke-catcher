// import functions and grab DOM elements
import rawPokemonData from './pokemon-data.js';
import { capturePokemon, encounterPokemon, getTotalCaptured, getTotalEncounters } from './local-storage-utils.js';

// initialize state
const button = document.querySelector('#catch-button');
const radio1 = document.querySelector('#poke-1');
const radio2 = document.querySelector('#poke-2');
const radio3 = document.querySelector('#poke-3');
const img1 = document.querySelector('#poke-img-1');
const img2 = document.querySelector('#poke-img-2');
const img3 = document.querySelector('#poke-img-3');

renderThreePokemon();

getTotalEncounters();

button.addEventListener('click', () => {
    const selectedRadioButton = document.querySelector(':checked');
    const selectedPokemon = selectedRadioButton.value;

    capturePokemon(selectedPokemon);

    const totalCaptured = getTotalCaptured();
    const totalEncounters = getTotalEncounters();

    if (totalCaptured >= 10 && totalEncounters >= 1) {
        window.location.replace('./results/index.html');
    } else {
        renderThreePokemon();
    }
});


function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * rawPokemonData.length);

    const randomPokemon = rawPokemonData[randomIndex];
    
    return randomPokemon;    
}


function renderThreePokemon() {
    let pokemon1 = getRandomPokemon();
    let pokemon2 = getRandomPokemon();
    let pokemon3 = getRandomPokemon();

    while (
        pokemon1.id === pokemon2.id
        || pokemon2.id === pokemon3.id
        || pokemon1.id === pokemon3.id 
    )

    {
        pokemon1 = getRandomPokemon();
        pokemon2 = getRandomPokemon();
        pokemon3 = getRandomPokemon();
    }

    encounterPokemon(pokemon1.id);
    encounterPokemon(pokemon2.id);
    encounterPokemon(pokemon3.id);


    img1.src = pokemon1.url_image;
    img2.src = pokemon2.url_image;
    img3.src = pokemon3.url_image;

    radio1.value = pokemon1.id;
    radio2.value = pokemon2.id;
    radio3.value = pokemon3.id;
}
// set event listeners to update state and DOM
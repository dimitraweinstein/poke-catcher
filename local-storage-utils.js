import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';

export function getPokeDex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);

    const pokedex = JSON.parse(stringyPokedex);

    if (!pokedex) {
        return [];
    }

    return pokedex;

}

export function setPokeDex(newPokedex) {
    const stringyPokedex = JSON.stringify(newPokedex);

    localStorage.setItem(POKEDEX, stringyPokedex);
}

export function encounterPokemon(selectedPokemon) {
    const pokedex = getPokeDex();
    const matchPokemon = findById(pokedex, selectedPokemon);

    if (matchPokemon) {
        matchPokemon.encountered++;
    }
    else {
        const newPoke = {
            id: selectedPokemon,
            captured: 0,
            encountered: 1
        };

        pokedex.push(newPoke);
    }
    setPokeDex(pokedex);
}

export function capturePokemon(selectedPokemon) {
    const pokedex = getPokeDex();

    const matchPokemon = findById(pokedex, selectedPokemon);

    matchPokemon.captured++;

    setPokeDex(pokedex);
}

export function getTotalCaptured() {
    let total = 0;
    const pokedex = getPokeDex();

    for (let poke of pokedex) {
        total += poke.captured;
    }
    return total;
}
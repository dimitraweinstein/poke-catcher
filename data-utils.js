import { getPokeDex } from './local-storage-utils.js';
import { findById } from './utils.js';
import pokemon from './pokemon-data.js';


const pokedex = getPokeDex();

export function mungeCaptured(someArray) {
    const results = [];

    for (let object of someArray) {
        results.push(object.captured);
    }
    
    return results;
}

export function mungeNames(someArray) {
    const results = [];

    for (let object of someArray) {
        const data = findById(pokemon, object.id);
        console.log(data.pokemon);
        results.push(data.pokemon);
    }
    return results;
}

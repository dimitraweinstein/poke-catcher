import { mungeCaptured, mungeNames } from '../data-utils.js';
import { getPokeDex, setPokeDex } from '../local-storage-utils.js';

const pokedex = getPokeDex();
// console.log(pokedex);
const captured = mungeCaptured(pokedex);
// console.log(captured);
const names = mungeNames(pokedex);
// console.log(names);

let ctx = document.getElementById('myChart').getContext('2d');
const resetButton = document.getElementById('reset-button');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Captured Pokemon',
            data: captured,
            backgroundColor: [
                'rgba(35, 61, 77, 0.2)',
                'rgba(254, 127, 45, 0.2)',
                'rgba(252, 202, 70, 0.2)',
                'rgba(161, 193, 129, 0.2)',
                'rgba(97, 155, 138, 0.2)',
                'rgba(174, 32, 18, 0.2)'
            ],
            borderColor: [
                'rgba(35, 61, 77, 1)',
                'rgba(254, 127, 45, 1)',
                'rgba(252, 202, 70, 1)',
                'rgba(161, 193, 129, 1)',
                'rgba(97, 155, 138, 1)',
                'rgba(174, 32, 18, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

resetButton.addEventListener('click', () => {
    window.location.replace('../');
    setPokeDex([]);
});
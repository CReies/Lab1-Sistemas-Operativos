import * as readline from 'readline';
import { FIFO } from './algorithms';
import { readJSON } from './functions';
import { process } from './types';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const processes = readJSON('./src/processes.json') as process[];

const quantumTime = 1000;

function ask() {
	rl.question('Que algoritmo de planificación le gustaría utilizar?\n1- FIFO\n2- ', input => {
		switch (input) {
			case '1':
				rl.close();
				FIFO(processes, quantumTime);
				break;

			default:
				console.log('\nPor favor ingrese un valor válido');
				setTimeout(() => {
					console.log();
					ask();
				}, 2000);
				break;
		}
	});
}

ask();

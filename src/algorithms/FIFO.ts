import { sleep, writeJSON } from '../functions';
import changeProcessState from '../functions/changeProcessState';
import { process } from '../types';

const FIFO = (processes: process[], quantumTime: number) => {
	processes.forEach(process => {
		changeProcessState(process, 'Ready');
	});

	writeJSON('../processes.json', processes);

	async function runProcesses(processes: process[]) {
		for (let i = 0; i < processes.length; i++) {
			const process = processes[i];
			changeProcessState(process, 'Running');
			console.log('...');

			await sleep(quantumTime * process.quantum);

			if (!process.crash) {
				changeProcessState(process, 'Finished');
				console.log();
			} else {
				changeProcessState(process, 'Aborted');
				console.log();
			}
		}
	}

	runProcesses(processes);

	writeJSON('../processes.json', processes);
};

export default FIFO;

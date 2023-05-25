import { changeProcessState, sleep } from '../functions';
import { process } from '../types';

const RR = (processes: process[], quantumTime: number) => {
	let totalQuantum = 0;
	processes.forEach(process => {
		changeProcessState(process, 'Ready');
		totalQuantum += process.quantum;
	});

	async function runProcesses(processes: process[]) {
		for (let i = 0; i < totalQuantum; i++) {
			const processesLength = processes.length;
			let process = processes[i % processesLength];
			let skippedProcesses = 0;

			while (process.quantum === 0) {
				skippedProcesses++;
				process = processes[(i + skippedProcesses) % processesLength];
			}

			changeProcessState(process, 'Running');
			console.log('...');
			await sleep(quantumTime);

			process.quantum -= 1;

			if (process.quantum === 0) {
				if (!process.crash) {
					changeProcessState(process, 'Finished');
					console.log();
				} else {
					changeProcessState(process, 'Aborted');
					console.log();
				}
			} else {
				changeProcessState(process, 'Waiting');
				console.log();
			}
		}
	}

	runProcesses(processes);
};

export default RR;

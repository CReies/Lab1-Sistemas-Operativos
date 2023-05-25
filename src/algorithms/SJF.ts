import { changeProcessState, sleep } from '../functions';
import { process } from '../types';

const SJF = (processes: process[], quantumTime: number) => {
	processes.forEach(process => {
		changeProcessState(process, 'Ready');
	});

	async function runProcesses(processes: process[]) {
		processes.sort((a, b) => a.quantum - b.quantum);

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
};

export default SJF;

import { writeJSON } from '@src/functions';
import changeProcessState from '@src/functions/changeProcessState';
import { process } from '@src/types';

const FIFO = (processes: process[], quantumTime: number) => {
	processes.forEach(process => {
		changeProcessState(process, 'Ready');
	});

	writeJSON('../processes.json', processes);

	processes.forEach(process => {
		changeProcessState(process, 'Running');
		setTimeout(() => {
			if (!process.crash) {
				changeProcessState(process, 'Finished');
			} else {
				changeProcessState(process, 'Aborted');
			}
		}, quantumTime * process.quantum);
	});

	writeJSON('../processes.json', processes);
};

export default FIFO;

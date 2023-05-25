import { process } from '../types';

const changeProcessState = (process: process, newState: process['state']) => {
	console.log(`${process.name} #${process.PID} - ${process.state} => ${newState}`);
	process = { ...process, state: newState };
	return process;
};

export default changeProcessState;

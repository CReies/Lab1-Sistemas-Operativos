export type process = {
	PID: number;
	name: string;
	state: 'New' | 'Ready' | 'Running' | 'Finished' | 'Waiting' | 'Aborted';
	quantum: number;
	crash: boolean;
};

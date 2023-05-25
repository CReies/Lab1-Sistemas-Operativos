import * as fs from 'fs';

const writeJSON = (route: string, data: Object): void => {
	const content = JSON.stringify(data, null, 2);
	fs.writeFileSync(route, content, 'utf-8');
};

export default writeJSON;

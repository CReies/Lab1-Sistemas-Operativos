import * as fs from 'fs';

const readJSON = (route: string) => {
	const content = fs.readFileSync(route, 'utf-8');
	return JSON.parse(content);
};

export default readJSON;

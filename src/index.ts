import 'dotenv-safe/config';
import createDebug from 'debug';

const log = createDebug('index');
log.enabled = true;

log(process.env.NAME);

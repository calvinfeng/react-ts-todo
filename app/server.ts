/**
 * @author Calvin Feng
 */

import express from 'express';
import { TodoController, RootController } from './controllers';

const app: express.Application = express();
const port: number | string = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/api/todos', TodoController);
app.use('/', RootController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
})
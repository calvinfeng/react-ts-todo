/**
 * @author Calvin Feng
 */

import express from 'express';
import * as BodyParser from 'body-parser';
import { TodoController, RootController } from './controllers';

const app: express.Application = express();
const port: number | string = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use('/api/todos', TodoController);
app.use('/', RootController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
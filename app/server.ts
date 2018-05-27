import express from 'express';
import { WelcomeController, RootController } from './controllers';

const app: express.Application = express();
const port: number | string = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/welcome', WelcomeController);
app.use('/', RootController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
})
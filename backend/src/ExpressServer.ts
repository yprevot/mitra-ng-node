import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { router } from './routes';
import { HttpStatusCode } from './utils/HttpStatusCode';

const app: Express = express();
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (request: Request, response: Response) => {
    response.status(HttpStatusCode.OK).json({
        message: 'API ready',
    });
});
app.use('/api/v1', router);

export { app as ExpressServer };

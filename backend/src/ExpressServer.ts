import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { router } from './routes';
import { HttpStatusCode } from './utils/HttpStatusCode';
import { CustomError } from './utils/errors/errors.error';

class ExpressServer {
    private static app: Express;

    public static getServer(): Express {
        if (!ExpressServer.app) {
            const app = express();
            ExpressServer.app = app;

            try {
                ExpressServer.app.use(cors());
                ExpressServer.app.use(helmet());
                ExpressServer.app.use(morgan('dev'));
                ExpressServer.app.use(express.json());
                ExpressServer.app.use('/api/v1', router);

                ExpressServer.app.use('*', (request: Request, response: Response) => {
                    response.status(HttpStatusCode.NOT_FOUND).json({
                        message: `Can't find ${request.originalUrl} this route`,
                    });
                });
                ExpressServer.app.use(
                    (
                        error: CustomError,
                        request: Request,
                        response: Response,
                        next: NextFunction,
                    ) => {
                        error.status = error.status || 'fail';
                        error.statusCode = error.statusCode || HttpStatusCode.INTERNAL_SERVER;
                        response.status(error.statusCode).json({
                            status: error.status,
                            message: error.message,
                            stack: error.stack,
                            request: request.body,
                        });
                    },
                );
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
        return ExpressServer.app;
    }
}

export { ExpressServer };

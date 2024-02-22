import { Express } from 'express';
import process from 'node:process';
import { ServerConfig as config } from './ServerConfig';
import { ExpressServer } from './ExpressServer';

const startServer = async (app: Express) => {
    try {
        app.listen(config.port, () => {
            console.log(`Server running at:  http://${config.host}:${config.port}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
startServer(ExpressServer);

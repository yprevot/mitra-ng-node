import { Express } from 'express';
import { ServerConfig as serverConfig } from './ServerConfig';
import { ExpressServer } from './ExpressServer';

const expressServer = ExpressServer.getServer();

const startServer = async (app: Express) => {
    try {
        app.listen(serverConfig.PORT, () => {
            console.log(`Server started at:  http://${serverConfig.HOST}:${serverConfig.PORT}`);
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
};
startServer(expressServer);

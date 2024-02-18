import { Express } from 'express';
import { config } from './config';
import { ExpressServer } from './ExpressServer';

const expressServer =  ExpressServer.getServer();
 
const startServer = async( app: Express) => {
    try{
        app.listen(config.PORT, ()=>{
            console.log(`Server started at:  http://${config.HOST}:${config.PORT}`);
        });
    }catch(error){
        console.error(error);
        throw error;
    }
}
startServer(expressServer);




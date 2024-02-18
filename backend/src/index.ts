import { Express } from 'express';
import { config } from './config';
import { ExpressServer } from './ExpressServer';


const apiBasePath = `/${config.BASE_PATH}/${config.API_VERSION}`;
const expressServer =  ExpressServer.getServer(apiBasePath);
 
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




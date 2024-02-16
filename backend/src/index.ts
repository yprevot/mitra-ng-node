import express from 'express';
import cors  from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';


const server =  express();
const port = 3000;
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));

server.get('/', (req, res)=>{
    res.send('Hello world!');
});

server.listen(port, ()=>{
    console.log(`Server started at:  http://localhost:${port}`);
});

export default server;
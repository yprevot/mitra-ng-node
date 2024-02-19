import dotenv from 'dotenv';

dotenv.config({ path: `../.env` });

const ServerConfig = Object.freeze({
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3001,
});
export { ServerConfig };

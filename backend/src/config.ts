const dotenv = require('dotenv');
dotenv.config({ path: `../.env` });

const config = Object.freeze({
    HOST: process.env.HOST || 'localhost', 
    PORT: process.env.PORT || 3001,
    BASE_PATH: process.env.BASE_PATH || 'api',
    API_VERSION: process.env.API_VERSION || 'v1',
});
export {
    config
}
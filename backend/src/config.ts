const dotenv = require('dotenv');
dotenv.config({ path: `../.env` });

const config = Object.freeze({
    HOST: process.env.HOST || 'localhost', 
    PORT: process.env.PORT || 3001,
});
export {
    config
}
import dotenv from 'dotenv';

dotenv.config({ path: `../.env` });

type IConfig = {
    host: string;
    port: number;
};

const { HOST = String('localhost'), PORT = Number(3001) } = process.env;

const ServerConfig: IConfig = Object.freeze({
    host: String(HOST),
    port: +PORT,
});
export { ServerConfig };

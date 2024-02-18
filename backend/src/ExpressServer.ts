import express, { Express } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { router } from './routes'

class ExpressServer {
    private static app: Express

    public static getServer(): Express {
        if (!ExpressServer.app) {
            const app = express()
            ExpressServer.app = app

            try {
                ExpressServer.app.use(cors())
                ExpressServer.app.use(helmet())
                ExpressServer.app.use(morgan('dev'))
                ExpressServer.app.use(express.json())
                ExpressServer.app.use('/api/v1', router)
            } catch (error) {
                console.error(error)
                throw error
            }
        }
        return ExpressServer.app
    }
}

export { ExpressServer }

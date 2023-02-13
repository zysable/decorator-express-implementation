import express from 'express'
import cookieSession from 'cookie-session'
import { AppRouter } from './AppRouter'

export class Server {
  private static app: express.Express
  static getInstance(): express.Express {
    if (!Server.app) {
      Server.app = express()
      Server.app.set('views', './src/views')
      Server.app.set('view engine', 'ejs')
      Server.app.use(express.urlencoded({ extended: true }))
      Server.app.use(express.json())
      Server.app.use(cookieSession({ keys: ['We are family'] }))
      Server.app.use(AppRouter.getInstance())
    }
    return Server.app
  }
}
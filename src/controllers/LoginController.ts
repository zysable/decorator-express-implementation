import { Request, Response } from 'express'
import { get, controller, use, post, bodyValidator } from './decorators'
import { logger } from '../middlewares'

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response) {
    res.render('login')
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body
    if (email === 'hi@hi.com' && password === 'password') {
      req.session = { loggedIn: true }
      res.redirect('/')
    } else {
      res.send('Invalid email or password')
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined
    res.redirect('/')
  }
}
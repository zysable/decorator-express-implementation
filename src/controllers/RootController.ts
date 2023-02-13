import { Request, Response } from 'express'
import { get, controller, use } from './decorators'
import { requireAuth } from '../middlewares'

@controller('')
class RootController {
  @get('/')
  rootPage(req: Request, res: Response) {
    const locals = {
      title: 'You are logged in', isLogged: true
    }
    if (!req.session || !req.session.loggedIn) {
      locals.title = 'You are not logged in'
      locals.isLogged = false
    }
    res.render('index', locals)
  }

  @get('/protected')
  @use(requireAuth)
  protectedPage(req: Request, res: Response) {
    res.render('protected')
  }
}
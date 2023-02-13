// import { NextFunction, Request, Response, Router } from 'express'
//
// interface RequestWithBody extends Request {
//   body: { [key: string]: string | undefined }
// }
//
// function requireAuth(req: Request, res: Response, next: NextFunction) {
//   if (req.session && req.session.loggedIn) {
//     next()
//     return
//   } else {
//     res.sendStatus(403)
//   }
// }
//
// export const router = Router()
//
// router.get('/', (req: Request, res: Response) => {
//   const locals = {
//     title: 'You are logged in', isLogged: true
//   }
//   if (!req.session || !req.session.loggedIn) {
//     locals.title = 'You are not logged in'
//     locals.isLogged = false
//   }
//   res.render('index', locals)
// })
//
// router.get('/login', (req: Request, res: Response) => {
//   res.render('login')
// })
//
// router.get('/logout', (req: Request, res: Response) => {
//   req.session = undefined
//   res.redirect('/')
// })
//
// router.get('/protected', requireAuth, (req: Request, res: Response) => {
//   res.render('protected')
// })
//
// router.post('/login', (req: RequestWithBody, res: Response) => {
//   const { email, password } = req.body
//   if (email && password && email === 'hi@hi.com' && password === 'password') {
//     req.session = { loggedIn: true }
//     res.redirect('/')
//   } else {
//     res.send('Invalid email or password')
//   }
// })
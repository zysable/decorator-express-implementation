import { NextFunction, Response, Request } from 'express'
import onHeaders from 'on-headers'

export function logger(req: Request, res: Response, next: NextFunction) {
  const startAt = process.hrtime()
  onHeaders(res, () => {
    const diff = process.hrtime(startAt)
    const time = (diff[0] * 1e3 + diff[1] * 1e-6).toFixed(3)
    console.log(`${req.method} ${req.path} -- ${time}ms -- From: ${req.ip}`)
    res.append('X-Response-Time', `${time}ms`)
  })
  next()
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next()
    return
  } else {
    res.sendStatus(403)
  }
}
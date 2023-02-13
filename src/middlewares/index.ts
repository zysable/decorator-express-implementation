import { NextFunction, Response, Request } from 'express'
import onHeaders from 'on-headers'

export function logger(req: Request, res: Response, next: NextFunction) {
  const startAt = process.hrtime.bigint()
  onHeaders(res, function () {
    const diff = Number(process.hrtime.bigint() - startAt)
    const time = (diff * 1e-6).toFixed(3)
    res.append('X-Response-Time', `${time}ms`)
    console.log(`${this.statusCode} - ${req.method} ${req.path} - From: ${req.ip} - ${time}ms`)
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
import 'reflect-metadata'
import {Methods} from './Methods'
import { MetadataKeys } from './MetadataKeys'
import { RequestHandler } from 'express'

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler
}

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key)
      Reflect.defineMetadata(MetadataKeys.method, method, target, key)
    }
  }
}

const get = routeBinder(Methods.get)
const post = routeBinder(Methods.post)
const patch = routeBinder(Methods.patch)
const put = routeBinder(Methods.put)
const del = routeBinder(Methods.del)

export {
  get, post, put, patch, del
}

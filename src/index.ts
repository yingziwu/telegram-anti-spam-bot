import { Application, Middleware, Router } from '@cfworker/web'
import createTelegrafMiddleware from 'cfworker-middleware-telegraf'

import bot from './updateHandler'
import { deleteWebhook, getWebhookInfo, setWebhook } from './webhook'

const requestID: Middleware = async ({ res }, next) => {
  res.headers.set('x-request-id', crypto.randomUUID())
  await next()
}

const router = new Router()

router.get('/ping', ({ res }) => {
  res.body = `Pong! at ${new Date()}.`
})

router.post(`/${webhookPath}`, createTelegrafMiddleware(bot))

router.post(`/${webhookAdminPath}/setWebhook`, async ({ res }) => {
  res.headers.set('content-type', 'application/json; charset=utf-8')
  res.body = JSON.stringify(await setWebhook())
})
router.get(`/${webhookAdminPath}/getWebhookInfo`, async ({ res }) => {
  res.headers.set('content-type', 'application/json; charset=utf-8')
  res.body = JSON.stringify(await getWebhookInfo())
})
router.delete(`/${webhookAdminPath}/deleteWebhook`, async ({ res }) => {
  res.headers.set('content-type', 'application/json; charset=utf-8')
  res.body = JSON.stringify(await deleteWebhook())
})

new Application().use(requestID).use(router.middleware).listen()

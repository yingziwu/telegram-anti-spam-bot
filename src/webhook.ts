import { bot } from './init'

export async function setWebhook() {
  return await bot.telegram.setWebhook(`${webhookDomain}/${webhookPath}`, {
    allowed_updates: ['message', 'chat_member', 'callback_query'],
  })
}

export async function getWebhookInfo() {
  return await bot.telegram.getWebhookInfo()
}

export async function deleteWebhook() {
  return await bot.telegram.deleteWebhook({ drop_pending_updates: true })
}

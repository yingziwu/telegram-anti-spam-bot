import { Context } from 'telegraf'
import { Message, Update } from 'typegram'

import { bot } from './init'

function ping(ctx: Context) {
  const update = ctx.update as Update.MessageUpdate
  const message = update.message as Message.TextMessage
  const date = message.date
  ctx.sendMessage(`Pong! (ping took ${new Date().getTime() - date * 1000} ms)`)
}

function debug(ctx: Context) {
  const update = ctx.update as Update.MessageUpdate
  const message = update.message as Message.TextMessage
  ctx.sendMessage(JSON.stringify(message))
}

function echo(ctx: Context) {
  ctx.sendMessage(JSON.stringify(ctx))
}

bot.command('ping', ping)
bot.command('debug', debug)

bot.on('new_chat_members', echo)
bot.on('left_chat_member', echo)

export default bot

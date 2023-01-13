import { Telegraf } from 'telegraf'

interface Env {
  // from @cloudflare/workers-types
  DATABASE: D1Database
}

export declare const env: Env

export const bot = new Telegraf(telegramBotToken)

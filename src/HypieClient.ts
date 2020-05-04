import { Client } from 'discord.js'

export class HypieClient extends Client {
  public readonly path: string = require.main?.filename ?? process.cwd()

  public readonly corePath: string = __dirname
}

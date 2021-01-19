import { Sprite as PixiSprite, Texture } from 'pixi.js'

export class Sprite extends PixiSprite {
  constructor(conf: string) {
    super(Texture.fromImage(conf))
  }
}
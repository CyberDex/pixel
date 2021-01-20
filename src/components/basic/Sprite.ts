import { Sprite as PixiSprite, Texture } from 'pixi.js'
import { IComponent } from '../../interfaces'

export class Sprite extends PixiSprite {
  public positionX?: number
  public positionY?: number

  constructor(opts: ISprite) {
    super(Texture.fromImage(opts.texture))
    this.anchor.set(0.5)

    this.positionX = opts.positionX
    this.positionY = opts.positionY
  }
}

export interface ISprite extends IComponent {
  texture: string,
}
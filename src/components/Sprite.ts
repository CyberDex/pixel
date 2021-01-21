import { Sprite as PixiSprite, Texture } from 'pixi.js'
import { IComponent } from './IComponent'

export class Sprite extends PixiSprite {
  public positionX?: number
  public positionY?: number

  constructor(opts: ISprite) {
    super(Texture.fromImage(opts.texture))
    opts.anchor &&
      this.anchor.set(opts.anchor)

    this.positionX = opts.positionX
    this.positionY = opts.positionY
  }
}

export interface ISprite extends IComponent {
  texture: string,
  anchor?: number,
}
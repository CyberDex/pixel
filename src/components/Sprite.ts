import { Sprite as PixiSprite, Texture } from 'pixi.js'
import { IComponent } from './IComponent'

export class Sprite extends PixiSprite {
  public positionX?: number
  public positionY?: number

  constructor(opts: ISprite) {
    super(Texture.fromImage(opts.texture))

    if (opts.anchor)
      this.anchor.set(opts.anchor)

    if (opts.width)
      this.width = opts.width

    if (opts.height)
      this.height = opts.height

    this.positionX = opts.positionX
    this.positionY = opts.positionY
  }
}

export interface ISprite extends IComponent {
  texture: string,
  anchor?: number,
  width?: number,
  height?: number,
}
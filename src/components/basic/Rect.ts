import { Graphics } from 'pixi.js'
import { IComponent } from '../../interfaces'

export class Rect extends Graphics {
  public positionX?: number
  public positionY?: number

  constructor(opts: IRect) {
    super()
    this.beginFill(opts.color)
    this.drawRoundedRect(
      opts.x || 0,
      opts.y || 0,
      opts.width,
      opts.height,
      opts.round || 0)
    this.endFill()

    this.positionX = opts.positionX
    this.positionY = opts.positionY
  }
}

export interface IRect extends IComponent {
  color: number,
  width: number,
  height: number,
  round?: number,
}
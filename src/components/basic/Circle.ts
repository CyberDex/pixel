import { Graphics } from 'pixi.js'
import { IComponent } from '../../interfaces'

export class Circle extends Graphics {
  public positionX?: number
  public positionY?: number

  constructor(opts: ICircle) {
    super()
    this.lineStyle(0)
    this.beginFill(opts.color, 1)
    this.drawCircle(opts.x || 0, opts.y || 0, opts.radius)

    this.positionX = opts.positionX
    this.positionY = opts.positionY
  }
}

export interface ICircle extends IComponent {
  color: number,
  radius: number,
}
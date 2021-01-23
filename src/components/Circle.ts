import { Graphics } from 'pixi.js'
import { IComponent } from '.'

export class Circle extends Graphics {
  constructor(opts: ICircle) {
    super()
    this.lineStyle(0)
    this.beginFill(opts.color, 1)
    this.drawCircle(opts.x || 0, opts.y || 0, opts.radius)
  }

  public resize() { }
}

export interface ICircle extends IComponent {
  color: number,
  radius: number,
}
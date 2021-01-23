import { Graphics } from 'pixi.js'
import { IComponent } from '.'

export class Rect extends Graphics {
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
  }

  public resize() { }
}

export interface IRect extends IComponent {
  color: number,
  width: number,
  height: number,
  round?: number,
}
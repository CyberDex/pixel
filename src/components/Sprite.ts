import { Sprite as PixiSprite, Texture } from 'pixi.js'
import { IComponent } from '.'
import { getPropertyVal } from '../utils'

export class Sprite extends PixiSprite {
  constructor(public props: ISprite) {
    super(Texture.fromImage(props.texture))
    this.anchor.set(.5)
  }

  public resize(w, h: number) {
    if (this.props.x)
      this.x = getPropertyVal(this.props.x, w)

    if (this.props.y)
      this.y = getPropertyVal(this.props.y, h)

    if (this.props.w) {
      const startW = this.width
      this.width = getPropertyVal(this.props.w, w)
      if (!this.props.h) {
        this.height *= this.width / startW
      }
    }

    if (this.props.h) {
      const startH = this.height
      this.height = getPropertyVal(this.props.h, h)
      if (!this.props.w) {
        this.width *= this.height / startH
      }
    }

    this.updateAnchor(w, h)
  }

  private updateAnchor(w, h: number) {
    let anchorX = .5
    let anchorY = .5

    if (this.x === 0) anchorX = 0
    if (this.x === w) anchorX = 1

    if (this.y === 0) anchorY = 0
    if (this.y === h) anchorY = 1

    this.anchor.set(anchorX, anchorY)
  }
}
export interface ISprite extends IComponent {
  texture: string,
}
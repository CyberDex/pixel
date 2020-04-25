import { View } from '../View'
import { Graphics } from 'pixi.js'

export class Slider extends View {
    private background: Graphics
    private slider: Graphics

    constructor(
        public x: number = 0,
        public y: number = 0,
        public width: number = 200,
        public height: number = 40,
        public bgColor: number = 0xDE3249,
        public fgColor: number = 0xffffff,

    ) {
        super()
        this.background = this.addRect(x - width * .5, y - height * .5, width, height, bgColor)
        this.addChild(this.background)
        this.slider = this.addCircle(x, y, height * .5, fgColor)
        this.addChild(this.slider)
    }
}
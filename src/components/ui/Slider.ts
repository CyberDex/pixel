import { View } from '../View'
import { Graphics } from 'pixi.js'

export class Slider extends View {
    private background: Graphics
    private slider: Graphics
    private sliderData: any
    private sliderDragging: boolean = false

    constructor(
        public w: number = 200,
        public h: number = 40,
        public bgColor: number = 0xDE3249,
        public fgColor: number = 0xffffff,
    ) {
        super()
        this.width = w
        this.height = h

        this.background = this.addRect(0, 0, w, h, bgColor)
        this.addChild(this.background)
        this.addChild(this.addCircle(0, h / 2, h / 2, bgColor))
        this.addChild(this.addCircle(w, h / 2, h * .5, bgColor))

        this.slider = this.addCircle(0, h / 2, h / 2, fgColor)
        this.addChild(this.slider)
        this.slider.interactive = true
        this.slider.buttonMode = true
        this.slider
            .on('pointerdown', event => this.onDragStart(event))
            .on('pointerup', event => this.onDragEnd())
            .on('pointerupoutside', event => this.onDragEnd())
            .on('pointermove', event => this.onDragMove())
    }

    public onDragStart(event) {
        this.sliderData = event.data
        this.sliderDragging = true
    }

    public onDragEnd() {
        this.sliderDragging = false
        this.sliderData = null

    }

    public onDragMove() {
        if (this.sliderDragging) {
            const newPosition = this.sliderData.getLocalPosition(this)
            this.slider.x =
                newPosition.x > this.w
                    ? this.w
                    : newPosition.x < 0
                        ? 0
                        : newPosition.x
        }
    }
}
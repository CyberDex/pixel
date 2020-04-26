import { View } from '../View'
import { Graphics } from 'pixi.js'
import { Label } from '../..'

export class Button extends View {
    private background: Graphics
    private text: Text
    private cb: { (): void }[] = []
    private pressed: boolean = false
    private _active: boolean = true

    constructor(
        public positionX: number = 50,
        public positionY: number = 50,
        private w: number = 200,
        private h: number = 30,
        private textString: string = '',
        private textStyle: any = {},
        private radius: number = 0,
        private bgColor: number | string = 0xDE3249,
    ) {
        super()
        this.width = w
        this.height = h

        this.background = this.addRect(0, 0, w, h, Number(bgColor), radius)
        this.addChild(this.background)
        this.background.x = - w / 2
        this.background.y = - h / 2

        this.addChild(new Label(textString, textStyle, 0, 0))

        this.interactive = true
        this.buttonMode = true
        this.on('pointerdown', () => this.onDown())
            .on('pointerup', () => this.onUp())
            .on('pointerupoutside', () => this.onMouseOut())
    }

    private onDown() {
        if (!this._active) return
        this.pressed = true
        this.scale.set(0.95)
    }

    private onUp() {
        this.scale.set(1)
        this.pressed = false
        if (!this._active) return
        this.cb.forEach(cb => cb())
    }

    private onMouseOut() {
        this.scale.set(1)
        this.pressed = false
    }

    public onClick(cb: { (): void }): number {
        this.cb.push(cb)
        return this.cb.length
    }

    public offClick(cbID: number) {
        delete this.cb[cbID]
    }

    public set active(active: boolean) {
        this.alpha = active ? 1 : .5
        this.buttonMode = active
        this._active = active
    }

    public get active() {
        return this._active
    }
}
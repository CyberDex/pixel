import { View } from '../View'
import { Graphics } from 'pixi.js'
import { Label } from '../..'

export class Button extends View {
	public set active(active: boolean) {
		this.alpha = active ? 1 : 0.5
		this.buttonMode = active
		this._active = active
	}

	public get active() {
		return this._active
	}
	private readonly background: Graphics
	private readonly text: Text
	private readonly cb: { (): void }[] = []
	private pressed = false
	private _active = true

	public constructor(
		public positionX = 50,
		public positionY = 50,
		private readonly w = 200,
		private readonly h = 30,
		private readonly textString = '',
		private readonly textStyle: any = {},
		private readonly radius = 0,
		private readonly bgColor: number | string = 0xde3249,
	) {
		super()
		this.width = w
		this.height = h

		this.background = this.addRect(0, 0, w, h, Number(bgColor), radius)
		this.addChild(this.background)
		this.background.x = -w / 2
		this.background.y = -h / 2

		this.addChild(new Label(textString, textStyle, 0, 0))

		this.interactive = true
		this.buttonMode = true
		this.on('pointerdown', () => this.onDown())
			.on('pointerup', () => this.onUp())
			.on('pointerupoutside', () => this.onMouseOut())
	}

	public onClick(cb: { (): void }): number {
		this.cb.push(cb)
		return this.cb.length
	}

	public offClick(cbID: number) {
		delete this.cb[cbID]
	}

	private onDown() {
		if (!this._active) {
			return
		}
		this.pressed = true
		this.scale.set(0.95)
	}

	private onUp() {
		this.scale.set(1)
		this.pressed = false
		if (!this._active) {
			return
		}
		this.cb.forEach((cb) => cb())
	}

	private onMouseOut() {
		this.scale.set(1)
		this.pressed = false
	}
}

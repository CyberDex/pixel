import { View } from '../View'
import { Graphics } from 'pixi.js'
import { Label } from '../..'
import { Const } from '../../helpers/const';

export class Button extends View {

	public set active(active: boolean) {
		this.alpha = active ? 1 : .5
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

	public constructor(private readonly props: IButton = {}) {
		super()

		props.width = props.width || 200
		props.height = props.height || 30

		this.positionX = props.positionX || 50
		this.positionY = props.positionY || 50

		this.background = this.addRect(0, 0, props.width, props.height, Number(props.color || Const.defaultColor), props.radius || 0)
		this.addChild(this.background)
		this.background.x = -props.width / 2
		this.background.y = -props.height / 2

		this.addChild(new Label(props.text || '', props.style || { fill: '#ffffff' }, 0, 0))

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
		if (!this._active) { return }
		this.pressed = true
		this.scale.set(0.95)
	}

	private onUp() {
		this.scale.set(1)
		this.pressed = false
		if (!this._active) { return }
		this.cb.forEach(cb => cb())
	}

	private onMouseOut() {
		this.scale.set(1)
		this.pressed = false
	}
}

export interface IButton {
	text?: string
	positionX?: number
	positionY?: number
	width?: number
	height?: number
	radius?: number
	color?: number | string
	style?: any
}

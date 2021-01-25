import { View, IView } from './View'
import { TextStyleOptions } from 'pixi.js'

export class Button extends View {
	// 	private readonly cb: (() => void)[] = []
	// 	private pressed = false
	// 	private isActive = true

	public constructor(props: IButton) {
		super()

		// 		this.width = props.width
		// 		this.height = props.height

		// 		const bg = this.addRect({
		// 			color: props.color,
		// 			round: props.round,
		// 			width: props.width,
		// 			height: props.height
		// 		})
		// 		bg.x -= this.width / 2
		// 		bg.y -= this.height / 2

		// 		this.addText({
		// 			text: props.text,
		// 			style: props.style,
		// 		})

		// 		this.interactive = true
		// 		this.buttonMode = true

		// 		if (props.onClick) {
		// 			this.onClick(props.onClick)
		// 		}

		// 		this.on('pointerdown', () => this.onDown())
		// 		this.on('pointerup', () => this.onUp())
		// 		this.on('pointerupoutside', () => this.onMouseOut())
	}

	// 	public onClick(cb: () => void): number {
	// 		this.cb.push(cb)
	// 		return this.cb.length - 1
	// 	}

	// 	public offClick(cbID: number) {
	// 		delete this.cb[cbID]
	// 	}

	// 	private onDown() {
	// 		if (!this.isActive) {
	// 			return
	// 		}
	// 		this.pressed = true
	// 		this.scale.set(0.95)
	// 	}

	// 	private onUp() {
	// 		if (!this.pressed) {
	// 			return
	// 		}
	// 		this.scale.set(1)
	// 		this.pressed = false
	// 		this.cb.forEach((cb) => cb())
	// 	}

	// 	private onMouseOut() {
	// 		this.scale.set(1)
	// 		this.pressed = false
	// 	}

	// 	public set active(active: boolean) {
	// 		this.alpha = active ? 1 : 0.5
	// 		this.buttonMode = active
	// 		this.isActive = active
	// 	}

	// 	public get active() {
	// 		return this.isActive
	// 	}

	// 	public resize() { }
}

export interface IButton extends IView {
	text?: string
	style?: TextStyleOptions
	onClick?: () => void
}
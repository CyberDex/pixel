import { View } from '../View'
import { TextStyleOptions } from 'pixi.js'
import { IRect } from '../basic/Rect'

/**
 * Class for buttons creation with [[View]] repositioning functionality
 *
 * @export
 * @class Button
 * @extends {View}
 */
export class Button extends View {
	private readonly cb: (() => void)[] = []
	private pressed = false
	private isActive = true

	public constructor(props: IButton) {
		super(props.positionX, props.positionY)

		this.width = props.width
		this.height = props.height

		this.addRect({
			color: props.color,
			round: props.round,
			width: props.width,
			height: props.height
		})

		this.addText({
			text: props.text,
			style: props.style,
			positionX: 50,
			positionY: 50,
		})

		this.interactive = true
		this.buttonMode = true

		if (props.onClick) {
			this.onClick(props.onClick)
		}

		this.on('pointerdown', () => this.onDown())
		this.on('pointerup', () => this.onUp())
		this.on('pointerupoutside', () => this.onMouseOut())
	}

	/**
	 * Register [[Button]] click callback, returns event ID to unregister event with [[offClick]] method
	 *
	 * @param {{ (): void }} cb
	 * @returns {number}
	 * @memberof Button
	 */
	public onClick(cb: () => void): number {
		this.cb.push(cb)
		return this.cb.length - 1
	}

	/**
	 * Unregister [[Button]] click callback
	 *
	 * @param {number} cbID
	 * @memberof Button
	 */
	public offClick(cbID: number) {
		delete this.cb[cbID]
	}

	/**
	 * 'Pointer down' handler
	 *
	 * @private
	 * @memberof Button
	 */
	private onDown() {
		if (!this.isActive) {
			return
		}
		this.pressed = true
		this.scale.set(0.95)
	}

	/**
	 * 'Pointer up' handler
	 *
	 * @private
	 * @memberof Button
	 */
	private onUp() {
		if (!this.pressed) {
			return
		}
		this.scale.set(1)
		this.pressed = false
		this.cb.forEach((cb) => cb())
	}

	/**
	 * 'Pointer up outside' handler
	 *
	 * @private
	 * @memberof Button
	 */
	private onMouseOut() {
		this.scale.set(1)
		this.pressed = false
	}

	/**
	 * Activate button (make it clickable)
	 *
	 * @memberof Button
	 */
	public set active(active: boolean) {
		this.alpha = active ? 1 : 0.5
		this.buttonMode = active
		this.isActive = active
	}

	/**
	 * Get activation button status
	 *
	 * @memberof Button
	 */
	public get active() {
		return this.isActive
	}
}

export interface IButton extends IRect {
	text?: string
	style?: TextStyleOptions
	onClick?: () => void
}
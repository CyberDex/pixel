import { View } from '../View'
import { Graphics, TextStyle } from 'pixi.js'
import { Label } from '../..'
import { Const } from '../../helpers/const'
import { IButton } from '../../helpers/interfaces/IButton'

/**
 * Class for buttons creation with [[View]] repositioning functionality
 *
 * @export
 * @class Button
 * @extends {View}
 */
export class Button extends View {
	/**
	 * Activate button (make it clickable)
	 *
	 * @memberof Button
	 */
	public set active(active: boolean) {
		this.alpha = active ? 1 : 0.5
		this.buttonMode = active
		this._active = active
	}

	/**
	 * Get activation button status
	 *
	 * @memberof Button
	 */
	public get active() {
		return this._active
	}
	private readonly background: Graphics
	private readonly cb: { (): void }[] = []
	private pressed = false
	private _active = true

	public constructor(private readonly props: IButton = {}) {
		super()

		props.width = props.width || 200
		props.height = props.height || 30

		this.positionX = props.positionX || 50
		this.positionY = props.positionY || 50

		this.background = this.addRect(
			0,
			0,
			props.width,
			props.height,
			Number(props.color || Const.defaultColor),
			props.radius || 0,
		)
		this.addChild(this.background)
		this.background.x = -props.width / 2
		this.background.y = -props.height / 2

		this.addChild(new Label(props.text || '', props.style || { fill: '#ffffff' } as TextStyle, 0, 0))

		this.interactive = true
		this.buttonMode = true
		this.on('pointerdown', () => this.onDown())
			.on('pointerup', () => this.onUp())
			.on('pointerupoutside', () => this.onMouseOut())
	}

	/**
	 * Register [[Button]] click callback, returns event ID to unregister event with [[offClick]] method
	 *
	 * @param {{ (): void }} cb
	 * @returns {number}
	 * @memberof Button
	 */
	public onClick(cb: { (): void }): number {
		this.cb.push(cb)
		return this.cb.length
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
	 * 'Pointerdown' handler
	 *
	 * @private
	 * @memberof Button
	 */
	private onDown() {
		if (!this._active) {
			return
		}
		this.pressed = true
		this.scale.set(0.95)
	}

	/**
	 * 'Pointerup' handler
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
	 * 'Pointerupoutside' handler
	 *
	 * @private
	 * @memberof Button
	 */
	private onMouseOut() {
		this.scale.set(1)
		this.pressed = false
	}
}

import { View } from '../View'
import { Graphics } from 'pixi.js'

/**
 * Class for slider creation with [[View]] repositioning functionality
 *
 * @export
 * @class Slider
 * @extends {View}
 */
export class Slider extends View {
	private _value = 0
	private readonly background: Graphics
	private readonly slider: Graphics
	private sliderData: any
	private sliderDragging = false
	private readonly cb: { (data: number): void }[] = []

	public constructor(
		public positionX = 50,
		public positionY = 50,
		private readonly w = 200,
		private readonly h = 30,
		private readonly min = 0,
		private readonly max = 100,
		private readonly bgColor = 0xffffff,
		private readonly fgColor = 0xde3249,
	) {
		super(positionX, positionY)
		this.width = w
		this.height = h
		this._value = min
		const radius = h / 2
		this.background = this.addRect(-h / 2, 0, w + h, h, bgColor, radius)
		this.addChild(this.background)

		this.slider = this.addCircle(0, radius, radius + 5, fgColor)
		this.addChild(this.slider)
		this.slider.interactive = true
		this.slider.buttonMode = true
		this.slider
			.on('pointerdown', (event) => this.onDragStart(event))
			.on('pointerup', (event) => this.onDragEnd())
			.on('pointerupoutside', (event) => this.onDragEnd())
			.on('pointermove', (event) => this.onDragMove())
	}

	/**
	 * Register [[Slider]] value change callback, returns event ID to unregister event with [[offChange]] method
	 *
	 *
	 * @param {{ (data: number): void }} cb
	 * @returns {number}
	 * @memberof Slider
	 */
	public onChange(cb: { (data: number): void }): number {
		this.cb.push(cb)
		return this.cb.length - 1
	}

	/**
	 * Unregister [[Slider]] value change callback
	 *
	 * @param {number} cbID
	 * @memberof Slider
	 */
	public offChange(cbID: number) {
		delete this.cb[cbID]
	}

	/**
	 * Canvas resize handler
	 *
	 * @param {number} w
	 * @param {number} h
	 * @memberof Slider
	 */
	public onResize(w: number, h: number) {
		this.x = w / 2 - this.w / 2
		this.y = h / 2 - this.h / 2
	}

	/**
	 * 'Pointerdown' hanler
	 *
	 * @private
	 * @param {*} event
	 * @memberof Slider
	 */
	private onDragStart(event) {
		this.slider.scale.set(0.95)
		this.sliderData = event.data
		this.sliderDragging = true
	}

	/**
	 * 'Pointerup' handler
	 *
	 * @private
	 * @memberof Slider
	 */
	private onDragEnd() {
		this.sliderDragging = false
		this.sliderData = null
		this.slider.scale.set(1)
	}

	/**
	 * 'Pointermove' handler
	 *
	 * @private
	 * @memberof Slider
	 */
	private onDragMove() {
		if (this.sliderDragging) {
			const newPosition = this.sliderData.getLocalPosition(this)
			this.slider.x = newPosition.x > this.w ? this.w : newPosition.x < 0 ? 0 : newPosition.x
			this._value = Math.round(
				this.min + ((this.max - this.min) / 100) * Math.round((this.slider.x * 100) / this.w),
			)
			this.cb.forEach((cb) => cb(this._value))
		}
	}

	/**
	 * Slider value getter
	 *
	 * @readonly
	 * @memberof Slider
	 */
	public get value() {
		return this._value
	}
}

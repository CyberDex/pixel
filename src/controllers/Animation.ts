import { DisplayObject } from 'pixi.js'

/**
 * Animate [[DisplayObject]] class
 *
 * @export
 * @class Animation
 */
export class Animation {
	private _isPlaying = false

	public constructor(private readonly element: DisplayObject, private readonly props: IAnimation) { }

	/**
	 * Start playing animation
	 *
	 * @memberof Animation
	 */
	public play() {
		this._isPlaying = true
		this.update()
	}

	/**
	 * Stop playing animation
	 *
	 * @memberof Animation
	 */
	public stop() {
		this._isPlaying = false
	}

	/**
	 * Update element values
	 *
	 * @private
	 * @memberof Animation
	 */
	private update() {
		if (!this.isPlaying) {
			return
		}

		for (const prop in this.props.animate) {
			if (this.props.animate.hasOwnProperty(prop)) {
				this.element[prop] += this.props.animate[prop]
			}
		}

		requestAnimationFrame(() => this.update())
	}

	/**
	 * [[Animation]] state getter
	 *
	 * @readonly
	 * @memberof Animation
	 */
	public get isPlaying() {
		return this._isPlaying
	}
}

export interface IAnimation {
	delay: number
	animate?: IAnimate
	loop?: boolean
}

export interface IAnimate {
	x?: number
	y?: number
	width?: number
	height?: number
	rotation?: number
	scale?: number
}

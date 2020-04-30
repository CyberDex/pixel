import { DisplayObject } from 'pixi.js'

export class Animation {
	private _isPlaying = false

	public constructor(private readonly element: DisplayObject, private readonly props: IAnimation) {}

	public play() {
		this._isPlaying = true
		this.update()
	}

	public stop() {
		this._isPlaying = false
	}

	private update() {
		if (!this.isPlaying) {
			return
		}

		for (const prop in this.props.animate) {
			if (this.props.animate.hasOwnProperty(prop)) {
				// if (this.props.animate[prop] > 0 && this.props.animate[prop] >= this.element[prop]) { return }
				// if (this.props.animate[prop] < 0 && this.props.animate[prop] <= this.element[prop]) { return }

				this.element[prop] += this.props.animate[prop]
			}
		}

		requestAnimationFrame(() => this.update())
	}

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

import { Sprite, Texture } from 'pixi.js'
import { getPropertyVal } from '../utils'
import { IComponent, TElement } from './types'

export class View extends Sprite {
	public elements: TElement[] = []

	constructor(private props?: IView) {
		super(props?.bg ? Texture.fromImage(props.bg) : undefined)
		window.addEventListener('resize', () => this.resize())
	}

	public add(element: TElement) {
		this.elements.push(element)
		element.resize()
		return this.addChild(element)
	}

	public resize() {
		const w = window.innerWidth
		const h = window.innerHeight
		if (this.props?.x)
			this.x = getPropertyVal(this.props.x, w)

		if (this.props?.y)
			this.y = getPropertyVal(this.props.y, h)

		if (this.props?.w) {
			const startW = this.width
			this.width = getPropertyVal(this.props.w, w)
			if (!this.props?.h) {
				this.height *= this.width / startW
			}
		}

		if (this.props?.h) {
			const startH = this.height
			this.height = getPropertyVal(this.props.h, h)
			if (!this.props.w) {
				this.width *= this.height / startH
			}
		}

		this.updateAnchor(w, h)

		this.resizeElements()
	}

	private updateAnchor(w, h: number) {
		let anchorX = .5
		let anchorY = .5

		if (this.x === 0) anchorX = 0
		if (this.x === w) anchorX = 1

		if (this.y === 0) anchorY = 0
		if (this.y === h) anchorY = 1

		this.anchor.set(anchorX, anchorY)
	}

	public resizeElements() {
		this.elements.forEach((element: TElement) =>
			element.resize(window.innerWidth, window.innerHeight)
		)
	}
}

export interface IView extends IComponent {
	bg: string,
}
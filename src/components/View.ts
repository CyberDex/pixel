import { Sprite, Texture } from 'pixi.js'
import { getPropertyVal } from '../utils'
import { IComponent, TElement } from './types'
import { IText, Text } from './Text'

export class View extends Sprite {
	public elements: TElement[] = []

	constructor(public props?: IView) {
		super(props?.bg ? Texture.fromImage(props.bg) : undefined)
	}

	public addText(
		props: IText,
		text = new Text(props)
	): Text {
		this.add(new Text(props))
		return text
	}

	public addImg(
		props: IView,
		img = new View(props)
	): View {
		this.add(new View(props))
		return img
	}

	public add(element: TElement): TElement {
		this.elements.push(element)
		this.addChild(element)
		element.resize()
		return element
	}

	public resize() {
		this.updatePosition()
		this.updateSize()
		this.updateAnchor()
		this.resizeElements()
	}

	public updatePosition() {
		if (this.props?.x)
			this.x = getPropertyVal(this.props.x, window.innerWidth)

		if (this.props?.y)
			this.y = getPropertyVal(this.props.y, window.innerHeight)
	}

	public updateSize() {
		if (this.props?.w) {
			const startW = this.width
			this.width = getPropertyVal(this.props.w, window.innerWidth)
			if (!this.props?.h) {
				this.height *= this.width / startW
			}
		}

		if (this.props?.h) {
			const startH = this.height
			this.height = getPropertyVal(this.props.h, window.innerHeight)
			if (!this.props.w) {
				this.width *= this.height / startH
			}
		}
	}

	public updateAnchor() {
		let anchorX = .5
		let anchorY = .5

		if (this.x === 0) anchorX = 0
		if (this.x === window.innerWidth) anchorX = 1

		if (this.y === 0) anchorY = 0
		if (this.y === window.innerHeight) anchorY = 1

		this.anchor.set(anchorX, anchorY)
	}

	public resizeElements() {
		this.elements.map((element) => element.resize())
	}
}

export interface IView extends IComponent {
	bg?: string,
}
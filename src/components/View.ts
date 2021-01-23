import { Container } from 'pixi.js'
import { ISprite, Sprite } from './Sprite'
import { IRect, Rect } from './Rect'
import { Circle, ICircle } from './Circle'
import { ILabel, Label } from './Label'
import { TElement } from '.'

export class View extends Container {
	public elements: TElement[] = []

	constructor() {
		super()

		window.addEventListener('resize', () => this.resize())
		this.resize()
	}

	public addText(opts: ILabel): Label {
		return this.add(new Label(opts))
	}

	public addRect(opts: IRect): Rect {
		return this.add(new Rect(opts))
	}

	public addCircle(opts: ICircle): Circle {
		return this.add(new Circle(opts))
	}

	public addImg(opts: ISprite): Sprite {
		return this.add(new Sprite(opts))
	}

	public add(element) {
		this.elements.push(element)
		return this.addChild(element)
	}

	public resize() {
		this.elements.forEach((element: TElement) =>
			element.resize(window.innerWidth, window.innerHeight)
		)
	}
}

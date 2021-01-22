import { Container, DisplayObject } from 'pixi.js'
import { LayoutManager } from '../controllers/LayoutManager'
import { ISprite, Sprite } from './Sprite'
import { IRect, Rect } from './Rect'
import { Circle, ICircle } from './Circle'
import { ILabel, Label } from './Label'
export class View extends Container {
	public constructor() {
		super()

		LayoutManager
			.instance
			.onResize(() => this.onResize())
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

	public add(child) {
		const element = this.addChild(child)
		this.onResize()
		return element
	}

	private onResize() {
		const w = LayoutManager.instance.width
		const h = LayoutManager.instance.height

		this.children.forEach((element: any) => {
			if (element.positionX) {
				element.x = (w / 100) * element.positionX
			}
			if (element.positionY) {
				element.y = (h / 100) * element.positionY
			}
		})
	}
}

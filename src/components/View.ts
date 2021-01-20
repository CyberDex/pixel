import { Container } from 'pixi.js'
import { LayoutManager } from '../controllers/LayoutManager'
import { ILabel, Label } from './basic/Label'
import { ISprite, Sprite } from './basic/Sprite'
import { IRect, Rect } from './basic/Rect'
import { Circle, ICircle } from './basic/Circle'

export class View extends Container {
	public constructor(
		public positionX?: number,
		public positionY?: number,
	) {
		super()

		LayoutManager
			.instance
			.onResize((w, h) => this.onResize(w, h))
	}

	public addText(opts: ILabel): Label {
		return this.addChild(new Label(opts))
	}

	public addRect(opts: IRect): Rect {
		return this.addChild(new Rect(opts))
	}

	public addCircle(opts: ICircle): Circle {
		return this.addChild(new Circle(opts))
	}

	public addImg(opts: ISprite): Sprite {
		return this.addChild(new Sprite(opts))
	}

	public onResize(canvasWidth: number, canvasHeight: number) {
		this.children.forEach((element: any) => {
			if (element.positionX) {
				element.x = (canvasWidth / 100) * element.positionX
			}
			if (element.positionY) {
				element.y = (canvasHeight / 100) * element.positionY
			}
		})
	}
}

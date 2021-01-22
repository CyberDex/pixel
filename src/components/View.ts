import { Container } from 'pixi.js'
import { ISprite, Sprite } from './Sprite'
import { IRect, Rect } from './Rect'
import { Circle, ICircle } from './Circle'
import { ILabel, Label } from './Label'
export class View extends Container {
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

	public resize(w, h: number) {
		this.children.forEach((element) => element.resize(w, h))
	}
}

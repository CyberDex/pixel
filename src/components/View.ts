import { Container, Sprite, Text, Graphics, autoDetectRenderer, RenderTexture } from 'pixi.js'
import { LayoutManager } from '../controllers/LayoutManager'

export class View extends Container {
	private readonly bg: Sprite

	public constructor(
		public positionX = 50,
		public positionY = 50,
		public bgImage?: string,
		public content?: {
			[key: string]: View
		},
	) {
		super()
		if (bgImage) {
			this.bg = Sprite.fromImage(bgImage)
			this.addChild(this.bg)
		}
		if (content) {
			for (const child in content) {
				if (content.hasOwnProperty(child)) {
					this.addChild(content[child])
				}
			}
		}
		LayoutManager.instance.onResize((w, h) => this.onResize(w, h))
	}

	public addText(text: string, style, x, y) {
		const textEl = new Text(text, style)
		textEl.anchor.set(0.5)
		this.addChild(textEl)
		return textEl
	}

	public addRect(x = 0, y = 0, width = 200, height = 40, color = 0xde3249, round = 0) {
		const rect = new Graphics()
		rect.beginFill(color)
		rect.drawRoundedRect(x, y, width, height, round)
		rect.endFill()
		return rect
	}

	public addCircle(x = 0, y = 0, radius = 40, color = 0xde3249) {
		const circle = new Graphics()
		circle.lineStyle(0)
		circle.beginFill(color, 1)
		circle.drawCircle(x, y, radius)
		circle.endFill()
		return circle
	}

	public onResize(w: number, h: number) {
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

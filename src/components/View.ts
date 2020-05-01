import { Container, Sprite, Graphics, autoDetectRenderer, RenderTexture, TextStyle } from 'pixi.js'
import { LayoutManager } from '../controllers/LayoutManager'
import { Label } from './Label'
import { Const } from '../helpers/const'

/**
 * Base component of [[Pixil]], has reposition functionality for comfortable building of adaptive applications
 *
 * @export
 * @class View
 * @extends {Container}
 */
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

	/**
	 * Add [[Label]] component to [[View]]
	 *
	 * @param {string} text
	 * @param {TextStyle} style
	 * @param {number} positionX
	 * @param {number} positionY
	 * @returns
	 * @memberof View
	 */
	public addText(text: string, style: TextStyle, positionX: number, positionY: number) {
		const textEl = new Label(text, style, positionX, positionY)
		this.addChild(textEl)
		return textEl
	}

	/**
	 * Add [[RoundedRect]] [[Graphics]] element to [[View]]
	 *
	 * @param {*} [positionX=Const.positionX]
	 * @param {*} [positionY=Const.positionY]
	 * @param {*} [width=Const.buttonWidth]
	 * @param {*} [height=Const.buttonHeight]
	 * @param {*} [color=Const.defaultColor]
	 * @param {*} [round=Const.buttonRound]
	 * @returns
	 * @memberof View
	 */
	public addRect(
		positionX = Const.positionX,
		positionY = Const.positionY,
		width = Const.buttonWidth,
		height = Const.buttonHeight,
		color = Const.defaultColor,
		round = Const.buttonRound,
	) {
		const rect = new Graphics()
		rect.beginFill(color)
		rect.drawRoundedRect(positionX, positionY, width, height, round)
		rect.endFill()
		this.addChild(rect)
		return rect
	}

	/**
	 * Add [[drawCircle]] [[Graphics]] element to [[View]]
	 *
	 * @param {number} [x=0]
	 * @param {number} [y=0]
	 * @param {number} [radius=40]
	 * @param {number} [color=0xde3249]
	 * @returns
	 * @memberof View
	 */
	public addCircle(
		positionX = Const.positionX,
		positionY = Const.positionY,
		radius = Const.buttonHeight,
		color = Const.defaultColor,
	) {
		const circle = new Graphics()
		circle.lineStyle(0)
		circle.beginFill(color, 1)
		circle.drawCircle(positionX, positionY, radius)
		circle.endFill()
		this.addChild(circle)
		return circle
	}

	/**
	 * Canvas resize handler. It will reposition all elements on View depending on their [[positionX]] and [[positionY]] values.
	 * [[positionX]] - is position in % of canvas width
	 * [[positionY]] - is position in % of canvas height
	 *
	 * @param {number} canvasWidth
	 * @param {number} canvasHeight
	 * @memberof View
	 */
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

import { Text } from 'pixi.js'

export class Label extends Text {
	public constructor(text: string | number, style: {}, public positionX = 50, public positionY = 50) {
		super(String(text), style)
		this.anchor.set(0.5)
	}
}

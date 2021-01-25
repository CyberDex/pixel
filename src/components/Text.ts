import { Text as PixiText, TextStyleOptions } from 'pixi.js'
import { IComponent } from './types'

export class Text extends PixiText {
	public constructor(props: IText) {
		super(String(props.text || ''), props.style || {})
		this.anchor.set(0.5)
	}

	public resize() { }
}

export interface IText extends IComponent {
	text?: string | number,
	style?: TextStyleOptions,
}

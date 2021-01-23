import { Text, TextStyleOptions } from 'pixi.js'
import { IComponent } from '.'

export class Label extends Text {
	public constructor(opts: ILabel) {
		super(String(opts.text || ''), opts.style || {})
		this.anchor.set(0.5)
	}

	public resize() { }
}

export interface ILabel extends IComponent {
	text?: string | number,
	style?: TextStyleOptions,
}

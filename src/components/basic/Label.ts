import { Text, TextStyleOptions } from 'pixi.js'
import { IComponent } from '../../interfaces'

/**
 * Component for creation small text labels with [[View]] repositioning functionality
 *
 * @export
 * @class Label
 * @extends {Text}
 */
export class Label extends Text {
	public positionX?: number
	public positionY?: number

	public constructor(opts: ILabel) {
		super(String(opts.text || ''), opts.style || {})
		this.anchor.set(0.5)

		this.positionX = opts.positionX
		this.positionY = opts.positionY
	}
}

export interface ILabel extends IComponent {
	text?: string | number,
	style?: TextStyleOptions,
}

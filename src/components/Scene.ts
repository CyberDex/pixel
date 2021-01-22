import { View } from './View'
import { Button, IButton } from './Button'

export class Scene extends View {
	public constructor() {
		super()
		this.init()
	}

	public async init() { }

	public addButton(opts: IButton): Button {
		return this.addChild(new Button(opts))
	}
}

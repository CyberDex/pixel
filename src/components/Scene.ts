import { View } from './View'
import { Button, IButton } from './Button'

export class Scene extends View {
	public constructor(
		public positionX?: number,
		public positionY?: number,
	) {
		super(positionX, positionY)
	}

	public addButton(opts: IButton): Button {
		return this.add(new Button(opts))
	}
}

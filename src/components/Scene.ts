import { IView, View } from './View'
import { Button, IButton } from './Button'
import { IText, Text } from './Text'

export class Scene extends View {
	public constructor() {
		super()
	}

	public async init() { }

	public addButton(
		props: IButton,
		button = new Button(props)
	): Button {
		this.add(button)
		return button
	}

	public addText(
		props: IText,
		text = new Text(props)
	): Text {
		this.add(new Text(props))
		return text
	}

	public addImg(
		props: IView,
		img = new View(props)
	): View {
		this.add(new View(props))
		return img
	}

	public async loadAssets(assets?: string[]) {
		if (!assets) return
		for (const asset of assets) {
			await this.loadAsset(asset)
		}
	}

	public loadAsset(url): Promise<void> {
		const loader = new PIXI.loaders.Loader()
		return new Promise(resolve => {
			loader
				.add(url)
				.load(resolve)
		})
	}

	public async loadJSON(config: string): Promise<Object> {
		const response = await fetch(config)
		return response.json()
	}
}

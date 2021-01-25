import { IView, View } from './View'
import { Button, IButton } from './Button'
import { IText, Text } from './basic/Text'

export class Scene extends View {
	public constructor() {
		super()
		this.init()
	}

	public async init() { }

	public addButton(props: IButton): Button {
		return this.add(new Button(props))
	}

	public addText(props: IText): Text {
		return this.add(new Text(props))
	}

	public addImg(props: IView): View {
		return this.add(new View(props))
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

import { View } from './View'
import { Button, IButton } from './Button'

export class Scene extends View {
	public constructor() {
		super()
		this.init()
	}

	public async init() { }

	public addButton(opts: IButton): Button {
		return this.add(new Button(opts))
	}

	public async loadAssets(assets: string[]) {
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

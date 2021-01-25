import { IView, View } from './View'
import { Button, IButton } from './Button'
import { loader } from 'pixi.js'

export class Scene extends View {
	public constructor(public props: IScene = {}) {
		super(props)
	}

	public async preload(assets?: string[]) {
		await this.loadAssets(assets)
	}

	public addButton(
		props: IButton,
		button = new Button(props)
	): Button {
		this.add(button)
		return button
	}

	public async loadAssets(assets?: string[]) {
		if (!assets) return
		for (const asset of assets) {
			await this.loadAsset(asset)
		}
	}

	public loadAsset(url): Promise<void> {
		return new Promise((resolve, reject) => {
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

export interface IScene extends IView {
}
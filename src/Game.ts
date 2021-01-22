import { Application, ApplicationOptions } from 'pixi.js'
import { LayoutManager } from './controllers/LayoutManager'
import { ViewManager } from './controllers/ViewManager'

export class Game extends Application {
	private static instance: Game
	public static getInstance(opts?: ApplicationOptions): Game {
		return Game.instance
			? Game.instance
			: Game.instance = new Game(opts)
	}

	public views: ViewManager
	public layout: LayoutManager

	public constructor(opts?: ApplicationOptions) {
		super(opts)

		this.views = new ViewManager(this)

		this.layout = LayoutManager.instance
		this.layout.onResize((w, h) => this.renderer.resize(w, h))

		document.body.appendChild(this.view)
	}

	public async init() { }

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

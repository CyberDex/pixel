import { Application, ApplicationOptions } from 'pixi.js'
import { LayoutManager } from './controllers/LayoutManager'
import { ViewManager } from './controllers/ViewManager'

export class App extends Application {
	public views: ViewManager
	public layout: LayoutManager
	private static inst: App

	public constructor(opts?: ApplicationOptions) {
		super(opts)
		this.views = new ViewManager(this)
		this.layout = LayoutManager.instance
		this.layout.onResize((w, h) => this.renderer.resize(w, h))
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

	/**
	 * Load and parse JSON
	 *
	 * @param {string} config
	 * @returns {Promise<Object>}
	 * @memberof App
	 */
	public async loadConfig(config: string): Promise<Object> {
		const response = await fetch(config)
		return response.json()
	}

	public static getInstance(opts?: ApplicationOptions): App {
		if (!App.inst) {
			App.inst = new App(opts)
		}
		return App.inst
	}
}

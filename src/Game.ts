import { Application, ApplicationOptions } from 'pixi.js'
import { ViewManager } from './controllers/ViewManager'

export class Game extends Application {
	private static instance: Game
	public static getInstance(opts?: ApplicationOptions): Game {
		return Game.instance
			? Game.instance
			: Game.instance = new Game(opts)
	}

	public scenes: ViewManager

	public constructor(opts?: ApplicationOptions) {
		super(opts)
		this.scenes = new ViewManager(this)
		this.init()
	}

	public async init() {
		document.addEventListener('DOMContentLoaded', () => {
			document.body.appendChild(this.view)
			window.addEventListener('resize', () => this.resize())
			this.resize()
		})
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

	private resize() {
		this.renderer.resize(window.innerWidth, window.innerHeight)
	}
}

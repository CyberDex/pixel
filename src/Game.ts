import { Application, ApplicationOptions } from 'pixi.js'
import { Scene } from './components/Scene'

export class Game extends Application {
	private static instance: Game
	public static getInstance(opts?: ApplicationOptions): Game {
		return Game.instance
			? Game.instance
			: Game.instance = new Game(opts)
	}
	public scenes: {
		[key: string]: Scene
	} = {}

	public addScene(
		name: string = String(this.scenes.length),
		scene: Scene = new Scene()
	): Scene {
		this.scenes[name] = scene
		this.stage.addChild(scene)
		return scene
	}

	public showScene(scene: string) {
		for (const scene in this.scenes) {
			this.scenes[scene].visible = false
		}
		this.scenes[scene].visible = true
	}

	public constructor(opts?: ApplicationOptions) {
		super(opts)
		this.init()
	}

	public async init() {
		document.addEventListener('DOMContentLoaded', () => {
			document.body.appendChild(this.view)
			window.addEventListener('resize', () => this.resize())
			this.resize()
		})
	}

	private resize() {
		this.renderer.resize(window.innerWidth, window.innerHeight)
	}
}

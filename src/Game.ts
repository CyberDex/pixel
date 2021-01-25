import { Application, ApplicationOptions } from 'pixi.js'
import { IScene, Scene } from './components/Scene'

export class Game extends Application {
	private static instance: Game
	public static getInstance(props?: ApplicationOptions): Game {
		return Game.instance
			? Game.instance
			: Game.instance = new Game(props)
	}
	public scenes: {
		[key: string]: Scene
	} = {}

	public constructor(props?: ApplicationOptions) {
		super(props)

		document.addEventListener('DOMContentLoaded', () => {
			document.body.appendChild(this.view)
			window.addEventListener('resize', () => this.resize())
			this.resize()
		})
	}

	public addScene(
		name: string = String(this.scenes.length),
		props?: IScene,
		scene: Scene = new Scene(props)
	): Scene {
		this.scenes[name] = scene
		this.stage.addChild(scene)
		scene.resize()
		return scene
	}

	private resize() {
		this.renderer.resize(window.innerWidth, window.innerHeight)
		for (const scene in this.scenes) this.scenes[scene].resize()
	}
}

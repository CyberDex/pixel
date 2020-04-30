import { View } from '../components/View'
import { App } from '../App'

export class SceneManager {
	private readonly scenes: {
		[key: string]: View
	} = {}

	public constructor(public app: App) {}

	public add(sceneName: string, sceneInst: View) {
		this.scenes[sceneName] = sceneInst
		this.app.stage.addChild(sceneInst)
		if (Object.keys(this.scenes).length > 1) {
			this.hide(sceneName)
		}
	}

	public show(scene: string | string[], state = true) {
		Array.isArray(scene)
			? scene.forEach((scn) => (this.scenes[scn].visible = state))
			: (this.scenes[scene].visible = state)
	}

	public hide(scene: string | string[]) {
		this.show(scene, false)
	}

	public showOnly(scene: string | string[]) {
		for (const scn in this.scenes) {
			if (this.scenes.hasOwnProperty(scn)) {
				this.hide(scene)
			}
		}
		this.show(scene)
	}
}

import { View } from '../components/View'
import { Game } from '../Game'

/**
 * Manager for [[add]], [[show]] / [[hide]] [[View]] instances
 *
 * @export
 * @class ViewManager
 */
export class ViewManager {
	private readonly scenes: {
		[key: string]: View
	} = {}

	public constructor(public game: Game) { }

	/**
	 * Add instance of [[View]] to [[ViewManager]] register
	 * only first added [[View]] instance will be visible
	 *
	 * @param {string} sceneName
	 * @param {View} sceneInst
	 * @memberof ViewManager
	 */
	public add(sceneName: string, sceneInst: View) {
		this.scenes[sceneName] = sceneInst
		this.game.stage.addChild(sceneInst)
		if (Object.keys(this.scenes).length > 1) {
			this.hide(sceneName)
		}
	}

	/**
	 * Make [[View]] instance visible
	 *
	 * @param {(string | string[])} scene
	 * @param {boolean} [state=true]
	 * @memberof ViewManager
	 */
	public show(scene: string | string[], state = true) {
		Array.isArray(scene)
			? scene.forEach((scn) => (this.scenes[scn].visible = state))
			: (this.scenes[scene].visible = state)
	}

	/**
	 * Make [[View]] instance hidden
	 *
	 * @param {(string | string[])} scene
	 * @memberof ViewManager
	 */
	public hide(scene: string | string[]) {
		this.show(scene, false)
	}

	/**
	 * Hide all registered [[View]] instances and show only pointed one
	 *
	 * @param {(string | string[])} scene
	 * @memberof ViewManager
	 */
	public showOnly(scene: string | string[]) {
		for (const scn in this.scenes) {
			if (this.scenes.hasOwnProperty(scn)) {
				this.hide(scn)
			}
		}
		this.show(scene)
	}
}

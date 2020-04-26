import { View } from '../components/View'
import { App } from '../App';

export class SceneManager {
    private scenes: {
        [key: string]: View
    } = {}

    constructor(public app: App) { }

    public add(sceneName: string, sceneInst: View) {
        this.scenes[sceneName] = sceneInst
        this.app.stage.addChild(sceneInst)
        if (Object.keys(this.scenes).length > 1) {
            this.hide(sceneName)
        }
    }

    public show(scene: string | string[], state: boolean = true) {
        Array.isArray(scene)
            ? scene.forEach(scene => this.scenes[scene].visible = state)
            : this.scenes[scene].visible = state
    }

    public hide(scene: string | string[]) {
        this.show(scene, false)
    }

    public showOnly(scene: string | string[]) {
        for (const scene in this.scenes) {
            this.hide(scene)
        }
        this.show(scene)
    }
}
import { View } from '../components/View'

export class SceneManager extends View {
    private scenes: {
        [key: string]: View
    } = {}

    constructor() {
        super()
    }

    public addScene(sceneName: string, sceneInst: View) {
        sceneInst.visible = false
        this.scenes[sceneName] = sceneInst
        this.addChild(sceneInst)
    }

    public showScene(scene: string) {
        this.scenes[scene].visible = true
    }

    public showOnlyScene(scene: string) {
        for (const scene in this.scenes) {
            this.scenes[scene].visible = false
        }
        this.scenes[scene].visible = true
    }

    public hideScene(scene: string) {
        this.scenes[scene].visible = false
    }

    public resize(w, h: number) {
        for (const scene in this.scenes) {
            this.scenes[scene].resize(w, h)
        }
    }

}
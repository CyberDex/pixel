import { Application } from 'pixi.js'
import { LayoutManager } from './controllers/LayoutManager';
import { SceneManager } from './controllers/SceneManager';

export class App extends Application {
    public scenes: SceneManager

    constructor(params) {
        super(params)
        this.scenes = new SceneManager(this)
        LayoutManager.instance.onResize((w, h) => this.renderer.resize(w, h))
    }
}
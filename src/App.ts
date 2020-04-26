import { Application } from 'pixi.js'
import { LayoutManager } from './controllers/LayoutManager';

export class App extends Application {
    public layout: LayoutManager = LayoutManager.instance
    constructor(params) {
        super(params)
        this.renderer.resize(this.layout.width, this.layout.height)
        this.layout.onResize(() => this.renderer.resize(this.layout.width, this.layout.height))
    }
}
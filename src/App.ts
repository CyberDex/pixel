import { Application } from 'pixi.js'

export class App extends Application {
    constructor() {
        super()
        this.resizeHandler()
        window.addEventListener('resize', () => this.resizeHandler())
        document.body.appendChild(this.view)
    }

    public resizeHandler() {
        this.renderer.resize(window.innerWidth, window.innerHeight)
    }
}
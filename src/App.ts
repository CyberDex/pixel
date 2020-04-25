import { Application } from 'pixi.js'

export class App extends Application {
    constructor() {
        super()
        window.addEventListener('resize', () => {
            this.resizeHandler()
            this.resizeRenderer()
        })
        document.body.appendChild(this.view)
        this.resizeRenderer()
    }

    public resizeHandler() { }

    private resizeRenderer() {
        this.renderer.resize(window.innerWidth, window.innerHeight)
    }
}
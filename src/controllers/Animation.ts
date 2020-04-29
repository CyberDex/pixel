import { DisplayObject } from 'pixi.js'

export class Animation {
    private _isPlaying: boolean = false
    private directions: IAnimate = {}

    constructor(
        private element: DisplayObject,
        private animate: IAnimation) {
    }

    public play() {
        this._isPlaying = true
        this.update()
    }

    public stop() {
        this._isPlaying = false
    }

    private update() {
        if (!this.isPlaying) { return }

        for (const prop in this.animate.animate) {
            const from = this.element[prop]
            const to = this.animate[prop]
            const direction = this.directions[prop]
                ? this.directions[prop]
                : (this.directions[prop] = from > to ? -1 : 1)
            if (direction > 0 && to >= from) { return }
            if (direction < 0 && to <= from) { return }
            this.element[prop] += direction
        }

        requestAnimationFrame(() => this.update())
    }

    public get isPlaying() {
        return this._isPlaying
    }
}

export interface IAnimation {
    delay: number
    animate?: IAnimate,
    loop?: boolean
}

export interface IAnimate {
    x?: number
    y?: number
    width?: number
    height?: number
    rotation?: number
    scale?: number
}
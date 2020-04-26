import { Container, Sprite, Text, Graphics, autoDetectRenderer, RenderTexture } from 'pixi.js'
import { LayoutManager } from '../controllers/LayoutManager';

export class View extends Container {
    private readonly bg: Sprite

    constructor(
        public positionX: number = 50,
        public positionY: number = 50,
        public bgImage?: string,
        public content?: {
            [key: string]: View
        },
    ) {
        super()
        if (bgImage) {
            this.bg = Sprite.fromImage(bgImage)
            this.addChild(this.bg)
        }
        if (content) {
            for (const child in content) {
                this.addChild(content[child])
            }
        }
        LayoutManager.instance.onResize((w, h) => this.onResize(w, h))
    }

    public addText(text: string, style, x, y) {
        const textEl = new Text(text, style)
        textEl.anchor.set(.5)
        this.addChild(textEl)
        return textEl
    }

    public addRect(
        x: number = 0,
        y: number = 0,
        width: number = 200,
        height: number = 40,
        color: number = 0xDE3249,
        round: number = 0
    ) {
        const rect = new Graphics()
        rect.beginFill(color)
        rect.drawRoundedRect(x, y, width, height, round)
        rect.endFill()
        return rect
    }

    public addCircle(
        x: number = 0,
        y: number = 0,
        radius: number = 40,
        color: number = 0xDE3249
    ) {
        const circle = new Graphics()
        circle.lineStyle(0)
        circle.beginFill(color, 1)
        circle.drawCircle(x, y, radius)
        circle.endFill()
        return circle
    }

    public onResize(w: number, h: number) {
        this.children.forEach((element: any) => {
            element.positionX &&
                (element.x = w / 100 * element.positionX)
            element.positionY &&
                (element.y = h / 100 * element.positionY)
        })
    }
}
import { Container, Sprite, Text, TextStyle } from 'pixi.js';

export class View extends Container {
    private readonly bg: Sprite

    constructor(
        private bgImage?: string,
        private content?: {
            [key: string]: View
        }
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
    }

    public addText(text: string, style: TextStyle) {
        const textEl = new Text(text, style)
        textEl.anchor.set(.5)
        this.addChild(textEl)
        return textEl
    }

    public resize(w, h: number) { }
}
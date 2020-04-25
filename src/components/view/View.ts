import { Container, Sprite } from 'pixi.js';

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
}
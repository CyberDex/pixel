import { Text } from 'pixi.js'

export class Label extends Text {
    constructor(text: string | number, style: {},
        public positionX: number = 50,
        public positionY: number = 50,
    ) {
        super(String(text), style)
        this.anchor.set(.5)
    }
}
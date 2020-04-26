export class LayoutManager {
    public width: number
    public height: number
    private cb: { (w?: number, h?: number): void }[] = []

    private static inst: LayoutManager;
    public static get instance(): LayoutManager {
        if (!LayoutManager.inst) {
            LayoutManager.inst = new LayoutManager();
        }
        return LayoutManager.inst;
    }

    private constructor() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        window.addEventListener('resize', () => this.resize())
        document.addEventListener('DOMContentLoaded', () => this.resize())
    }

    private resize() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.cb.forEach(cb => cb(this.width, this.height))
    }

    public onResize(cb: { (w?: number, h?: number): void }): number {
        this.cb.push(cb)
        return this.cb.length
    }

    public offResize(cbID: number) {
        delete this.cb[cbID]
    }
}
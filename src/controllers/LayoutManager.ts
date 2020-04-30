export class LayoutManager {
	private static inst: LayoutManager
	public static get instance(): LayoutManager {
		if (!LayoutManager.inst) {
			LayoutManager.inst = new LayoutManager()
		}
		return LayoutManager.inst
	}
	public width: number
	public height: number

	private readonly cb: { (w?: number, h?: number): void }[] = []

	private constructor() {
		this.width = window.innerWidth
		this.height = window.innerHeight
		window.addEventListener('resize', () => this.resize())
		document.addEventListener('DOMContentLoaded', () => this.resize())
	}

	public onResize(cb: { (w?: number, h?: number): void }): number {
		this.cb.push(cb)
		return this.cb.length
	}

	public offResize(cbID: number) {
		delete this.cb[cbID]
	}

	private resize() {
		this.width = window.innerWidth
		this.height = window.innerHeight
		this.cb.forEach((cb) => cb(this.width, this.height))
	}
}

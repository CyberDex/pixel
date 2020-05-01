/**
 * Singleton class for controlling of canvas resize and update elements
 *
 * @export
 * @class LayoutManager
 */
export class LayoutManager {
	private static inst: LayoutManager
	public static get instance(): LayoutManager {
		if (!LayoutManager.inst) {
			LayoutManager.inst = new LayoutManager()
		}
		return LayoutManager.inst
	}

	/**
	 * Current canvas width
	 *
	 * @type {number}
	 * @memberof LayoutManager
	 */
	public width: number

	/**
	 * Current canvas height
	 *
	 * @type {number}
	 * @memberof LayoutManager
	 */
	public height: number

	private readonly cb: { (w?: number, h?: number): void }[] = []

	private constructor() {
		this.width = window.innerWidth
		this.height = window.innerHeight
		window.addEventListener('resize', () => this.resize())
		document.addEventListener('DOMContentLoaded', () => this.resize())
	}

	/**
	 * Register Canvas resize callback, returns event ID to unregister event with [[offResize]] method
	 *
	 * @param {{ (canvasWidth?: number, canvasHeight?: number): void }} cb
	 * @returns {number}
	 * @memberof LayoutManager
	 */
	public onResize(cb: { (canvasWidth?: number, canvasHeight?: number): void }): number {
		this.cb.push(cb)
		return this.cb.length
	}

	/**
	 * Unregister Canvas resize callback
	 *
	 * @param {number} cbID
	 * @memberof LayoutManager
	 */
	public offResize(cbID: number) {
		delete this.cb[cbID]
	}

	/**
	 * Manual layout update
	 *
	 * @memberof LayoutManager
	 */
	public update() {
		this.resize()
	}

	/**
	 * Window resize handler, will fire all registered events and notify all subscribers about resize
	 *
	 * @private
	 * @memberof LayoutManager
	 */
	private resize() {
		this.width = window.innerWidth
		this.height = window.innerHeight
		this.cb.forEach((cb) => cb(this.width, this.height))
	}
}

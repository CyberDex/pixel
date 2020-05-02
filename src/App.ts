import { Application } from 'pixi.js'
import { LayoutManager } from './controllers/LayoutManager'
import { ViewManager } from './controllers/ViewManager'

/**
 * Convenience class to create a new PIXI application.
 *
 * This class automatically creates the renderer, ticker and root container.
 *
 * Additional functionality from Pixil is resize [[renderer]] with [[LayoutManager]]
 *
 * Also [[ViewManager]] instance will be created and will be available for use with 'App.scenes' construction
 *
 * App.views holds an instance of [[ViewManager]]
 *
 * App.layout holds an instance of [[LayoutManager]]
 *
 * @export
 * @class App
 * @extends {Application}
 */
export class App extends Application {
	public views: ViewManager
	public layout: LayoutManager

	public constructor(options?: object) {
		super(options)
		this.views = new ViewManager(this)
		this.layout = LayoutManager.instance
		this.layout.onResize((w, h) => this.renderer.resize(w, h))
	}
}

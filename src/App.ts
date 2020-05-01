import { Application } from 'pixi.js'
import { LayoutManager } from './controllers/LayoutManager'
import { ViewManager } from './controllers/ViewManager'

/**
 * Convenience class to create a new PIXI application.
 * This class automatically creates the renderer, ticker and root container.
 * Additional functionality from [[Pixil]] is resize [[renderer]] with [[LayoutManager]]
 * Also [[ViewManager]] instance will be created and will be available for use with 'App.scenes' construction
 *
 * @export
 * @class App
 * @extends {Application}
 */

export class App extends Application {
	public scenes: ViewManager

	public constructor(options?: object) {
		super(options)
		this.scenes = new ViewManager(this)
		LayoutManager.instance.onResize((w, h) => this.renderer.resize(w, h))
	}
}

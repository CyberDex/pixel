import { Application } from 'pixi.js'
import { LayoutManager } from './controllers/LayoutManager'
import { SceneManager } from './controllers/SceneManager'

/**
 * Convenience class to create a new PIXI application.
 * This class automatically creates the renderer, ticker and root container.
 * Additional functionality from [[Pixil]] is resize [[renderer]] with [[LayoutManager]]
 * Also [[SceneManager]] instance will be created and will be available for use with 'App.scenes' construction
 * 
 * @export
 * @class App
 * @extends {Application}
 */

export class App extends Application {
	public scenes: SceneManager

	public constructor(options?: object) {
		super(options)
		this.scenes = new SceneManager(this)
		LayoutManager.instance.onResize((w, h) => this.renderer.resize(w, h))
	}
}

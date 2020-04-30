/**
 * @jest-environment jsdom
 */
import { App, SceneManager } from '../src/index'
import { Application } from 'pixi.js'
let app: App

describe('Test App module', () => {
	test('Create App', () => {
        app = new App()
		expect(app).toBeDefined()
		expect(app).toBeInstanceOf(Application)
		expect(app.scenes).toBeInstanceOf(SceneManager)
	})
})

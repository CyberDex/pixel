/**
 * @jest-environment jsdom
 */
import { App, ViewManager } from '../src/index'
import { Application } from 'pixi.js'
let app: App

describe('App module', () => {
	test('Create App', () => {
		app = new App()
		expect(app).toBeDefined()
		expect(app).toBeInstanceOf(Application)
		expect(app.views).toBeInstanceOf(ViewManager)
		expect(app.views).toBeInstanceOf(ViewManager)
	})
})

/**
 * @jest-environment jsdom
 */
import { View, Label } from '../../src/index'
import { Graphics } from 'pixi.js'

const view: View = new View()

describe('View module', () => {

	test('Create View', () => {
		expect(view).toBeDefined()
	})

	test('Add text', () => {
		const text = view.addText('text')
		expect(text).toBeInstanceOf(Label)
	})

	test('Add rect', () => {
		const rect = view.addRect(50, 50, 100, 100, 50)
		expect(rect).toBeInstanceOf(Graphics)
	})

	test('Add сircle', () => {
		const сircle = view.addCircle(50, 50, 100)
		expect(сircle).toBeInstanceOf(Graphics)
	})

})

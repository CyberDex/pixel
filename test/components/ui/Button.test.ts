/**
 * @jest-environment jsdom
 */
import { Button, View } from '../../../src/index'

const button: Button = new Button({ text: 'text' })

describe('Button module', () => {
	test('Create button', () => {
		expect(button).toBeDefined()
		expect(button).toBeInstanceOf(View)
	})

	test('Click calbacks', () => {
		const a = button.onClick(() => {})
		expect(a).toBe(0)

		const b = button.onClick(() => {})
		expect(b).toBe(1)
	})

	test('Buttpn actiovation', () => {
		expect(button.active).toBe(true)
		button.active = false
		expect(button.active).toBe(false)
		button.active = true
		expect(button.active).toBe(true)
	})

	//TODO: fake click event and check if click works
})

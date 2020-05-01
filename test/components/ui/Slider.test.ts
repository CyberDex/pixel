/**
 * @jest-environment jsdom
 */
import { Slider, View } from '../../../src/index'

const slider: Slider = new Slider(50, 50, 50, 50, 100)

describe('Slider module', () => {

	test('Create slider', () => {
		expect(slider).toBeDefined()
		expect(slider).toBeInstanceOf(View)
		expect(slider.value).toBe(100)
	})

	test('Change calbacks', () => {
		const a = slider.onChange(() => { })
		expect(a).toBe(0)

		const b = slider.onChange(() => { })
		expect(b).toBe(1)
	})

	//TODO: fake click event and slidev move check if change works
})

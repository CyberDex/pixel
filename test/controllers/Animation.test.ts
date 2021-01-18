/**
 * @jest-environment jsdom
 */
import { Label, Animation } from '../../src/index'

const label: Label = new Label('text')
let animation: Animation
label.x = 1
label.y = 1
label.width = 1
label.height = 1
label.rotation = 1

describe('Animation controller', () => {
	test('Create animation', () => {
		animation = new Animation(label, {
			delay: 1,
			animate: {
				x: 10,
				y: 10,
				width: 10,
				height: 10,
				rotation: 10,
			},
		})

		expect(animation).toBeDefined()
	})

	test('Play / stop animation', () => {
		expect(label.x).toBe(1)
		expect(label.y).toBe(1)
		expect(label.width).toBe(1)
		expect(label.height).toBe(1)
		expect(label.rotation).toBe(1)
		expect(animation.isPlaying).toBe(false)

		animation.play()
		expect(animation.isPlaying).toBe(true)
		animation.stop()

		expect(animation.isPlaying).toBe(false)
		expect(label.x).toBeGreaterThan(1)
		expect(label.y).toBeGreaterThan(1)
		expect(label.width).toBeGreaterThan(1)
		expect(label.height).toBeGreaterThan(1)
		expect(label.rotation).toBeGreaterThan(1)
	})
})

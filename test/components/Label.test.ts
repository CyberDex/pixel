/**
 * @jest-environment jsdom
 */
import { Label } from '../../src/index'
import { Text } from 'pixi.js'

const label: Label = new Label('text')

describe('Label module', () => {

	test('Create Label', () => {
		expect(label).toBeDefined()
		expect(label).toBeInstanceOf(Text)
	})

})

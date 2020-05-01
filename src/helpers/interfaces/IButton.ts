
import { Graphics, TextStyle } from 'pixi.js'

export interface IButton {

	/**
	 * Button text
	 *
	 * @type {string}
	 * @memberof IButton
	 */
    text?: string

	/**
	 * Button horisontal position in % from canvas width
	 *
	 * @type {number}
	 * @memberof IButton
	 */
    positionX?: number

	/**
	 * Button vertical position in % from canvas width
	 *
	 * @type {number}
	 * @memberof IButton
	 */
    positionY?: number

	/**
	 * Button width
	 *
	 * @type {number}
	 * @memberof IButton
	 */
    width?: number

	/**
	 * Button height
	 *
	 * @type {number}
	 * @memberof IButton
	 */
    height?: number

	/**
	 * Button corner rounding radius
	 *
	 * @type {number}
	 * @memberof IButton
	 */
    radius?: number

	/**
	 * Button background colour
	 *
	 * @type {(number | string)}
	 * @memberof IButton
	 */
    color?: number | string

	/**
	 * Button text style
	 *
	 * @type {*}
	 * @memberof IButton
	 */
    style?: TextStyle
}

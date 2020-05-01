export interface IAnimation {
	delay: number
	animate?: IAnimate
	loop?: boolean
}

export interface IAnimate {
	x?: number
	y?: number
	width?: number
	height?: number
	rotation?: number
	scale?: number
}

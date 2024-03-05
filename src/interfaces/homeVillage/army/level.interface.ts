import BaseLevel from '@ICommon/level.interface'

interface Level extends BaseLevel {
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	townHallLevelRequired: number
	unlockedUnit?: string | string[]
	capacity?: number
	shinyOreCapacity?: number
	glowyOreCapacity?: number
	starryOreCapacity?: number
	activeImgUrl?: string
}

export default Level

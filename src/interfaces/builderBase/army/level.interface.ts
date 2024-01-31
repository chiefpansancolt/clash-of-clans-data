import BaseLevel from '@ICommon/level.interface'

interface Level extends BaseLevel {
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	townHallLevelRequired: number
}

export default Level

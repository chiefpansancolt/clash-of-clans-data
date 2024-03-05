import BaseLevel from '@ICommon/level.interface'

interface Level extends BaseLevel {
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	builderHallLevelRequired: number
	unlockedUnit?: string
	numberOfArymCamps?: number
	healthRecovery?: number
}

export default Level

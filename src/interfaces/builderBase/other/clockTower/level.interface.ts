import BaseLevel from '@ICommon/level.interface'

interface Level extends BaseLevel {
	boostDuration: number
	timeGainedPerBoostSec: number
	timeGainedPerBoostMin: number
	timeGainedPerBoostHour: number
	timeGainedPerBoostDay: number
	relativeBoost: number
	catchUpPointOfConstruction: number
	catchUpPointOfBoost: number
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	builderHallLevelRequired: number
}

export default Level

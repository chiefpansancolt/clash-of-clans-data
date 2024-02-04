import Level from '@ICommon/level.interface'

interface BuilderBaseLevel extends Level {
	troopLevel: number
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	builderHallLevelRequired: number
}

export default BuilderBaseLevel

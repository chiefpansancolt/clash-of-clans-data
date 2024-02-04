import Level from '@ICommon/traps/level.interface'

interface BuilderBaseLevel extends Level {
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	builderHallLevelRequired: number
}

export default BuilderBaseLevel

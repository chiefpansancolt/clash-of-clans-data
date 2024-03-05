import Level from '@ICommon/traps/level.interface'

interface BuilderBaseLevel extends Level {
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	builderHallLevelRequired: number
	damage?: number
	springCapacity?: number
	airImgUrl?: string
}

export default BuilderBaseLevel

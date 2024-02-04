import TownHallLevel from '@ICommon/hall/level.interface'

interface Level extends TownHallLevel {
	builderGoldCapacity: number
	builderElixirCapacity: number
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	builderHallLevelRequired: number
}

export default Level

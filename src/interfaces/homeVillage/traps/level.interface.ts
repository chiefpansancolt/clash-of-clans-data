import Level from '@ICommon/traps/level.interface'

interface HomeVillageLevel extends Level {
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	townHallLevelRequired: number
}

export default HomeVillageLevel

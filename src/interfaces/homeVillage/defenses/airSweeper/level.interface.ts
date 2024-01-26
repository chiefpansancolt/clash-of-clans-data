import Level from '@ICommon/level.interface'

interface HomeVillagePushLevel extends Level {
	pushStrength: number
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	townHallLevelRequired: number
}

export default HomeVillagePushLevel

import Level from '../common/level.interface'

interface HomeVillageLevel extends Level {
	damagePerSecond: number
	damagePerShot: number
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	townHallLevelRequired: number
}

export default HomeVillageLevel

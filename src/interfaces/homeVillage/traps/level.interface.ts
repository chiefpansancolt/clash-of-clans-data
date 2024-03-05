import Level from '@ICommon/traps/level.interface'

interface HomeVillageLevel extends Level {
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	townHallLevelRequired: number
	damage?: number
	damageRadius?: number
	spawnedUnits?: number
	springCapacity?: number
	duration?: number
	totalDamage?: number
	airImgUrl?: string
	unarmedImgUrl?: string
}

export default HomeVillageLevel

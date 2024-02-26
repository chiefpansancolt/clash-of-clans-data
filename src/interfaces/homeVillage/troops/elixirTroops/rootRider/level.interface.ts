import HomeVillageLevel from '@IHomeVillage/troops/level.interface'

interface Level extends HomeVillageLevel {
	wallDamagePerSecond: number
	wallDamagePerHit: number
}

export default Level

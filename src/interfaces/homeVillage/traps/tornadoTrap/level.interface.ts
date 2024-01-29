import HomeVillageLevel from '@IHomeVillage/traps/level.interface'

interface Level extends HomeVillageLevel {
	duration: number
	totalDamage: number
	unarmedImgUrl: string
}

export default Level

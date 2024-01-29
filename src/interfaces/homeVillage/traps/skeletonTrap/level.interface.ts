import HomeVillageLevel from '@IHomeVillage/traps/level.interface'

interface Level extends HomeVillageLevel {
	spawnedUnits: number
	airImgUrl: string
	unarmedImgUrl: string
}

export default Level

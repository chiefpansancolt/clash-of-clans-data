import HomeVillageLevel from '@IHomeVillage/level.interface'

interface Level extends HomeVillageLevel {
	repairPerSecond: number
	repairPerHit: number
	attackingImgUrl: string
}

export default Level

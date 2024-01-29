import HomeVillageLevel from '@IHomeVillage/defenses/level.interface'

interface Level extends HomeVillageLevel {
	repairPerSecond: number
	repairPerHit: number
	attackingImgUrl: string
}

export default Level

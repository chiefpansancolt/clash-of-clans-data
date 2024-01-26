import HomeVillageLevel from '@IHomeVillage/level.interface'

interface Level extends HomeVillageLevel {
	shockwaveDamage: number
	activeImgUrl: string
	depletedImgUrl: string
}

export default Level

import HomeVillageLevel from '@IHomeVillage/level.interface'

interface Level extends HomeVillageLevel {
	damagePerShotMax: number
	splashDamageMin: number
	splashDamageMax: number
	depletedImgUrl: string
}

export default Level

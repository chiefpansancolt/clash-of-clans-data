import HomeVillageLevel from '@IHomeVillage/troops/level.interface'

interface Level extends HomeVillageLevel {
	dpsOnHeroes: number
	speedDecrease: number
	attackRateDecrease: number
}

export default Level

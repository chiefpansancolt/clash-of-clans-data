import HomeVillageLevel from '@IHomeVillage/troops/level.interface'

interface Level extends HomeVillageLevel {
	damageWhenDestroyed: number
	damageVsWalls: number
	damageWhenDestroyedVsWalls: number
}

export default Level

import HomeVillageLevel from '@IHomeVillage/troops/level.interface'

interface Level extends HomeVillageLevel {
	damageUponDeath: number
	golemitesSpawned: number
}

export default Level

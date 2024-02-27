import HomeVillageLevel from '@IHomeVillage/troops/level.interface'

interface Level extends HomeVillageLevel {
	damageUponDeath: number
	lavaPupsOnOffense: number
	lavaPupsOnDefense: number
}

export default Level

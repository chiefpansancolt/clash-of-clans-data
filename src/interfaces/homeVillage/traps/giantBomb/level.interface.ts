import HomeVillageLevel from '@IHomeVillage/traps/level.interface'

interface Level extends HomeVillageLevel {
	damage: number
	damageRadius: number
	unarmedImgUrl: string
}

export default Level

import HomeVillageLevel from '@IHomeVillage/troops/level.interface'

interface Level extends HomeVillageLevel {
	freezeTimeAfterDeathOnOffense: number
	freezeTimeAfterDeathOnDefense: number
}

export default Level

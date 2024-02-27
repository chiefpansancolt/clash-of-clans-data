import HomeVillageLevel from '@IHomeVillage/troops/level.interface'

interface Level extends HomeVillageLevel {
	skeletonsPerSummon: number
	maxSkeletonsSummoned: number
}

export default Level

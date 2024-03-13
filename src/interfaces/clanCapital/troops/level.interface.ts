import ArmyLevel from '@ICommon/army/level.interface'

interface Level extends ArmyLevel {
	damage?: number
	damageVsWalls?: number
	secondatdChainDamage?: number
	damageUponDeath?: number
	spawnedSkeletons?: number
	spawnedSkeletonGliders?: number
	spawnedSkeletonsUponDeath?: number
	lastStandHitpoints?: number
	damagePerSecondAfter15?: number
	damagePerSecondAfter17?: number
	damagePerSecondAfter3?: number
	damagePerSecondAfter32?: number
	barrackLevelRequired?: number
	baseImgUrl: string
}

export default Level

import WallLevel from '@ICommon/walls/level.interface'

interface Level extends WallLevel {
	builderGoldBuildCost: number
	builderGoldCumulativeCost: number
	builderElixirBuildCost: number
	builderElixirCumulativeCost: number
	wallRingCost: number
	townHallLevelRequired: number
}

export default Level

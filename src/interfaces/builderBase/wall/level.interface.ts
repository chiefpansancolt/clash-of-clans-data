import WallLevel from '@ICommon/wallLevel.interface'

interface Level extends WallLevel {
	builderGoldBuildCost: number
	builderGoldCumulativeCost: number
	builderElixirBuildCost: number
	builderElixirCumulativeCost: number
	wallRingCost: number
	townHallLevelRequired: number
}

export default Level

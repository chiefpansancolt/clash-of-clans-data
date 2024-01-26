import WallLevel from '@ICommon/wallLevel.interface'

interface Level extends WallLevel {
	builderGoldBuildCost: number
	builderGoldCumulativeCost: number
	builderElixirBuildCost: number
	builderElixirCumulativeCost: number
	wallRingCost: number
}

export default Level

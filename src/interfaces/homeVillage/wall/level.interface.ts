import WallLevel from '@ICommon/wallLevel.interface'

interface Level extends WallLevel {
	goldBuildCost: number
	goldCumulativeCost: number
	elixirBuildCost: number
	elixirCumulativeCost: number
	wallRingCost: number
}

export default Level
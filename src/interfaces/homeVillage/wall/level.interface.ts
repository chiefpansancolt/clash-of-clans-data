import WallLevel from '@ICommon/walls/level.interface'

interface Level extends WallLevel {
	goldBuildCost: number
	goldCumulativeCost: number
	elixirBuildCost: number
	elixirCumulativeCost: number
	wallRingCost: number
	townHallLevelRequired: number
}

export default Level

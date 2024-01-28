import WallLevel from '@ICommon/walls/level.interface'

interface Level extends WallLevel {
	buildCost: number
	cumulativeCost: number
	clanCapitalLevel: number
	districtHallLevel: number
	groupImgUrl: string
}

export default Level

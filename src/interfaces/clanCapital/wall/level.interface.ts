import WallLevel from '@ICommon/wallLevel.interface'

interface Level extends WallLevel {
	buildCost: number
	cumulativeCost: number
	clanCapitalLevel: number
	districtHallLevel: number
	groupImgUrl: string
}

export default Level

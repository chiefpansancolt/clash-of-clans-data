import Level from '@ICommon/traps/level.interface'

interface ClanCapitalLevel extends Level {
	damage: number
	clanCapitalLevel?: number
	districtHallLevel?: number
	airImgUrl?: string
	projectileCount?: number
}

export default ClanCapitalLevel

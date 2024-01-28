import Level from '@/interfaces/common/traps/level.interface'

interface ClanCapitalLevel extends Level {
	damage: number
	clanCapitalLevel: number
	districtHallLevel: number
}

export default ClanCapitalLevel

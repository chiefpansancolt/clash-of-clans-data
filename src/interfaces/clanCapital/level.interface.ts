import Level from '../common/level.interface'

interface ClanCapitalLevel extends Level {
	damagePerSecond: number
	damagePerShot: number
	clanCapitalLevel: number
	districtHallLevel: number
}

export default ClanCapitalLevel

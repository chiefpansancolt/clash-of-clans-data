import Level from '@ICommon/level.interface'

interface ClanCapitalLevel extends Level {
	damagePerSecond?: number
	damagePerShot?: number
	clanCapitalLevel?: number
	districtHallLevel?: number
	damageWhenDestroyed?: number
	secondaryChainDamage?: number
	damagePerSecondAfter25?: number
	damagePerSecondAfter75?: number
	troopLevel?: number
}

export default ClanCapitalLevel

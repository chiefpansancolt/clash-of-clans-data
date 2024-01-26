import ClanCapitalLevel from '@IClanCapital/level.interface'

interface Level extends ClanCapitalLevel {
	damagePerSecondAfter25: number
	damagePerSecondAfter75: number
}

export default Level

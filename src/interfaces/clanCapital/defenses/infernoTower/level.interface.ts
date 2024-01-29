import ClanCapitalLevel from '@IClanCapital/defenses/level.interface'

interface Level extends ClanCapitalLevel {
	damagePerSecondAfter25: number
	damagePerSecondAfter75: number
}

export default Level

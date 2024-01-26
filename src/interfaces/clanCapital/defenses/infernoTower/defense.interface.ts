import ClanCapitalDefense from '@IClanCapital/defense.interface'
import Level from '@IClanCapital/defenses/infernoTower/level.interface'

interface Defense extends ClanCapitalDefense {
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Defense

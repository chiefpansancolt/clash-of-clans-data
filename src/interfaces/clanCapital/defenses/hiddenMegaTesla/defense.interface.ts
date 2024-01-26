import ClanCapitalDefense from '@IClanCapital/defense.interface'
import Level from '@IClanCapital/defenses/hiddenMegaTesla/level.interface'
import Mode from '@IClanCapital/defenses/hiddenMegaTesla/mode.interface'

interface Defense extends ClanCapitalDefense {
	levels: Level[]
	modes: Mode[]

	getLevel(level: number): Level | undefined
}

export default Defense

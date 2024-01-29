import ClanCapitalDefense from '@IClanCapital/defenses/defense.interface'
import Level from '@IClanCapital/defenses/hiddenMegaTesla/level.interface'
import Mode from '@IClanCapital/defenses/hiddenMegaTesla/mode.interface'

interface Defense extends ClanCapitalDefense {
	levels: Level[]
	mode: Mode | Mode[]

	getLevel(level: number): Level | undefined
}

export default Defense

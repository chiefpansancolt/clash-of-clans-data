import ClanCapitalDefense from '@IClanCapital/defenses/defense.interface'
import Mode from '@IClanCapital/defenses/rocketArtillery/mode.interface'

interface Defense extends ClanCapitalDefense {
	mode: Mode | Mode[]
}

export default Defense

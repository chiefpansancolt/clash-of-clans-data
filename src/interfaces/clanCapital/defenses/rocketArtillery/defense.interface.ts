import ClanCapitalDefense from '@IClanCapital/defense.interface'
import Mode from '@IClanCapital/defenses/rocketArtillery/mode.interface'

interface Defense extends ClanCapitalDefense {
	modes: Mode[]
}

export default Defense

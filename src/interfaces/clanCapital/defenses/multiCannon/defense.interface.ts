import ClanCapitalDefense from '@IClanCapital/defense.interface'
import Mode from '@IClanCapital/defenses/multiCannon/mode.interface'

interface Defense extends ClanCapitalDefense {
	modes: Mode[]
}

export default Defense

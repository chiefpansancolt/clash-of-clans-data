import ClanCapitalLevel from '../clanCapital/level.interface'
import Defense from '../common/defense.interface'
import CapitalHallDefense from '../clanCapital/capitalHallDefense.interface'
import TownHallDefense from '../common/townHallDefense.interface'

interface ClanCapitalDefense extends Defense {
	levels: ClanCapitalLevel[]
	capitalHallDetails: CapitalHallDefense[]

	getLevel(levelr: number): ClanCapitalLevel | undefined
	getCapitalHallLevel(name: string, level: number): TownHallDefense | undefined
}

export default ClanCapitalDefense

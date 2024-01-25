import ClanCapitalLevel from '@IClanCapital/level.interface'
import Defense from '@ICommon/defense.interface'
import CapitalHallDefense from '@IClanCapital/capitalHallDefense.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'

interface ClanCapitalDefense extends Defense {
	levels: ClanCapitalLevel[]
	capitalHallDetails: CapitalHallDefense[]

	getLevel(levelr: number): ClanCapitalLevel | undefined
	getCapitalHallLevel(name: string, level: number): TownHallDefense | undefined
}

export default ClanCapitalDefense

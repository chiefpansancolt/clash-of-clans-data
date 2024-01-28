import Level from '@IClanCapital/defenses/superDragonPost/level.interface'
import Defense from '@ICommon/defense.interface'
import CapitalHallDefense from '@IClanCapital/capitalHallDefense.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'
import Troop from '@ICommon/troop.interface'

interface ClanCapitalDefense extends Defense {
	ruinImgUrl: string
	levels: Level[]
	troops: Troop[]
	capitalHallDetails: CapitalHallDefense[]

	getLevel(level: number): Level | undefined
	getCapitalHallLevel(name: string, level: number): TownHallDefense | undefined
}

export default ClanCapitalDefense

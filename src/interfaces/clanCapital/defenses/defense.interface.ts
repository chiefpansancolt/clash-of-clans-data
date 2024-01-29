import Level from '@IClanCapital/defenses/level.interface'
import Defense from '@ICommon/defenses/defense.interface'
import CapitalHallDetails from '@IClanCapital/defenses/capitalHallDetails.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

interface ClanCapitalDefense extends Defense {
	ruinImgUrl: string
	levels: Level[]
	capitalHallDetails: CapitalHallDetails[]

	getLevel(level: number): Level | undefined
	getCapitalHallLevel(name: string, level: number): TownHallDetails | undefined
}

export default ClanCapitalDefense

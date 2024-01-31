import Level from '@IClanCapital/defenses/raidCartPost/level.interface'
import Defense from '@ICommon/defenses/defense.interface'
import CapitalHallDetails from '@IClanCapital/defenses/capitalHallDetails.interface'
import TownHallDetails from '@ICommon/hall/details.interface'
import Troop from '@ICommon/defenses/troop.interface'

interface ClanCapitalDefense extends Defense {
	ruinImgUrl: string
	levels: Level[]
	troops: Troop[]
	capitalHallDetails: CapitalHallDetails[]

	getLevel(level: number): Level | undefined
	getCapitalHallLevel(name: string, level: number): TownHallDetails | undefined
}

export default ClanCapitalDefense

import Level from '@IClanCapital/defenses/raidCartPost/level.interface'
import Defense from '@ICommon/defenses/defense.interface'
import ClanCapitalDetails from '@IClanCapital/hall/details.interface'
import Details from '@IClanCapital/hall/hallDetails.interface'
import Troop from '@ICommon/defenses/troop.interface'

interface ClanCapitalDefense extends Defense {
	ruinImgUrl: string
	levels: Level[]
	troops: Troop[]
	clanCapitalDetails: ClanCapitalDetails[]

	getLevel(level: number): Level | undefined
	getHallLevel(name: string, level: number): Details | undefined
}

export default ClanCapitalDefense

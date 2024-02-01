import Level from '@IClanCapital/traps/level.interface'
import Trap from '@ICommon/traps/trap.interface'
import ClanCapitalDetails from '@IClanCapital/hall/details.interface'
import Details from '@IClanCapital/hall/hallDetails.interface'

interface ClanCapitalTrap extends Trap {
	ruinImgUrl: string
	levels: Level[]
	clanCapitalDetails: ClanCapitalDetails[]

	getLevel(level: number): Level | undefined
	getHallLevel(name: string, level: number): Details | undefined
}

export default ClanCapitalTrap

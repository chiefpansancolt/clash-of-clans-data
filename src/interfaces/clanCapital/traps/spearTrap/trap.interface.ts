import Level from '@IClanCapital/traps/spearTrap/level.interface'
import Trap from '@ICommon/traps/trap.interface'
import CapitalHallDetails from '@IClanCapital/defenses/capitalHallDetails.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

interface ClanCapitalTrap extends Trap {
	ruinImgUrl: string
	levels: Level[]
	capitalHallDetails: CapitalHallDetails[]

	getLevel(level: number): Level | undefined
	getCapitalHallLevel(name: string, level: number): TownHallDetails | undefined
}

export default ClanCapitalTrap
import Level from '@IClanCapital/traps/level.interface'
import Trap from '@ICommon/traps/trap.interface'
import CapitalHallDefense from '@IClanCapital/capitalHallDefense.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'

interface ClanCapitalTrap extends Trap {
	ruinImgUrl: string
	levels: Level[]
	capitalHallDetails: CapitalHallDefense[]

	getLevel(level: number): Level | undefined
	getCapitalHallLevel(name: string, level: number): TownHallDefense | undefined
}

export default ClanCapitalTrap

import ClanCapitalTrap from '@IClanCapital/traps/trap.interface'
import Level from '@IClanCapital/traps/mine/level.interface'

interface Trap extends ClanCapitalTrap {
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Trap

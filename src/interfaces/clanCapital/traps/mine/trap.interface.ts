import ClanCapitalTrap from '@IClanCapital/traps/trap.interface'
import Level from '@IClanCapital/traps/mine/level.interface'
import Mode from '@IClanCapital/traps/mine/mode.interface'

interface Trap extends ClanCapitalTrap {
	levels: Level[]
	mode?: Mode | Mode[]

	getLevel(level: number): Level | undefined
}

export default Trap

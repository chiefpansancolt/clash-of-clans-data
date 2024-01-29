import ClanCapitalTrap from '@IClanCapital/traps/trap.interface'
import Level from '@IClanCapital/traps/megaMine/level.interface'
import Mode from '@IClanCapital/traps/megaMine/mode.interface'

interface Trap extends ClanCapitalTrap {
	levels: Level[]
	mode: Mode | Mode[]

	getLevel(level: number): Level | undefined
}

export default Trap

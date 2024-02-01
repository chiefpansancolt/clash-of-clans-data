import Building from '@ICommon/building.interface'
import Mode from '@ICommon/traps/mode.interface'

interface Trap extends Building {
	mode?: Mode | Mode[]
}

export default Trap

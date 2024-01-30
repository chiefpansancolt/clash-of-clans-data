import Building from '@ICommon/building.interface'
import Mode from '@ICommon/defenses/mode.interface'

interface Defense extends Building {
	mode: Mode[] | Mode
}

export default Defense

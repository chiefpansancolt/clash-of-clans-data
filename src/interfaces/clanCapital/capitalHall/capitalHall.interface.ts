import TownHall from '@ICommon/hall/hall.interface'
import Level from '@IClanCapital/capitalHall/level.interface'
import Mode from '@ICommon/defenses/mode.interface'

interface CapitalHall extends TownHall {
	mode?: Mode
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default CapitalHall

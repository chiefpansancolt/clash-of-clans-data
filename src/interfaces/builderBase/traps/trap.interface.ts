import Level from '@IBuilderBase/traps/level.interface'
import Trap from '@ICommon/traps/trap.interface'
import TownHallDetails from '@ICommon/hall/details.interface'

interface BuilderBaseTrap extends Trap {
	maxCount: number
	levels: Level[]
	townHallDetails: TownHallDetails[]

	getLevel(level: number): Level | undefined
	getTownHallLevel(level: number): TownHallDetails | undefined
}

export default BuilderBaseTrap

import Trap from '@ICommon/traps/trap.interface'
import Level from '@IBuilderBase/traps/level.interface'
import Mode from '@IBuilderBase/traps/mode.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'

interface BuilderBaseTrap extends Trap {
	maxCount: number
	levels: Level[]
	mode?: Mode | Mode[]
	builderHallDetails: BuilderHallDetails[]

	getLevel(level: number): Level | undefined
	getBuilderHallLevel(level: number): BuilderHallDetails | undefined
}

export default BuilderBaseTrap

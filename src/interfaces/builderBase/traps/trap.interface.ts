import Level from '@IBuilderBase/traps/level.interface'
import Trap from '@ICommon/traps/trap.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'

interface BuilderBaseTrap extends Trap {
	maxCount: number
	levels: Level[]
	builderHallDetails: BuilderHallDetails[]

	getLevel(level: number): Level | undefined
	getBuilderHallLevel(level: number): BuilderHallDetails | undefined
}

export default BuilderBaseTrap

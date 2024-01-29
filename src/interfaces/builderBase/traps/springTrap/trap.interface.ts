import BuilderBaseTrap from '@IBuilderBase/traps/trap.interface'
import Level from '@IBuilderBase/traps/springTrap/level.interface'

interface Trap extends BuilderBaseTrap {
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Trap

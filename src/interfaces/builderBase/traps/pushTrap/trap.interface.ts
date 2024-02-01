import BuilderBaseTrap from '@IBuilderBase/traps/trap.interface'
import Level from '@IBuilderBase/traps/pushTrap/level.interface'
import Mode from '@IBuilderBase/traps/pushTrap/mode.interface'

interface Trap extends BuilderBaseTrap {
	mode?: Mode | Mode[]
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Trap

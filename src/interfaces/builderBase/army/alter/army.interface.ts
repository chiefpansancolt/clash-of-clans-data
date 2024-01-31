import BuilderBaseArmy from '@IBuilderBase/army/army.interface'
import Level from '@IBuilderBase/army/alter/level.interface'

interface Army extends BuilderBaseArmy {
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Army

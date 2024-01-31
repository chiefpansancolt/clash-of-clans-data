import BuilderBaseArmy from '@IBuilderBase/army/army.interface'
import Level from '@IBuilderBase/army/healingHut/level.interface'

interface Army extends BuilderBaseArmy {
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Army

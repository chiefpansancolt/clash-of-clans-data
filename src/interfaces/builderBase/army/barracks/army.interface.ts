import BuilderBaseArmy from '@IBuilderBase/army/army.interface'
import Level from '@IBuilderBase/army/barracks/level.interface'

interface Army extends BuilderBaseArmy {
	ruinImgUrl: string
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Army

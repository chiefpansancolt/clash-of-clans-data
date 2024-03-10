import Level from '@IBuilderBase/troops/level.interface'
import BaseArmy from '@ICommon/army/army.interface'
import Mode from '@IBuilderBase/troops/mode.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'
import Ability from '@IBuilderBase/troops/ability.interface'

interface Army extends BaseArmy {
	housingSpace?: number
	levels: Level[]
	mode?: Mode | Mode[]
	builderHallDetails?: BuilderHallDetails[]
	abilityDetails?: Ability[]

	getLevel(level: number): Level | undefined
	getBuilderHallLevel?(level: number): BuilderHallDetails | undefined
}

export default Army

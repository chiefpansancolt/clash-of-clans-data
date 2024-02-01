import Defense from '@ICommon/defenses/defense.interface'
import Level from '@IBuilderBase/defenses/level.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'
import Achievement from '@ICommon/achievement/achievement.interface'

interface BuilderBaseDefense extends Defense {
	maxCount: number
	levels: Level[]
	builderHallDetails: BuilderHallDetails[]
	achievement: Achievement | Achievement[]

	getLevel(level: number): Level | undefined
	getBuilderHallLevel(level: number): BuilderHallDetails | undefined
}

export default BuilderBaseDefense

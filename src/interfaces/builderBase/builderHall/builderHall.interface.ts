import Hall from '@ICommon/hall/hall.interface'
import Level from '@IBuilderBase/builderHall/level.interface'
import Achievement from '@ICommon/achievement/achievement.interface'

interface BuilderHall extends Hall {
	levels: Level[]
	achievement: Achievement | Achievement[]

	getLevel(level: number): Level | undefined
}

export default BuilderHall

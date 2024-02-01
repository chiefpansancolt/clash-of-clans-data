import Building from '@ICommon/building.interface'
import Level from '@ICommon/resources/level.interface'
import Achievement from '@ICommon/achievement/achievement.interface'

interface Resource extends Building {
	maxCount: number
	levels: Level[]
	achievement: Achievement | Achievement[]

	getLevel(level: number): Level | undefined
}

export default Resource

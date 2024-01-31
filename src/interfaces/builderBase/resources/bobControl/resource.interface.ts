import Level from '@IBuilderBase/resources/bobControl/level.interface'
import TownHallDetails from '@ICommon/hall/details.interface'
import Achievement from '@ICommon/achievement/achievement.interface'

interface Resource {
	name: string
	description: string
	width: number
	height: number
	maxLevel: number
	maxCount: number
	levels: Level[]
	townHallDetails: TownHallDetails[]
	achievement: Achievement | Achievement[]

	getSize(): string
	getLevel(level: number): Level | undefined
	getTownHallLevel(level: number): TownHallDetails | undefined
}

export default Resource

import Building from '@ICommon/building.interface'
import Level from '@ICommon/resources/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'
import Achievement from '@ICommon/achievement/achievement.interface'

interface Resource extends Building {
	maxCount: number
	levels: Level[]
	townHallDetails: TownHallDetails[]
	achievement: Achievement | Achievement[]

	getLevel(level: number): Level | undefined
	getTownHallLevel(level: number): TownHallDetails | undefined
}

export default Resource

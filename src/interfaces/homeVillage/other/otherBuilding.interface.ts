import Building from '@ICommon/building.interface'
import Level from '@ICommon/level.interface'
import TownHallDetails from '@IHomeVillage/townHall/details.interface'

interface Resource extends Building {
	maxCount: number
	levels: Level[]
	townHallDetails: TownHallDetails[]

	getLevel(level: number): Level | undefined
	getTownHallLevel(level: number): TownHallDetails | undefined
}

export default Resource

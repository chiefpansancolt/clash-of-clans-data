import HomeVillageArmy from '@IHomeVillage/army/army.interface'
import Level from '@IHomeVillage/army/petHouse/level.interface'

interface Army extends HomeVillageArmy {
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Army

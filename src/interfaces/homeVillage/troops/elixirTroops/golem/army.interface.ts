import HomeVillageArmy from '@IHomeVillage/troops/elixirTroops/army.interface'
import Level from '@IHomeVillage/troops/elixirTroops/golem/level.interface'

interface Army extends HomeVillageArmy {
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Army

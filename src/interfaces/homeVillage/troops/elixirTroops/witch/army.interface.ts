import HomeVillageArmy from '@IHomeVillage/troops/elixirTroops/army.interface'
import Mode from '@IHomeVillage/troops/elixirTroops/witch/mode.interface'
import Level from '@IHomeVillage/troops/elixirTroops/witch/level.interface'

interface Army extends HomeVillageArmy {
	mode: Mode | Mode[]
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Army

import HomeVillageArmy from '@IHomeVillage/troops/elixirSpells/army.interface'
import Level from '@IHomeVillage/troops/elixirSpells/healingSpell/level.interface'
import Mode from '@IHomeVillage/troops/elixirSpells/healingSpell/mode.interface'

interface Army extends HomeVillageArmy {
	mode: Mode | Mode[]
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Army

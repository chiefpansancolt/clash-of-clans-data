import Level from '@IHomeVillage/troops/elixirTroops/healer/level.interface'
import Training from '@ICommon/army/training.interface'
import Mode from '@ICommon/army/mode.interface'
import Effectiveness from '@IHomeVillage/troops/elixirTroops/healer/effectiveness.interface'

interface Army {
	name: string
	description: string
	maxLevel: number
	mode?: Mode | Mode[]
	effectiveness: Effectiveness[]
	housingSpace: number
	barracksLevelRequired: number
	training: Training
	superTroopUnlocked?: string
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Army

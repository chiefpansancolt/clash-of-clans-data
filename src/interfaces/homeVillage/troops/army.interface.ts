import Level from '@IHomeVillage/troops/level.interface'
import BaseArmy from '@ICommon/army/army.interface'
import Training from '@ICommon/army/training.interface'
import Mode from '@IHomeVillage/troops/mode.interface'
import Effectiveness from '@IHomeVillage/troops/effectiveness.interface'

interface Army extends BaseArmy {
	housingSpace: number
	buildingLevelRequired: number
	buildingName: string
	training?: Training
	superTroopUnlocked?: string
	levels: Level[]
	mode?: Mode | Mode[]
	effectiveness?: Effectiveness[]

	getLevel(level: number): Level | undefined
}

export default Army

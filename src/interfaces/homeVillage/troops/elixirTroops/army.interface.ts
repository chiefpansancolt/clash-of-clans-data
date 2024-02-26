import Level from '@IHomeVillage/troops/level.interface'
import BaseArmy from '@ICommon/army/army.interface'
import Training from '@ICommon/army/training.interface'

interface Army extends BaseArmy {
	housingSpace: number
	barracksLevelRequired: number
	training: Training
	superTroopUnlocked?: string
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Army

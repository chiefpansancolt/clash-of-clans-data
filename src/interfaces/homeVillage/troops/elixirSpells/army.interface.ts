import Level from '@IHomeVillage/troops/level.interface'
import BaseArmy from '@ICommon/army/army.interface'

interface Army extends BaseArmy {
	housingSpace: number
	spellFactoryLevelRequired: number
	brewing: {
		spellFactoryAvailable: number
		spellFactoryUpgrading: number
	}
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Army

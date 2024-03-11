import Level from '@IHomeVillage/troops/level.interface'
import BaseArmy from '@ICommon/army/army.interface'
import Training from '@ICommon/army/training.interface'
import Mode from '@IHomeVillage/troops/mode.interface'
import Effectiveness from '@IHomeVillage/troops/effectiveness.interface'
import TownHallDetails from '@IHomeVillage/townHall/details.interface'

interface Army extends BaseArmy {
	housingSpace?: number
	buildingLevelRequired?: number
	buildingName?: string
	training?: Training
	superTroopUnlocked?: string
	levels: Level[]
	mode?: Mode | Mode[]
	effectiveness?: Effectiveness[]
	troopUnlockLevel?: number
	boostCost?: number
	boostResource?: string
	boostDurationDays?: number
	townHallDetails?: TownHallDetails[]
	hero?: string
	abilityType?: string
	rarity?: string
	unlockRequirement?: string
	baseImgUrl?: string

	getLevel(level: number): Level | undefined
	getTownHallLevel?(level: number): TownHallDetails | undefined
}

export default Army

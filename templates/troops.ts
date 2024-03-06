import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/elixirTroops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: '',
	description: '',
	maxLevel: 0,
	housingSpace: 0,
	buildingLevelRequired: 0,
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 0,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 0,
	},
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 10,
		attackSpeed: 1,
		movementSpeed: 0,
	},
	levels: [],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop

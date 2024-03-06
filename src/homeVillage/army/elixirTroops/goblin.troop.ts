import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Goblin',
	description:
		'These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless.',
	maxLevel: 9,
	housingSpace: 1,
	buildingLevelRequired: 4,
	buildingName: Constants.barracks,
	superTroopUnlocked: 'Sneaky Goblin',
	training: {
		barracksAvailableSec: 7,
		barracksAvailableMin: 0,
		barracksUpgradingSec: 14,
		barracksUpgradingMin: 0,
	},
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.resources2X,
		minRange: 0,
		maxRange: 0.4,
		attackSpeed: 1,
		movementSpeed: 32,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 11,
			damagePerAttack: 11,
			dpsOnResourceBuildings: 22,
			hitpoints: 25,
			researchCost: 0,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c6/Goblin1.png/revision/latest?cb=20171003015148',
		},
		{
			level: 2,
			damagePerSecond: 14,
			damagePerAttack: 14,
			dpsOnResourceBuildings: 28,
			hitpoints: 30,
			researchCost: 45000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 5,
			researchTimeDay: 0,
			laboratoryLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c6/Goblin1.png/revision/latest?cb=20171003015148',
		},
		{
			level: 3,
			damagePerSecond: 19,
			damagePerAttack: 19,
			dpsOnResourceBuildings: 38,
			hitpoints: 36,
			researchCost: 175000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 9,
			researchTimeDay: 0,
			laboratoryLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d7/Goblin3.png/revision/latest?cb=20171003015331',
		},
		{
			level: 4,
			damagePerSecond: 24,
			damagePerAttack: 24,
			dpsOnResourceBuildings: 48,
			hitpoints: 50,
			researchCost: 500000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 0,
			laboratoryLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d7/Goblin3.png/revision/latest?cb=20171003015331',
		},
		{
			level: 5,
			damagePerSecond: 32,
			damagePerAttack: 32,
			dpsOnResourceBuildings: 64,
			hitpoints: 65,
			researchCost: 1200000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 1,
			laboratoryLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9d/Goblin5.png/revision/latest?cb=20171003015347',
		},
		{
			level: 6,
			damagePerSecond: 42,
			damagePerAttack: 42,
			dpsOnResourceBuildings: 84,
			hitpoints: 80,
			researchCost: 2000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 1,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/ff/Goblin6.png/revision/latest?cb=20171003015407',
		},
		{
			level: 7,
			damagePerSecond: 52,
			damagePerAttack: 52,
			dpsOnResourceBuildings: 104,
			hitpoints: 105,
			researchCost: 3000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 3,
			laboratoryLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bb/Goblin7.png/revision/latest?cb=20171003015424',
		},
		{
			level: 8,
			damagePerSecond: 62,
			damagePerAttack: 62,
			dpsOnResourceBuildings: 124,
			hitpoints: 126,
			researchCost: 5600000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 6,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/48/Goblin8.png/revision/latest?cb=20201211013335',
		},
		{
			level: 9,
			damagePerSecond: 72,
			damagePerAttack: 72,
			dpsOnResourceBuildings: 144,
			hitpoints: 146,
			researchCost: 16000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 13,
			laboratoryLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7f/Goblin9.png/revision/latest?cb=20230613092954',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop

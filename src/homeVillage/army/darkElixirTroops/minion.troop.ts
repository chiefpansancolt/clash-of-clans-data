import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/elixirTroops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Minion',
	description:
		'This terror of the skies was born out of Dark Elixir. Undetectable by the Seeking Air Mine, Minions materialize with ease, but are fragile in our world.',
	maxLevel: 11,
	housingSpace: 2,
	barracksLevelRequired: 1,
	superTroopUnlocked: 'Super Minion',
	training: {
		barracksAvailableSec: 18,
		barracksAvailableMin: 0,
		barracksUpgradingSec: 36,
		barracksUpgradingMin: 0,
	},
	mode: {
		attackType: Constants.ranged,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 2.75,
		attackSpeed: 1,
		movementSpeed: 32,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 38,
			damagePerAttack: 38,
			hitpoints: 58,
			researchCost: 0,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/94/Minion1.png/revision/latest?cb=20171007153257',
		},
		{
			level: 2,
			damagePerSecond: 41,
			damagePerAttack: 41,
			hitpoints: 63,
			researchCost: 2000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 8,
			researchTimeDay: 0,
			laboratoryLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/94/Minion1.png/revision/latest?cb=20171007153257',
		},
		{
			level: 3,
			damagePerSecond: 44,
			damagePerAttack: 44,
			hitpoints: 68,
			researchCost: 5000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 16,
			researchTimeDay: 0,
			laboratoryLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/09/Minion3.png/revision/latest?cb=20171007153312',
		},
		{
			level: 4,
			damagePerSecond: 47,
			damagePerAttack: 47,
			hitpoints: 73,
			researchCost: 10000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 1,
			laboratoryLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/09/Minion3.png/revision/latest?cb=20171007153312',
		},
		{
			level: 5,
			damagePerSecond: 50,
			damagePerAttack: 50,
			hitpoints: 78,
			researchCost: 20000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 2,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/30/Minion5.png/revision/latest?cb=20171007150227',
		},
		{
			level: 6,
			damagePerSecond: 54,
			damagePerAttack: 54,
			hitpoints: 84,
			researchCost: 30000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 16,
			researchTimeDay: 2,
			laboratoryLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/11/Minion6.png/revision/latest?cb=20171007150250',
		},
		{
			level: 7,
			damagePerSecond: 58,
			damagePerAttack: 58,
			hitpoints: 90,
			researchCost: 63000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 3,
			laboratoryLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ed/Minion7.png/revision/latest?cb=20171007150310',
		},
		{
			level: 8,
			damagePerSecond: 62,
			damagePerAttack: 62,
			hitpoints: 96,
			researchCost: 95000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ed/Minion7.png/revision/latest?cb=20171007150310',
		},
		{
			level: 9,
			damagePerSecond: 66,
			damagePerAttack: 66,
			hitpoints: 102,
			researchCost: 150000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 7,
			laboratoryLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/12/Minion9.png/revision/latest?cb=20201212211934',
		},
		{
			level: 10,
			damagePerSecond: 70,
			damagePerAttack: 70,
			hitpoints: 108,
			researchCost: 210000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 12,
			laboratoryLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/11/Minion10.png/revision/latest?cb=20210413035802',
		},
		{
			level: 11,
			damagePerSecond: 74,
			damagePerAttack: 74,
			hitpoints: 114,
			researchCost: 310000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 13,
			laboratoryLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/58/Minion11.png/revision/latest?cb=20221011041314',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop

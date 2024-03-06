import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Valkyrie',
	description:
		'A master of the two-handed axe, this glorious warrior runs between nearby buildings and can shred several troops or buildings at once with her whirlwind blow!',
	maxLevel: 11,
	housingSpace: 8,
	buildingLevelRequired: 3,
	buildingName: Constants.darkBarracks,
	superTroopUnlocked: 'Super Valkyrie',
	training: {
		barracksAvailableSec: 30,
		barracksAvailableMin: 1,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 3,
	},
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 0.5,
		tiles: 1,
		attackSpeed: 1.8,
		movementSpeed: 24,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 94,
			damagePerAttack: 169.2,
			hitpoints: 750,
			researchCost: 0,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8b/Valkyrie1.png/revision/latest/scale-to-width-down/70?cb=20230613100850',
		},
		{
			level: 2,
			damagePerSecond: 106,
			damagePerAttack: 190.8,
			hitpoints: 850,
			researchCost: 6000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 1,
			laboratoryLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8b/Valkyrie1.png/revision/latest/scale-to-width-down/70?cb=20230613100850',
		},
		{
			level: 3,
			damagePerSecond: 119,
			damagePerAttack: 214.2,
			hitpoints: 950,
			researchCost: 10000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 2,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/79/Valkyrie3.png/revision/latest/scale-to-width-down/70?cb=20230613100858',
		},
		{
			level: 4,
			damagePerSecond: 133,
			damagePerAttack: 239.4,
			hitpoints: 1050,
			researchCost: 20000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 3,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/79/Valkyrie3.png/revision/latest/scale-to-width-down/70?cb=20230613100858',
		},
		{
			level: 5,
			damagePerSecond: 148,
			damagePerAttack: 266.4,
			hitpoints: 1300,
			researchCost: 32000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 4,
			laboratoryLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/01/Valkyrie5.png/revision/latest/scale-to-width-down/70?cb=20230613100907',
		},
		{
			level: 6,
			damagePerSecond: 163,
			damagePerAttack: 293.4,
			hitpoints: 1500,
			researchCost: 63000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 4,
			laboratoryLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fd/Valkyrie6.png/revision/latest/scale-to-width-down/70?cb=20230613100914',
		},
		{
			level: 7,
			damagePerSecond: 178,
			damagePerAttack: 320.4,
			hitpoints: 1650,
			researchCost: 110000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 5,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fd/Valkyrie6.png/revision/latest/scale-to-width-down/70?cb=20230613100914',
		},
		{
			level: 8,
			damagePerSecond: 193,
			damagePerAttack: 347.4,
			hitpoints: 1800,
			researchCost: 155000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 7,
			laboratoryLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3a/Valkyrie8.png/revision/latest/scale-to-width-down/70?cb=20230613100920',
		},
		{
			level: 9,
			damagePerSecond: 208,
			damagePerAttack: 374.4,
			hitpoints: 2000,
			researchCost: 240000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 12,
			laboratoryLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/30/Valkyrie9.png/revision/latest/scale-to-width-down/70?cb=20230613100925',
		},
		{
			level: 10,
			damagePerSecond: 223,
			damagePerAttack: 401.4,
			hitpoints: 2400,
			researchCost: 320000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 13,
			laboratoryLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Valkyrie10.png/revision/latest/scale-to-width-down/70?cb=20230613100929',
		},
		{
			level: 11,
			damagePerSecond: 238,
			damagePerAttack: 428.4,
			hitpoints: 2800,
			researchCost: 340000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 15,
			laboratoryLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c2/Valkyrie11.png/revision/latest/scale-to-width-down/70?cb=20231213082713',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop

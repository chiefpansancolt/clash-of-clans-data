import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Balloon',
	description:
		'These promoted skeletons have traded in their joy of destroying walls for a joy of destroying defenses. Deploy them to take out pesky mortars and cannons!',
	maxLevel: 11,
	housingSpace: 5,
	buildingLevelRequired: 6,
	buildingName: Constants.barracks,
	superTroopUnlocked: 'Rocket Balloon',
	training: {
		barracksAvailableSec: 30,
		barracksAvailableMin: 0,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 1,
	},
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.defenses,
		tiles: 1.2,
		minRange: 0,
		maxRange: 0.5,
		attackSpeed: 3,
		movementSpeed: 10,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 25,
			damagePerAttack: 75,
			damageUponDeath: 25,
			hitpoints: 150,
			researchCost: 0,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7d/Balloon1.png/revision/latest/scale-to-width-down/100?cb=20221124042535',
		},
		{
			level: 2,
			damagePerSecond: 32,
			damagePerAttack: 96,
			damageUponDeath: 32,
			hitpoints: 180,
			researchCost: 125000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 8,
			researchTimeDay: 0,
			laboratoryLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7d/Balloon1.png/revision/latest/scale-to-width-down/100?cb=20221124042535',
		},
		{
			level: 3,
			damagePerSecond: 48,
			damagePerAttack: 144,
			damageUponDeath: 48,
			hitpoints: 216,
			researchCost: 400000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 0,
			laboratoryLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9a/Balloon3.png/revision/latest/scale-to-width-down/100?cb=20221124042542',
		},
		{
			level: 4,
			damagePerSecond: 72,
			damagePerAttack: 216,
			damageUponDeath: 72,
			hitpoints: 280,
			researchCost: 720000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 18,
			researchTimeDay: 0,
			laboratoryLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9a/Balloon3.png/revision/latest/scale-to-width-down/100?cb=20221124042542',
		},
		{
			level: 5,
			damagePerSecond: 108,
			damagePerAttack: 324,
			damageUponDeath: 108,
			hitpoints: 390,
			researchCost: 1300000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 1,
			laboratoryLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8d/Balloon5.png/revision/latest/scale-to-width-down/100?cb=20221124042549',
		},
		{
			level: 6,
			damagePerSecond: 162,
			damagePerAttack: 486,
			damageUponDeath: 162,
			hitpoints: 545,
			researchCost: 2750000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 3,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3e/Balloon6.png/revision/latest/scale-to-width-down/100?cb=20221124042610',
		},
		{
			level: 7,
			damagePerSecond: 198,
			damagePerAttack: 594,
			damageUponDeath: 214,
			hitpoints: 690,
			researchCost: 4500000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 4,
			laboratoryLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fc/Balloon7.png/revision/latest/scale-to-width-down/100?cb=20221124042621',
		},
		{
			level: 8,
			damagePerSecond: 236,
			damagePerAttack: 708,
			damageUponDeath: 268,
			hitpoints: 840,
			researchCost: 7000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 5,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8b/Balloon8.png/revision/latest/scale-to-width-down/100?cb=20221124042633',
		},
		{
			level: 9,
			damagePerSecond: 256,
			damagePerAttack: 768,
			damageUponDeath: 322,
			hitpoints: 940,
			researchCost: 8500000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 9,
			laboratoryLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c1/Balloon9.png/revision/latest/scale-to-width-down/100?cb=20221124042649',
		},
		{
			level: 10,
			damagePerSecond: 276,
			damagePerAttack: 828,
			damageUponDeath: 352,
			hitpoints: 1040,
			researchCost: 17000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 14,
			laboratoryLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fa/Balloon10.png/revision/latest/scale-to-width-down/100?cb=20221124042713',
		},
		{
			level: 11,
			damagePerSecond: 290,
			damagePerAttack: 870,
			damageUponDeath: 375,
			hitpoints: 1140,
			researchCost: 20000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 16,
			laboratoryLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/18/Balloon11.png/revision/latest/scale-to-width-down/100?cb=20231211145647',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop

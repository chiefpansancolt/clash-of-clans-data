import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Wizard',
	description:
		'The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!',
	maxLevel: 12,
	housingSpace: 4,
	buildingLevelRequired: 7,
	buildingName: Constants.barracks,
	superTroopUnlocked: 'Super Wizard',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/9/97/Avatar_Wizard.png/revision/latest/scale-to-width-down/120?cb=20200913195243',
	training: {
		barracksAvailableSec: 30,
		barracksAvailableMin: 0,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 1,
	},
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.none,
		tiles: 0.3,
		minRange: 0,
		maxRange: 3,
		attackSpeed: 1.5,
		movementSpeed: 16,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 50,
			damagePerAttack: 75,
			hitpoints: 75,
			researchCost: 0,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Wizard1.png/revision/latest?cb=20170630221408',
		},
		{
			level: 2,
			damagePerSecond: 70,
			damagePerAttack: 105,
			hitpoints: 90,
			researchCost: 120000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 8,
			researchTimeDay: 0,
			laboratoryLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Wizard1.png/revision/latest?cb=20170630221408',
		},
		{
			level: 3,
			damagePerSecond: 90,
			damagePerAttack: 135,
			hitpoints: 108,
			researchCost: 320000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 0,
			laboratoryLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/94/Wizard3.png/revision/latest?cb=20170630221040',
		},
		{
			level: 4,
			damagePerSecond: 125,
			damagePerAttack: 187.5,
			hitpoints: 135,
			researchCost: 620000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 18,
			researchTimeDay: 0,
			laboratoryLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/94/Wizard3.png/revision/latest?cb=20170630221040',
		},
		{
			level: 5,
			damagePerSecond: 170,
			damagePerAttack: 255,
			hitpoints: 165,
			researchCost: 1200000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 1,
			laboratoryLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c8/Wizard5.png/revision/latest?cb=20170630221110',
		},
		{
			level: 6,
			damagePerSecond: 185,
			damagePerAttack: 277.5,
			hitpoints: 180,
			researchCost: 2200000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 2,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8d/Wizard6.png/revision/latest?cb=20170630221143',
		},
		{
			level: 7,
			damagePerSecond: 200,
			damagePerAttack: 300,
			hitpoints: 195,
			researchCost: 3500000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 16,
			researchTimeDay: 2,
			laboratoryLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cd/Wizard7.png/revision/latest?cb=20170630221218',
		},
		{
			level: 8,
			damagePerSecond: 215,
			damagePerAttack: 322.5,
			hitpoints: 210,
			researchCost: 5000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 3,
			laboratoryLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/af/Wizard8.png/revision/latest?cb=20170630221246',
		},
		{
			level: 9,
			damagePerSecond: 230,
			damagePerAttack: 345,
			hitpoints: 230,
			researchCost: 5800000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 5,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Wizard9.png/revision/latest?cb=20180607155614',
		},
		{
			level: 10,
			damagePerSecond: 245,
			damagePerAttack: 367.5,
			hitpoints: 250,
			researchCost: 8500000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 7,
			laboratoryLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/31/Wizard10.png/revision/latest?cb=20201013031616',
		},
		{
			level: 11,
			damagePerSecond: 260,
			damagePerAttack: 390,
			hitpoints: 270,
			researchCost: 17200000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 12,
			laboratoryLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d3/Wizard11.png/revision/latest?cb=20221124220942',
		},
		{
			level: 12,
			damagePerSecond: 275,
			damagePerAttack: 412.5,
			hitpoints: 290,
			researchCost: 19200000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 14,
			laboratoryLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cb/Wizard12.png/revision/latest/scale-to-width-down/41?cb=20231211145658',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop

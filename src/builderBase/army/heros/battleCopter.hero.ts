import * as Constants from '@/constants'
import Army from '@IBuilderBase/troops/army.interface'
import { getLevel, getHallLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Battle Copter',
	description:
		"Get to the Copter! Tired of hammering through Walls, Master Builder's next-generation flying machine lets him soar over them. The Battle Copter attacks from afar with its powerful cannons; or can get up close and personal when using its Bomb Rush ability.",
	maxLevel: 35,
	baseImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/a/ae/Avatar_Hero_Battle_Copter.png/revision/latest/scale-to-width-down/100?cb=20230518083246',
	mode: {
		attackType: Constants.ranged,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 7,
		attackSpeed: 0.65,
		movementSpeed: 14,
		abilityCooldown: 14,
		movementSpeedDuringAbility: 56,
	},
	builderHallDetails: [
		{ builderHallLevel: 1, availableCount: 0, maxLevel: 0 },
		{ builderHallLevel: 2, availableCount: 0, maxLevel: 0 },
		{ builderHallLevel: 3, availableCount: 0, maxLevel: 0 },
		{ builderHallLevel: 4, availableCount: 0, maxLevel: 0 },
		{ builderHallLevel: 5, availableCount: 0, maxLevel: 0 },
		{ builderHallLevel: 6, availableCount: 0, maxLevel: 0 },
		{ builderHallLevel: 7, availableCount: 0, maxLevel: 0 },
		{ builderHallLevel: 8, availableCount: 1, maxLevel: 25 },
		{ builderHallLevel: 9, availableCount: 1, maxLevel: 30 },
		{ builderHallLevel: 10, availableCount: 1, maxLevel: 35 },
	],
	abilityDetails: [
		{
			chargeLevel: 1,
			attackType: Constants.splash,
			tiles: 0.5,
			levels: [
				{ level: 1, damage: 179, healthRecovery: 550 },
				{ level: 2, damage: 209, healthRecovery: 575 },
				{ level: 3, damage: 239, healthRecovery: 600 },
				{ level: 4, damage: 279, healthRecovery: 625 },
				{ level: 5, damage: 319, healthRecovery: 650 },
			],
		},
		{
			chargeLevel: 2,
			attackType: Constants.splash,
			tiles: 2,
			levels: [
				{ level: 1, damage: 274, healthRecovery: 1100 },
				{ level: 2, damage: 320, healthRecovery: 1150 },
				{ level: 3, damage: 365, healthRecovery: 1200 },
				{ level: 4, damage: 426, healthRecovery: 1250 },
				{ level: 5, damage: 487, healthRecovery: 1300 },
			],
		},
		{
			chargeLevel: 3,
			attackType: Constants.splash,
			tiles: 4,
			levels: [
				{ level: 1, damage: 368, healthRecovery: 1650 },
				{ level: 2, damage: 430, healthRecovery: 1725 },
				{ level: 3, damage: 491, healthRecovery: 1800 },
				{ level: 4, damage: 573, healthRecovery: 1875 },
				{ level: 5, damage: 655, healthRecovery: 1950 },
			],
		},
	],
	levels: [
		{
			level: 15,
			damagePerSecond: 112,
			damagePerAttack: 72.8,
			hitpoints: 2857,
			abilityLevel: 1,
			researchCost: 2500000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			builderHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 16,
			damagePerSecond: 116,
			damagePerAttack: 75.4,
			hitpoints: 2885,
			abilityLevel: 1,
			researchCost: 2600000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			builderHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 17,
			damagePerSecond: 119,
			damagePerAttack: 77.35,
			hitpoints: 2915,
			abilityLevel: 1,
			researchCost: 2700000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			builderHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 18,
			damagePerSecond: 123,
			damagePerAttack: 79.95,
			hitpoints: 2943,
			abilityLevel: 1,
			researchCost: 2800000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			builderHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 19,
			damagePerSecond: 126,
			damagePerAttack: 81.9,
			hitpoints: 2972,
			abilityLevel: 1,
			researchCost: 2900000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			builderHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 20,
			damagePerSecond: 130,
			damagePerAttack: 84.5,
			hitpoints: 3003,
			abilityLevel: 2,
			researchCost: 3000000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			builderHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 21,
			damagePerSecond: 134,
			damagePerAttack: 87.1,
			hitpoints: 3032,
			abilityLevel: 2,
			researchCost: 3100000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			builderHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 22,
			damagePerSecond: 137,
			damagePerAttack: 89.05,
			hitpoints: 3062,
			abilityLevel: 2,
			researchCost: 3200000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			builderHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 23,
			damagePerSecond: 141,
			damagePerAttack: 91.65,
			hitpoints: 3094,
			abilityLevel: 2,
			researchCost: 3300000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			builderHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 24,
			damagePerSecond: 144,
			damagePerAttack: 93.6,
			hitpoints: 3124,
			abilityLevel: 2,
			researchCost: 3400000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			builderHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 25,
			damagePerSecond: 148,
			damagePerAttack: 96.2,
			hitpoints: 3155,
			abilityLevel: 3,
			researchCost: 3500000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			builderHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 26,
			damagePerSecond: 153,
			damagePerAttack: 99.45,
			hitpoints: 3187,
			abilityLevel: 3,
			researchCost: 3600000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 6,
			builderHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 27,
			damagePerSecond: 157,
			damagePerAttack: 102.05,
			hitpoints: 3220,
			abilityLevel: 3,
			researchCost: 3700000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 6,
			builderHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 28,
			damagePerSecond: 162,
			damagePerAttack: 105.3,
			hitpoints: 3252,
			abilityLevel: 3,
			researchCost: 3800000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 6,
			builderHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 29,
			damagePerSecond: 166,
			damagePerAttack: 107.9,
			hitpoints: 3285,
			abilityLevel: 3,
			researchCost: 3900000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 6,
			builderHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 30,
			damagePerSecond: 171,
			damagePerAttack: 111.15,
			hitpoints: 3318,
			abilityLevel: 4,
			researchCost: 4000000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 6,
			builderHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 31,
			damagePerSecond: 175,
			damagePerAttack: 113.75,
			hitpoints: 3348,
			abilityLevel: 4,
			researchCost: 4100000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 7,
			builderHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 32,
			damagePerSecond: 180,
			damagePerAttack: 117,
			hitpoints: 3375,
			abilityLevel: 4,
			researchCost: 4200000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 7,
			builderHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 33,
			damagePerSecond: 184,
			damagePerAttack: 119.6,
			hitpoints: 3402,
			abilityLevel: 4,
			researchCost: 4300000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 7,
			builderHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 34,
			damagePerSecond: 189,
			damagePerAttack: 122.85,
			hitpoints: 3429,
			abilityLevel: 4,
			researchCost: 4400000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 7,
			builderHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
		{
			level: 35,
			damagePerSecond: 193,
			damagePerAttack: 125.45,
			hitpoints: 3456,
			abilityLevel: 5,
			researchCost: 4500000,
			researchCostResource: Constants.builderElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 7,
			builderHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Battle_Copter_info.png/revision/latest/scale-to-width-down/300?cb=20240103221029',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
	getBuilderHallLevel: (level: number) => getHallLevel(troop.builderHallDetails, level, 'builderHallLevel'),
}

export default troop

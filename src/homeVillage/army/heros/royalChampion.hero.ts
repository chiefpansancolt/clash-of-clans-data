import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel, getHallLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Royal Champion',
	description:
		"Over the wall and at them! The Royal Champion is only afraid of four things, and the enemy isn't one of them. Her short ranged is perfect for stabbing defenses up close and personal.",
	maxLevel: 45,
	mode: {
		attackType: Constants.ranged,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.defenses,
		minRange: 0,
		maxRange: 3,
		attackSpeed: 1.2,
		movementSpeed: 24,
		searchRadius: 9,
	},
	townHallDetails: [
		{ townHallLevel: 1, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 2, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 3, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 4, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 5, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 6, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 7, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 8, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 9, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 10, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 11, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 12, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 13, availableCount: 1, maxLevel: 25 },
		{ townHallLevel: 14, availableCount: 1, maxLevel: 30 },
		{ townHallLevel: 15, availableCount: 1, maxLevel: 40 },
		{ townHallLevel: 16, availableCount: 1, maxLevel: 45 },
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 340,
			damagePerAttack: 408,
			hitpoints: 2508,
			healthRecovery: 400,
			regenTime: 30,
			researchCost: 60000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 2,
			damagePerSecond: 350,
			damagePerAttack: 420,
			hitpoints: 2550,
			healthRecovery: 400,
			regenTime: 30,
			researchCost: 70000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 8,
			researchTimeDay: 0,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 3,
			damagePerSecond: 360,
			damagePerAttack: 432,
			hitpoints: 2593,
			healthRecovery: 400,
			regenTime: 30,
			researchCost: 75000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 0,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 4,
			damagePerSecond: 370,
			damagePerAttack: 444,
			hitpoints: 2635,
			healthRecovery: 400,
			regenTime: 30,
			researchCost: 80000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 16,
			researchTimeDay: 0,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 5,
			damagePerSecond: 375,
			damagePerAttack: 450,
			hitpoints: 2678,
			healthRecovery: 500,
			regenTime: 32,
			researchCost: 90000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 20,
			researchTimeDay: 0,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 6,
			damagePerSecond: 380,
			damagePerAttack: 456,
			hitpoints: 2720,
			healthRecovery: 500,
			regenTime: 32,
			researchCost: 100000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 20,
			researchTimeDay: 1,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 7,
			damagePerSecond: 385,
			damagePerAttack: 462,
			hitpoints: 2763,
			healthRecovery: 500,
			regenTime: 32,
			researchCost: 110000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 18,
			researchTimeDay: 2,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 8,
			damagePerSecond: 390,
			damagePerAttack: 468,
			hitpoints: 2805,
			healthRecovery: 500,
			regenTime: 32,
			researchCost: 120000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 3,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 9,
			damagePerSecond: 396,
			damagePerAttack: 475.2,
			hitpoints: 2848,
			healthRecovery: 500,
			regenTime: 32,
			researchCost: 130000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 18,
			researchTimeDay: 3,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 10,
			damagePerSecond: 402,
			damagePerAttack: 482.4,
			hitpoints: 2890,
			healthRecovery: 600,
			regenTime: 34,
			researchCost: 140000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 4,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 11,
			damagePerSecond: 408,
			damagePerAttack: 489.6,
			hitpoints: 2933,
			healthRecovery: 600,
			regenTime: 34,
			researchCost: 150000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 4,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 12,
			damagePerSecond: 414,
			damagePerAttack: 496.8,
			hitpoints: 2975,
			healthRecovery: 600,
			regenTime: 34,
			researchCost: 160000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 13,
			damagePerSecond: 420,
			damagePerAttack: 504,
			hitpoints: 3018,
			healthRecovery: 600,
			regenTime: 34,
			researchCost: 165000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 14,
			damagePerSecond: 426,
			damagePerAttack: 511.2,
			hitpoints: 3060,
			healthRecovery: 600,
			regenTime: 34,
			researchCost: 170000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 15,
			damagePerSecond: 432,
			damagePerAttack: 518.4,
			hitpoints: 3103,
			healthRecovery: 700,
			regenTime: 36,
			researchCost: 175000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 5,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 16,
			damagePerSecond: 438,
			damagePerAttack: 525.6,
			hitpoints: 3145,
			healthRecovery: 700,
			regenTime: 36,
			researchCost: 180000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 5,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 17,
			damagePerSecond: 444,
			damagePerAttack: 532.8,
			hitpoints: 3188,
			healthRecovery: 700,
			regenTime: 36,
			researchCost: 185000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 5,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 18,
			damagePerSecond: 448,
			damagePerAttack: 537.6,
			hitpoints: 3230,
			healthRecovery: 700,
			regenTime: 36,
			researchCost: 190000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 6,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 19,
			damagePerSecond: 452,
			damagePerAttack: 542.4,
			hitpoints: 3273,
			healthRecovery: 700,
			regenTime: 36,
			researchCost: 195000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 6,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 20,
			damagePerSecond: 456,
			damagePerAttack: 547.2,
			hitpoints: 3315,
			healthRecovery: 800,
			regenTime: 38,
			researchCost: 200000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 6,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 21,
			damagePerSecond: 460,
			damagePerAttack: 552,
			hitpoints: 3349,
			healthRecovery: 800,
			regenTime: 38,
			researchCost: 205000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 6,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 22,
			damagePerSecond: 465,
			damagePerAttack: 558,
			hitpoints: 3383,
			healthRecovery: 800,
			regenTime: 38,
			researchCost: 210000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 6,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 23,
			damagePerSecond: 470,
			damagePerAttack: 564,
			hitpoints: 3417,
			healthRecovery: 800,
			regenTime: 38,
			researchCost: 215000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 6,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 24,
			damagePerSecond: 474,
			damagePerAttack: 568.8,
			hitpoints: 3451,
			healthRecovery: 800,
			regenTime: 38,
			researchCost: 220000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 6,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 25,
			damagePerSecond: 477,
			damagePerAttack: 572.4,
			hitpoints: 3485,
			healthRecovery: 900,
			regenTime: 40,
			researchCost: 225000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 6,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 26,
			damagePerSecond: 480,
			damagePerAttack: 576,
			hitpoints: 3519,
			healthRecovery: 900,
			regenTime: 40,
			researchCost: 230000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 7,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 27,
			damagePerSecond: 483,
			damagePerAttack: 579.6,
			hitpoints: 3553,
			healthRecovery: 900,
			regenTime: 40,
			researchCost: 235000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 7,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 28,
			damagePerSecond: 486,
			damagePerAttack: 583.2,
			hitpoints: 3587,
			healthRecovery: 900,
			regenTime: 40,
			researchCost: 240000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 7,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 29,
			damagePerSecond: 489,
			damagePerAttack: 586.8,
			hitpoints: 3621,
			healthRecovery: 900,
			regenTime: 40,
			researchCost: 245000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 7,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 30,
			damagePerSecond: 492,
			damagePerAttack: 590.4,
			hitpoints: 3655,
			healthRecovery: 1000,
			regenTime: 42,
			researchCost: 250000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 7,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 31,
			damagePerSecond: 495,
			damagePerAttack: 594,
			hitpoints: 3681,
			healthRecovery: 1000,
			regenTime: 42,
			researchCost: 260000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 32,
			damagePerSecond: 498,
			damagePerAttack: 597.6,
			hitpoints: 3706,
			healthRecovery: 1000,
			regenTime: 42,
			researchCost: 265000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 33,
			damagePerSecond: 502,
			damagePerAttack: 602.4,
			hitpoints: 3732,
			healthRecovery: 1000,
			regenTime: 42,
			researchCost: 270000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 34,
			damagePerSecond: 506,
			damagePerAttack: 607.2,
			hitpoints: 3757,
			healthRecovery: 1000,
			regenTime: 42,
			researchCost: 275000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 35,
			damagePerSecond: 510,
			damagePerAttack: 612,
			hitpoints: 3783,
			healthRecovery: 1100,
			regenTime: 44,
			researchCost: 280000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 36,
			damagePerSecond: 514,
			damagePerAttack: 616.8,
			hitpoints: 3808,
			healthRecovery: 1100,
			regenTime: 44,
			researchCost: 285000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 37,
			damagePerSecond: 518,
			damagePerAttack: 621.6,
			hitpoints: 3834,
			healthRecovery: 1100,
			regenTime: 44,
			researchCost: 290000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 38,
			damagePerSecond: 522,
			damagePerAttack: 626.4,
			hitpoints: 3859,
			healthRecovery: 1100,
			regenTime: 44,
			researchCost: 295000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 39,
			damagePerSecond: 526,
			damagePerAttack: 631.2,
			hitpoints: 3885,
			healthRecovery: 1100,
			regenTime: 44,
			researchCost: 300000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 40,
			damagePerSecond: 530,
			damagePerAttack: 636,
			hitpoints: 3910,
			healthRecovery: 1200,
			regenTime: 46,
			researchCost: 305000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 41,
			damagePerSecond: 533,
			damagePerAttack: 639.6,
			hitpoints: 3936,
			healthRecovery: 1200,
			regenTime: 46,
			researchCost: 315000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 42,
			damagePerSecond: 536,
			damagePerAttack: 643.2,
			hitpoints: 3961,
			healthRecovery: 1200,
			regenTime: 46,
			researchCost: 325000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 43,
			damagePerSecond: 539,
			damagePerAttack: 646.8,
			hitpoints: 3987,
			healthRecovery: 1200,
			regenTime: 46,
			researchCost: 335000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 44,
			damagePerSecond: 542,
			damagePerAttack: 650.4,
			hitpoints: 4012,
			healthRecovery: 1200,
			regenTime: 46,
			researchCost: 345000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
		{
			level: 45,
			damagePerSecond: 545,
			damagePerAttack: 654,
			hitpoints: 4038,
			healthRecovery: 1300,
			regenTime: 48,
			researchCost: 355000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Royal_Champion_info.png/revision/latest/scale-to-width-down/250?cb=20201105063116',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
	getTownHallLevel: (level: number) => getHallLevel(troop.townHallDetails, level, 'townHallLevel'),
}

export default troop

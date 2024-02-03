import * as Constants from '@/constants'
import DefenseBuilding from '@IHomeVillage/defenses/infernoTower/defense.interface'
import { getHallLevel, getModeLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Inferno Tower',
	description:
		"Set the Inferno Tower's Dark Elixir fueled flame to build up unbelievable damage to single targets, or to constantly roast multiple targets at once.",
	maxCount: 3,
	width: 2,
	height: 2,
	maxLevel: 9,
	mode: [
		{
			name: Constants.singleTargetMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.groundAndAir,
			minRange: 0,
			maxRange: 9,
			attackSpeed: 0.128,
			numberOfTargets: 1,
			numberOfRounds: 1000,
		},
		{
			name: Constants.multiTargetMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.groundAndAir,
			minRange: 0,
			maxRange: 10,
			attackSpeed: 0.128,
			numberOfTargets: 6,
			numberOfRounds: 1000,
		},
	],
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
		{ townHallLevel: 10, availableCount: 2, maxLevel: 3 },
		{ townHallLevel: 11, availableCount: 2, maxLevel: 5 },
		{ townHallLevel: 12, availableCount: 3, maxLevel: 6 },
		{ townHallLevel: 13, availableCount: 3, maxLevel: 7 },
		{ townHallLevel: 14, availableCount: 3, maxLevel: 8 },
		{ townHallLevel: 15, availableCount: 3, maxLevel: 9 },
		{ townHallLevel: 16, availableCount: 3, maxLevel: 9 },
	],
	achievement: {
		name: 'Firefigher',
		village: Constants.homeVillage,
		levels: [
			{
				info: 'Destroy 10 Inferno Towers',
				exp: 50,
				gems: 100,
				stars: 1,
				target: 10,
			},
			{
				info: 'Destroy 250 Inferno Towers',
				exp: 500,
				gems: 200,
				stars: 2,
				target: 250,
			},
			{
				info: 'Destroy 5,000 Inferno Towers',
				exp: 5000,
				gems: 1000,
				stars: 3,
				target: 5000,
			},
		],
	},
	levels: [
		{
			name: Constants.singleTargetMode,
			levels: [
				{
					level: 1,
					damagePerSecond: 30,
					damagePerSecondAfter15: 80,
					damagePerSecondAfter525: 800,
					damagePerShot: 3.84,
					damagePerHitAfter15: 10.24,
					damagePerHitAfter525: 102.4,
					numberOfTargets: 0,
					hitpoints: 1500,
					buildCost: 1500000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 2,
					exp: 415,
					townHallLevelRequired: 10,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Inferno_Tower1_Single.png/revision/latest/scale-to-width-down/100?cb=20221122065055',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/d/da/Inferno_Tower1_Single_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221122065100',
				},
				{
					level: 2,
					damagePerSecond: 35,
					damagePerSecondAfter15: 100,
					damagePerSecondAfter525: 1000,
					damagePerShot: 4.48,
					damagePerHitAfter15: 12.8,
					damagePerHitAfter525: 128,
					numberOfTargets: 0,
					hitpoints: 1800,
					buildCost: 2000000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 12,
					buildTimeDay: 2,
					exp: 464,
					townHallLevelRequired: 10,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/e/e3/Inferno_Tower2_Single.png/revision/latest/scale-to-width-down/100?cb=20221122065155',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/d/db/Inferno_Tower2_Single_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221122065205',
				},
				{
					level: 3,
					damagePerSecond: 40,
					damagePerSecondAfter15: 120,
					damagePerSecondAfter525: 1200,
					damagePerShot: 5.12,
					damagePerHitAfter15: 15.36,
					damagePerHitAfter525: 153.6,
					numberOfTargets: 0,
					hitpoints: 2100,
					buildCost: 3000000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 3,
					exp: 509,
					townHallLevelRequired: 10,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/2/28/Inferno_Tower3_Single.png/revision/latest/scale-to-width-down/100?cb=20221122065310',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/7/71/Inferno_Tower3_Single_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221122065318',
				},
				{
					level: 4,
					damagePerSecond: 50,
					damagePerSecondAfter15: 140,
					damagePerSecondAfter525: 1400,
					damagePerShot: 6.4,
					damagePerHitAfter15: 17.92,
					damagePerHitAfter525: 179.2,
					numberOfTargets: 0,
					hitpoints: 2400,
					buildCost: 3400000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 6,
					buildTimeDay: 4,
					exp: 605,
					townHallLevelRequired: 11,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/a/ae/Inferno_Tower4_Single.png/revision/latest/scale-to-width-down/100?cb=20221122065414',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/0/08/Inferno_Tower4_Single_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221122065424',
				},
				{
					level: 5,
					damagePerSecond: 60,
					damagePerSecondAfter15: 160,
					damagePerSecondAfter525: 1600,
					damagePerShot: 7.68,
					damagePerHitAfter15: 20.48,
					damagePerHitAfter525: 204.8,
					numberOfTargets: 0,
					hitpoints: 2700,
					buildCost: 4200000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 5,
					exp: 657,
					townHallLevelRequired: 11,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/9/91/Inferno_Tower5_Single.png/revision/latest/scale-to-width-down/100?cb=20221122065510',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Inferno_Tower5_Single_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221122065520',
				},
				{
					level: 6,
					damagePerSecond: 70,
					damagePerSecondAfter15: 180,
					damagePerSecondAfter525: 1800,
					damagePerShot: 8.96,
					damagePerHitAfter15: 23.04,
					damagePerHitAfter525: 230.4,
					numberOfTargets: 0,
					hitpoints: 3000,
					buildCost: 6500000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 12,
					buildTimeDay: 8,
					exp: 856,
					townHallLevelRequired: 12,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/9/90/Inferno_Tower6_Single.png/revision/latest/scale-to-width-down/100?cb=20221223064829',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/b/b2/Inferno_Tower6_Single_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221223071628',
				},
				{
					level: 7,
					damagePerSecond: 85,
					damagePerSecondAfter15: 200,
					damagePerSecondAfter525: 2000,
					damagePerShot: 10.88,
					damagePerHitAfter15: 25.6,
					damagePerHitAfter525: 256,
					numberOfTargets: 0,
					hitpoints: 3300,
					buildCost: 10500000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 9,
					exp: 881,
					townHallLevelRequired: 13,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/0/0c/Inferno_Tower7_Single.png/revision/latest/scale-to-width-down/100?cb=20221223064836',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/f/f0/Inferno_Tower7_Single_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221223071642',
				},
				{
					level: 8,
					damagePerSecond: 100,
					damagePerSecondAfter15: 220,
					damagePerSecondAfter525: 2200,
					damagePerShot: 12.8,
					damagePerHitAfter15: 28.16,
					damagePerHitAfter525: 281.6,
					numberOfTargets: 0,
					hitpoints: 3700,
					buildCost: 12600000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 13,
					exp: 1059,
					townHallLevelRequired: 14,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/6/69/Inferno_Tower8_Single.png/revision/latest/scale-to-width-down/100?cb=20221122065826',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/b/bc/Inferno_Tower8_Single_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221122065840',
				},
				{
					level: 9,
					damagePerSecond: 110,
					damagePerSecondAfter15: 240,
					damagePerSecondAfter525: 2400,
					damagePerShot: 14.08,
					damagePerHitAfter15: 30.72,
					damagePerHitAfter525: 307.2,
					numberOfTargets: 0,
					hitpoints: 4000,
					buildCost: 21000000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 18,
					buildTimeDay: 13,
					exp: 1089,
					townHallLevelRequired: 15,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/8/8e/Inferno_Tower9_Single.png/revision/latest/scale-to-width-down/100?cb=20221122065931',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/7/78/Inferno_Tower9_Single_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221122065957',
				},
			],
		},
		{
			name: Constants.multiTargetMode,
			levels: [
				{
					level: 1,
					damagePerSecond: 30,
					damagePerSecondAfter15: 0,
					damagePerSecondAfter525: 0,
					damagePerShot: 0,
					damagePerHitAfter15: 0,
					damagePerHitAfter525: 0,
					numberOfTargets: 5,
					hitpoints: 1500,
					buildCost: 1700000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 2,
					exp: 415,
					townHallLevelRequired: 10,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/f/fa/Inferno_Tower1_Multi.png/revision/latest/scale-to-width-down/100?cb=20221122065029',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/1/11/Inferno_Tower1_Multi_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221122065038',
				},
				{
					level: 2,
					damagePerSecond: 35,
					damagePerSecondAfter15: 0,
					damagePerSecondAfter525: 0,
					damagePerShot: 0,
					damagePerHitAfter15: 0,
					damagePerHitAfter525: 0,
					numberOfTargets: 5,
					hitpoints: 1800,
					buildCost: 2000000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 12,
					buildTimeDay: 2,
					exp: 464,
					townHallLevelRequired: 10,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/8/85/Inferno_Tower2_Multi.png/revision/latest/scale-to-width-down/100?cb=20221122065133',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/0/05/Inferno_Tower2_Multi_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221122065143',
				},
				{
					level: 3,
					damagePerSecond: 40,
					damagePerSecondAfter15: 0,
					damagePerSecondAfter525: 0,
					damagePerShot: 0,
					damagePerHitAfter15: 0,
					damagePerHitAfter525: 0,
					numberOfTargets: 5,
					hitpoints: 2100,
					buildCost: 3000000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 3,
					exp: 509,
					townHallLevelRequired: 10,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/5/51/Inferno_Tower3_Multi.png/revision/latest/scale-to-width-down/100?cb=20221122065241',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/e/eb/Inferno_Tower3_Multi_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221122065301',
				},
				{
					level: 4,
					damagePerSecond: 50,
					damagePerSecondAfter15: 0,
					damagePerSecondAfter525: 0,
					damagePerShot: 0,
					damagePerHitAfter15: 0,
					damagePerHitAfter525: 0,
					numberOfTargets: 5,
					hitpoints: 2400,
					buildCost: 3400000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 6,
					buildTimeDay: 4,
					exp: 605,
					townHallLevelRequired: 11,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/6/62/Inferno_Tower4_Multi.png/revision/latest/scale-to-width-down/100?cb=20221122065349',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/7/71/Inferno_Tower4_Multi_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221122065359',
				},
				{
					level: 5,
					damagePerSecond: 60,
					damagePerSecondAfter15: 0,
					damagePerSecondAfter525: 0,
					damagePerShot: 0,
					damagePerHitAfter15: 0,
					damagePerHitAfter525: 0,
					numberOfTargets: 5,
					hitpoints: 2700,
					buildCost: 4200000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 5,
					exp: 657,
					townHallLevelRequired: 11,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/d/d0/Inferno_Tower5_Multi.png/revision/latest/scale-to-width-down/100?cb=20221122065451',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/f/f1/Inferno_Tower5_Multi_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221122065459',
				},
				{
					level: 6,
					damagePerSecond: 70,
					damagePerSecondAfter15: 0,
					damagePerSecondAfter525: 0,
					damagePerShot: 0,
					damagePerHitAfter15: 0,
					damagePerHitAfter525: 0,
					numberOfTargets: 5,
					hitpoints: 3000,
					buildCost: 6500000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 12,
					buildTimeDay: 8,
					exp: 856,
					townHallLevelRequired: 12,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/4/43/Inferno_Tower6_Multi.png/revision/latest/scale-to-width-down/100?cb=20221122065553',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/0/07/Inferno_Tower6_Multi_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221122065605',
				},
				{
					level: 7,
					damagePerSecond: 85,
					damagePerSecondAfter15: 0,
					damagePerSecondAfter525: 0,
					damagePerShot: 0,
					damagePerHitAfter15: 0,
					damagePerHitAfter525: 0,
					numberOfTargets: 5,
					hitpoints: 3300,
					buildCost: 10500000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 9,
					exp: 881,
					townHallLevelRequired: 13,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Inferno_Tower7_Multi.png/revision/latest/scale-to-width-down/100?cb=20221122065709',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Inferno_Tower7_Multi_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221122065717',
				},
				{
					level: 8,
					damagePerSecond: 100,
					damagePerSecondAfter15: 0,
					damagePerSecondAfter525: 0,
					damagePerShot: 0,
					damagePerHitAfter15: 0,
					damagePerHitAfter525: 0,
					numberOfTargets: 6,
					hitpoints: 3700,
					buildCost: 12600000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 13,
					exp: 1059,
					townHallLevelRequired: 14,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/8/81/Inferno_Tower8_Multi.png/revision/latest/scale-to-width-down/100?cb=20221122065805',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/e/e0/Inferno_Tower8_Multi_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221122065816',
				},
				{
					level: 9,
					damagePerSecond: 110,
					damagePerSecondAfter15: 0,
					damagePerSecondAfter525: 0,
					damagePerShot: 0,
					damagePerHitAfter15: 0,
					damagePerHitAfter525: 0,
					numberOfTargets: 6,
					hitpoints: 4000,
					buildCost: 21000000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 18,
					buildTimeDay: 13,
					exp: 1089,
					townHallLevelRequired: 15,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/c/ca/Inferno_Tower9_Multi.png/revision/latest/scale-to-width-down/100?cb=20221122065939',
					depletedImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/c/c7/Inferno_Tower9_Multi_Depleted.png/revision/latest/scale-to-width-down/75?cb=20221122065956',
				},
			],
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (name: string, level: number) => getModeLevel(building.levels, name, level),
	getTownHallLevel: (level: number) =>
		getHallLevel(building.townHallDetails, level, 'townHallLevel'),
}

export default building

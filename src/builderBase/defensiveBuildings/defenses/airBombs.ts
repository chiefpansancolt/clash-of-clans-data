import * as Constants from '@/constants'
import DefenseBuilding from '@IBuilderBase/defenses/airBombs/defense.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Air Bombs',
	description:
		'For heavyweight air defense, Air Bombs do the trick. An endless supply of explosive barrels launch into the sky to ravage flying enemies!',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 10,
	mode: {
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.air,
		tiles: 1.5,
		minRange: 0,
		maxRange: 7.5,
		attackSpeed: 3,
	},
	builderHallDetails: [
		{
			builderHallLevel: 1,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 2,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 3,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 4,
			availableCount: 1,
			maxLevel: 4,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 5,
			availableCount: 1,
			maxLevel: 5,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 6,
			availableCount: 1,
			maxLevel: 6,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 7,
			availableCount: 1,
			maxLevel: 7,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 8,
			availableCount: 1,
			maxLevel: 8,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 9,
			availableCount: 1,
			maxLevel: 9,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 10,
			availableCount: 1,
			maxLevel: 10,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
	],
	levels: [
		{
			level: 1,
			hitpoints: 1000,
			damagePerSecond: 90,
			damagePerShot: 270,
			buildCost: 300000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 0,
			exp: 146,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Air_Bombs1.png/revision/latest/scale-to-width-down/100?cb=20171109192339',
		},
		{
			level: 2,
			hitpoints: 1100,
			damagePerSecond: 99,
			damagePerShot: 297,
			buildCost: 320000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f0/Air_Bombs2.png/revision/latest/scale-to-width-down/100?cb=20171109192340',
		},
		{
			level: 3,
			hitpoints: 1250,
			damagePerSecond: 109,
			damagePerShot: 327,
			buildCost: 340000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/01/Air_Bombs3.png/revision/latest/scale-to-width-down/100?cb=20171109192340',
		},
		{
			level: 4,
			hitpoints: 1400,
			damagePerSecond: 119,
			damagePerShot: 357,
			buildCost: 360000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/26/Air_Bombs4.png/revision/latest/scale-to-width-down/100?cb=20171109192340',
		},
		{
			level: 5,
			hitpoints: 1600,
			damagePerSecond: 131,
			damagePerShot: 393,
			buildCost: 1200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b4/Air_Bombs5.png/revision/latest/scale-to-width-down/100?cb=20171109192341',
		},
		{
			level: 6,
			hitpoints: 1850,
			damagePerSecond: 145,
			damagePerShot: 435,
			buildCost: 1500000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/02/Air_Bombs6.png/revision/latest/scale-to-width-down/100?cb=20171109192341',
		},
		{
			level: 7,
			hitpoints: 2100,
			damagePerSecond: 159,
			damagePerShot: 477,
			buildCost: 2400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 7,
			exp: 777,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/51/Air_Bombs7.png/revision/latest/scale-to-width-down/100?cb=20171109192342',
		},
		{
			level: 8,
			hitpoints: 2350,
			damagePerSecond: 175,
			damagePerShot: 525,
			buildCost: 3400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Air_Bombs8.png/revision/latest/scale-to-width-down/100?cb=20171109192342',
		},
		{
			level: 9,
			hitpoints: 2600,
			damagePerSecond: 193,
			damagePerShot: 579,
			buildCost: 4400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Air_Bombs9.png/revision/latest/scale-to-width-down/100?cb=20190616223138',
		},
		{
			level: 10,
			hitpoints: 2900,
			damagePerSecond: 212,
			damagePerShot: 636,
			buildCost: 5400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3c/Air_Bombs10.png/revision/latest/scale-to-width-down/115?cb=20230517042314',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getBuilderHallLevel: (level: number) =>
		getHallLevel(building.builderHallDetails, level, 'builderHallLevel'),
}

export default building

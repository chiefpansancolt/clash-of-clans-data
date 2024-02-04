import * as Constants from '@/constants'
import DefenseBuilding from '@IBuilderBase/defenses/crusher/defense.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Crusher',
	description:
		'The Crusher REALLY likes its personal space. This hulking stone slams ground units with a mighty wallop!',
	maxCount: 2,
	width: 3,
	height: 3,
	maxLevel: 10,
	mode: {
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		tiles: 2.8,
		minRange: 0,
		maxRange: 8.5,
		attackSpeed: 0.8,
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
			availableCount: 1,
			maxLevel: 3,
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
			availableCount: 2,
			maxLevel: 6,
			stage1MaxCount: 2,
			stage2MaxCount: 2,
		},
		{
			builderHallLevel: 7,
			availableCount: 2,
			maxLevel: 7,
			stage1MaxCount: 2,
			stage2MaxCount: 2,
		},
		{
			builderHallLevel: 8,
			availableCount: 2,
			maxLevel: 8,
			stage1MaxCount: 2,
			stage2MaxCount: 2,
		},
		{
			builderHallLevel: 9,
			availableCount: 2,
			maxLevel: 9,
			stage1MaxCount: 2,
			stage2MaxCount: 2,
		},
		{
			builderHallLevel: 10,
			availableCount: 2,
			maxLevel: 10,
			stage1MaxCount: 2,
			stage2MaxCount: 2,
		},
	],
	levels: [
		{
			level: 1,
			hitpoints: 1000,
			damagePerSecond: 125,
			damagePerShot: 438,
			buildCost: 120000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 2,
			buildTimeDay: 0,
			exp: 84,
			builderHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8d/Crusher1.png/revision/latest/scale-to-width-down/100?cb=20221211231023',
		},
		{
			level: 2,
			hitpoints: 1100,
			damagePerSecond: 138,
			damagePerShot: 483,
			buildCost: 180000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 5,
			buildTimeDay: 0,
			exp: 134,
			builderHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a5/Crusher2.png/revision/latest/scale-to-width-down/100?cb=20171109174506',
		},
		{
			level: 3,
			hitpoints: 1250,
			damagePerSecond: 152,
			damagePerShot: 532,
			buildCost: 220000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			builderHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Crusher3.png/revision/latest/scale-to-width-down/100?cb=20171109174447',
		},
		{
			level: 4,
			hitpoints: 1400,
			damagePerSecond: 167,
			damagePerShot: 585,
			buildCost: 350000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			builderHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/de/Crusher4.png/revision/latest/scale-to-width-down/100?cb=20171109174431',
		},
		{
			level: 5,
			hitpoints: 1600,
			damagePerSecond: 184,
			damagePerShot: 644,
			buildCost: 1200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			builderHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/ce/Crusher5.png/revision/latest/scale-to-width-down/100?cb=20171109174413',
		},
		{
			level: 6,
			hitpoints: 1850,
			damagePerSecond: 202,
			damagePerShot: 707,
			buildCost: 1500000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 581,
			builderHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/95/Crusher6.png/revision/latest/scale-to-width-down/100?cb=20171109174357',
		},
		{
			level: 7,
			hitpoints: 2100,
			damagePerSecond: 222,
			damagePerShot: 777,
			buildCost: 2400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			builderHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/48/Crusher7.png/revision/latest/scale-to-width-down/100?cb=20171109174340',
		},
		{
			level: 8,
			hitpoints: 2350,
			damagePerSecond: 244,
			damagePerShot: 854,
			buildCost: 3400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			builderHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e5/Crusher8.png/revision/latest/scale-to-width-down/100?cb=20171109174325',
		},
		{
			level: 9,
			hitpoints: 2600,
			damagePerSecond: 269,
			damagePerShot: 942,
			buildCost: 4400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			builderHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/70/Crusher9.png/revision/latest/scale-to-width-down/100?cb=20190616222005',
		},
		{
			level: 10,
			hitpoints: 2900,
			damagePerSecond: 296,
			damagePerShot: 1036,
			buildCost: 5400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			builderHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c7/Crusher10.png/revision/latest/scale-to-width-down/100?cb=20230516085136',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getBuilderHallLevel: (level: number) => getHallLevel(building.builderHallDetails, level, 'builderHallLevel'),
}

export default building

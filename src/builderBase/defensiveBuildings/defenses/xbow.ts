import * as Constants from '@/constants'
import DefenseBuilding from '@IBuilderBase/defenses/xbow/defense.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'X-Bow',
	description:
		'The X-Bow shoots powerful bolts with terrifying power. You can set it to target ground units or air units.',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 5,
	mode: [
		{
			name: Constants.groundMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.air,
			minRange: 0,
			maxRange: 12,
			attackSpeed: 0.192,
		},
		{
			name: Constants.airMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.air,
			minRange: 0,
			maxRange: 12,
			attackSpeed: 0.192,
		},
	],
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
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 5,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 6,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 7,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 8,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 9,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 10,
			availableCount: 1,
			maxLevel: 5,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 80,
			damagePerShot: 15.36,
			hitpoints: 1700,
			buildCost: 4400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 7,
			exp: 777,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7b/X-Bow1B_Ground.png/revision/latest/scale-to-width-down/100?cb=20230516212126',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ad/X-Bow1B_Air.png/revision/latest/scale-to-width-down/100?cb=20230516212125',
		},
		{
			level: 2,
			damagePerSecond: 88,
			damagePerShot: 16.9,
			hitpoints: 1900,
			buildCost: 4800000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c7/X-Bow2B_Ground.png/revision/latest/scale-to-width-down/100?cb=20230516212127',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6c/X-Bow2B_Air.png/revision/latest/scale-to-width-down/100?cb=20230516212126',
		},
		{
			level: 3,
			damagePerSecond: 96,
			damagePerShot: 18.43,
			hitpoints: 2100,
			buildCost: 5200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0b/X-Bow3B_Ground.png/revision/latest/scale-to-width-down/100?cb=20230516212129',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/01/X-Bow3B_Air.png/revision/latest/scale-to-width-down/100?cb=20230516212128',
		},
		{
			level: 4,
			damagePerSecond: 106,
			damagePerShot: 20.35,
			hitpoints: 2350,
			buildCost: 5600000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 11,
			exp: 974,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a9/X-Bow4B_Ground.png/revision/latest/scale-to-width-down/100?cb=20230516212131',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/X-Bow4B_Air.png/revision/latest/scale-to-width-down/100?cb=20230516212130',
		},
		{
			level: 5,
			damagePerSecond: 116,
			damagePerShot: 22.27,
			hitpoints: 2600,
			buildCost: 6000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8a/X-Bow5B_Ground.png/revision/latest/scale-to-width-down/100?cb=20230516212133',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7a/X-Bow5B_Air.png/revision/latest/scale-to-width-down/100?cb=20230516212132',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getBuilderHallLevel: (level: number) =>
		getHallLevel(building.builderHallDetails, level, 'builderHallLevel'),
}

export default building

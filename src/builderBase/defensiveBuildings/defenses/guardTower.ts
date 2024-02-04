import * as Constants from '@/constants'
import DefenseBuilding from '@IBuilderBase/defenses/guardTower/defense.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Guard Tower',
	description: 'Houses troops to aid in defense! These rabble rousers are sure to slow down the enemy.',
	maxCount: 1,
	width: 2,
	height: 2,
	maxLevel: 10,
	troops: [
		{
			name: 'Raged Barbarian',
			availableCount: 1,
		},
		{
			name: 'Sneaky Archer',
			availableCount: 1,
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
			hitpoints: 300,
			troopLevel: 2,
			buildCost: 200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 4,
			buildTimeDay: 0,
			exp: 120,
			builderHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/63/Guard_Post1.png/revision/latest/scale-to-width-down/100?cb=20171109182016',
		},
		{
			level: 2,
			hitpoints: 350,
			troopLevel: 4,
			buildCost: 240000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			builderHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/ba/Guard_Post2.png/revision/latest/scale-to-width-down/100?cb=20171109182017',
		},
		{
			level: 3,
			hitpoints: 400,
			troopLevel: 6,
			buildCost: 280000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			builderHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cd/Guard_Post3.png/revision/latest/scale-to-width-down/100?cb=20171109182017',
		},
		{
			level: 4,
			hitpoints: 460,
			troopLevel: 8,
			buildCost: 320000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			builderHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c5/Guard_Post4.png/revision/latest/scale-to-width-down/100?cb=20171109182017',
		},
		{
			level: 5,
			hitpoints: 550,
			troopLevel: 10,
			buildCost: 1000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			builderHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4f/Guard_Post5.png/revision/latest/scale-to-width-down/100?cb=20171109182018',
		},
		{
			level: 6,
			hitpoints: 650,
			troopLevel: 12,
			buildCost: 1400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			builderHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/21/Guard_Post6.png/revision/latest/scale-to-width-down/100?cb=20171109182018',
		},
		{
			level: 7,
			hitpoints: 750,
			troopLevel: 14,
			buildCost: 2300000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			builderHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/28/Guard_Post7.png/revision/latest/scale-to-width-down/100?cb=20171109182018',
		},
		{
			level: 8,
			hitpoints: 850,
			troopLevel: 16,
			buildCost: 3200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			builderHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/35/Guard_Post8.png/revision/latest/scale-to-width-down/100?cb=20171109182019',
		},
		{
			level: 9,
			hitpoints: 1000,
			troopLevel: 18,
			buildCost: 4100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			builderHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/ff/Guard_Post9.png/revision/latest/scale-to-width-down/100?cb=20190616222444',
		},
		{
			level: 10,
			hitpoints: 1150,
			troopLevel: 20,
			buildCost: 5100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			builderHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f7/Guard_Post10.png/revision/latest/scale-to-width-down/100?cb=20230517041059',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getBuilderHallLevel: (level: number) => getHallLevel(building.builderHallDetails, level, 'builderHallLevel'),
}

export default building

import * as Constants from '@/constants'
import ArmyBuilding from '@IBuilderBase/army/armyCamp/army.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Army Camp',
	description:
		'Your troops are stationed in Army Camps. Each camp can house only one troop type at a time. Some troops can be upgraded to fit more units per camp!',
	maxCount: 6,
	width: 3,
	height: 3,
	maxLevel: 1,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/0/01/ArmyCampB_Ruin.png/revision/latest?cb=20170726151441',
	builderHallDetails: [
		{
			builderHallLevel: 1,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 2,
			availableCount: 2,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 3,
			availableCount: 3,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 4,
			availableCount: 4,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 5,
			availableCount: 4,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 6,
			availableCount: 5,
			maxLevel: 1,
			stage1MaxCount: 4,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 7,
			availableCount: 6,
			maxLevel: 1,
			stage1MaxCount: 4,
			stage2MaxCount: 2,
		},
		{
			builderHallLevel: 8,
			availableCount: 6,
			maxLevel: 1,
			stage1MaxCount: 4,
			stage2MaxCount: 2,
		},
		{
			builderHallLevel: 9,
			availableCount: 6,
			maxLevel: 1,
			stage1MaxCount: 4,
			stage2MaxCount: 2,
		},
		{
			builderHallLevel: 10,
			availableCount: 6,
			maxLevel: 1,
			stage1MaxCount: 4,
			stage2MaxCount: 2,
		},
	],
	levels: [
		{
			level: 1,
			numberOfArymCamps: 1,
			hitpoints: 300,
			buildCost: 0,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			builderHallLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Army_CampB.png/revision/latest?cb=20170726151144',
		},
		{
			level: 2,
			numberOfArymCamps: 2,
			hitpoints: 300,
			buildCost: 12000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 5,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 17,
			builderHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Army_CampB.png/revision/latest?cb=20170726151144',
		},
		{
			level: 3,
			numberOfArymCamps: 3,
			hitpoints: 300,
			buildCost: 180000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			builderHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Army_CampB.png/revision/latest?cb=20170726151144',
		},
		{
			level: 4,
			numberOfArymCamps: 4,
			hitpoints: 300,
			buildCost: 350000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			builderHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Army_CampB.png/revision/latest?cb=20170726151144',
		},
		{
			level: 5,
			numberOfArymCamps: 5,
			hitpoints: 300,
			buildCost: 2000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			builderHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Army_CampB.png/revision/latest?cb=20170726151144',
		},
		{
			level: 6,
			numberOfArymCamps: 6,
			hitpoints: 300,
			buildCost: 3000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			builderHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Army_CampB.png/revision/latest?cb=20170726151144',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getBuilderHallLevel: (level: number) => getHallLevel(building.builderHallDetails, level, 'builderHallLevel'),
}

export default building

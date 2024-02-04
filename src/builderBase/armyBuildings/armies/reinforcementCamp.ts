import * as Constants from '@/constants'
import ArmyBuilding from '@IBuilderBase/army/armyCamp/army.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Reinforcement Camp',
	description:
		'Reinforcement Camps provide helpful reinforcements during battles when reaching the corresponding stage.',
	maxCount: 2,
	width: 3,
	height: 3,
	maxLevel: 1,
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
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 7,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 8,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 9,
			availableCount: 2,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 2,
		},
		{
			builderHallLevel: 10,
			availableCount: 2,
			maxLevel: 1,
			stage1MaxCount: 0,
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
			builderHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7c/Reinforcement_Camp.png/revision/latest?cb=20230518074638',
		},
		{
			level: 2,
			numberOfArymCamps: 2,
			hitpoints: 300,
			buildCost: 4000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			builderHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7c/Reinforcement_Camp.png/revision/latest?cb=20230518074638',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getBuilderHallLevel: (level: number) =>
		getHallLevel(building.builderHallDetails, level, 'builderHallLevel'),
}

export default building

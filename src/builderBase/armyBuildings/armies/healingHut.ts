import * as Constants from '@/constants'
import ArmyBuilding from '@IBuilderBase/army/army.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Healing Hut',
	description:
		"Brews up a hearty and nourishing cauldron of soup following Master Builder's grandma's recipe. Troops eat some on their way to the next stage of an attack, recovering some of their health.",
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 6,
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
			maxLevel: 2,
			stage1MaxCount: 0,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 7,
			availableCount: 1,
			maxLevel: 3,
			stage1MaxCount: 0,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 8,
			availableCount: 1,
			maxLevel: 4,
			stage1MaxCount: 0,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 9,
			availableCount: 1,
			maxLevel: 5,
			stage1MaxCount: 0,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 10,
			availableCount: 1,
			maxLevel: 6,
			stage1MaxCount: 0,
			stage2MaxCount: 1,
		},
	],
	levels: [
		{
			level: 1,
			healthRecovery: 4,
			hitpoints: 600,
			buildCost: 1500000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 1,
			exp: 328,
			builderHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fd/Healing_Hut1.png/revision/latest/scale-to-width-down/100?cb=20230517101251',
		},
		{
			level: 2,
			healthRecovery: 8,
			hitpoints: 690,
			buildCost: 2000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			builderHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2d/Healing_Hut2.png/revision/latest/scale-to-width-down/100?cb=20230517101251',
		},
		{
			level: 3,
			healthRecovery: 12,
			hitpoints: 800,
			buildCost: 2500000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			builderHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/da/Healing_Hut3.png/revision/latest/scale-to-width-down/100?cb=20230517101252',
		},
		{
			level: 4,
			healthRecovery: 16,
			hitpoints: 910,
			buildCost: 3250000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			builderHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e8/Healing_Hut4.png/revision/latest/scale-to-width-down/100?cb=20230517101253',
		},
		{
			level: 5,
			healthRecovery: 20,
			hitpoints: 1050,
			buildCost: 4000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			builderHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f8/Healing_Hut5.png/revision/latest/scale-to-width-down/100?cb=20230517101254',
		},
		{
			level: 6,
			healthRecovery: 24,
			hitpoints: 1250,
			buildCost: 5000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			builderHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b2/Healing_Hut6.png/revision/latest/scale-to-width-down/100?cb=20230517101255',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getBuilderHallLevel: (level: number) => getHallLevel(building.builderHallDetails, level, 'builderHallLevel'),
}

export default building

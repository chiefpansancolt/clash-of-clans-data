import * as Constants from '@/constants'
import ArmyBuilding from '@IBuilderBase/army/alter/army.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Battle Machine Alter',
	description:
		"The Master Builder's prize invention smashes enemy buildings to bits. What better way is there to show who's the best builder around? Unlock the Electric Hammer ability to give opponents a real pounding!",
	maxCount: 1,
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
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 6,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 7,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 8,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 9,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 10,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
	],
	levels: [
		{
			level: 1,
			unlockedUnit: 'Battle Machine',
			hitpoints: 250,
			buildCost: 900000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			builderHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a6/BattleMachineAltar1.png/revision/latest/scale-to-width-down/120?cb=20170603193138',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getBuilderHallLevel: (level: number) =>
		getHallLevel(building.builderHallDetails, level, 'builderHallLevel'),
}

export default building

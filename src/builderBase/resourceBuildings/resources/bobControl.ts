import * as Constants from '@/constants'
import ResourceBuilding from '@IBuilderBase/resources/resource.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ResourceBuilding = {
	name: 'B.O.B Control',
	description:
		"Control center for Master Builder's latest invention! Once fully upgraded, B.O.B becomes an additional builder in the Home Village!",
	maxCount: 1,
	width: 2,
	height: 2,
	maxLevel: 5,
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
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 7,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 8,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
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
			maxLevel: 5,
			stage1MaxCount: 0,
			stage2MaxCount: 1,
		},
	],
	levels: [
		{
			level: 1,
			hitpoints: 250,
			buildCost: 100000,
			buildCostResource: Constants.builderGold,
			upgradeRequirement: 'N/A',
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/95/O.T.T.O_Hut1.png/revision/latest/scale-to-width-down/100?cb=20190621205325',
		},
		{
			level: 2,
			hitpoints: 250,
			buildCost: 0,
			buildCostResource: 'N/A',
			upgradeRequirement: 'Gear Up all 3 buildings: Cannon, Archer Tower, Mortar',
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a7/O.T.T.O_Hut2.png/revision/latest/scale-to-width-down/100?cb=20190621205325',
		},
		{
			level: 3,
			hitpoints: 250,
			buildCost: 0,
			buildCostResource: 'N/A',
			upgradeRequirement: 'Upgrade any troop to level 18',
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2e/O.T.T.O_Hut3.png/revision/latest/scale-to-width-down/100?cb=20190621205326',
		},
		{
			level: 4,
			hitpoints: 250,
			buildCost: 0,
			buildCostResource: 'N/A',
			upgradeRequirement: 'Upgrade any defense to level 9',
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6b/O.T.T.O_Hut4.png/revision/latest/scale-to-width-down/100?cb=20190621205326',
		},
		{
			level: 5,
			hitpoints: 250,
			buildCost: 0,
			buildCostResource: 'N/A',
			upgradeRequirement: 'Upgrade Battle Machine and Battle Copter to a total level of 45',
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/80/O.T.T.O_Hut5.png/revision/latest/scale-to-width-down/100?cb=20190621205327',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getBuilderHallLevel: (level: number) => getHallLevel(building.builderHallDetails, level, 'builderHallLevel'),
}

export default building

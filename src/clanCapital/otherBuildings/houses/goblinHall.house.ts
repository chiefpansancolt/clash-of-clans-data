import * as Constants from '@/constants'
import Building from '@IClanCapital/houses/house.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: Building = {
	name: 'Goblin Hall',
	description: 'An eerily quiet Goblin Hall, free from the usual sounds of scheming and clinking gold.',
	width: 3,
	height: 3,
	maxLevel: 1,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/0/01/Goblin_Hall_Ruin.png/revision/latest/scale-to-width-down/150?cb=20231212025253',
	districtHallDetails: [
		{
			name: Constants.capitalPeak,
			levels: [],
		},
		{
			name: Constants.barbarianCamp,
			levels: [],
		},
		{
			name: Constants.wizardValley,
			levels: [],
		},
		{
			name: Constants.ballonLagoon,
			levels: [],
		},
		{
			name: Constants.builderWorkshop,
			levels: [],
		},
		{
			name: Constants.dragonCliffs,
			levels: [],
		},
		{
			name: Constants.golemQuarry,
			levels: [],
		},
		{
			name: Constants.skeletonPark,
			levels: [],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ districtHallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 1, maxLevel: 1 },
			],
		},
	],
	levels: [
		{
			level: 1,
			hitpoints: 900,
			buildCost: 1000,
			buildCostResource: Constants.capitalGold,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Goblin_Hall_House.png/revision/latest/scale-to-width-down/138?cb=20231212025306',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

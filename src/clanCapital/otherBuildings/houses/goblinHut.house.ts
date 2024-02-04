import * as Constants from '@/constants'
import Building from '@IClanCapital/houses/house.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: Building = {
	name: 'Goblin Hut',
	description: "An empty Goblin hut. Maybe it's for sale?",
	width: 2,
	height: 2,
	maxLevel: 1,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/2/2e/Goblin_Hut_Ruin.png/revision/latest?cb=20231212025222',
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
				{ districtHallLevel: 1, availableCount: 11, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 11, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 11, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 11, maxLevel: 1 },
			],
		},
	],
	levels: [
		{
			level: 1,
			hitpoints: 650,
			buildCost: 500,
			buildCostResource: Constants.capitalGold,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/87/Goblin_Hut_House.png/revision/latest?cb=20231212025236',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

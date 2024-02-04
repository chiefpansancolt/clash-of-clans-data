import * as Constants from '@/constants'
import Building from '@IClanCapital/houses/house.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: Building = {
	name: 'Wooden House',
	description: 'A nicely built house. Great design. Provides shelter and comfort.',
	width: 3,
	height: 3,
	maxLevel: 1,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/8/87/Wooden_House_Ruin.png/revision/latest/scale-to-width-down/150?cb=20220510220648',
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
			levels: [
				{ districtHallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 5, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 7, maxLevel: 1 },
				{ districtHallLevel: 5, availableCount: 8, maxLevel: 1 },
			],
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
			levels: [
				{ districtHallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 6, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 8, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 8, maxLevel: 1 },
				{ districtHallLevel: 5, availableCount: 8, maxLevel: 1 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ districtHallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 5, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 6, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 6, maxLevel: 1 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [],
		},
	],
	levels: [
		{
			level: 1,
			hitpoints: 650,
			buildCost: 500,
			buildCostResource: Constants.capitalGold,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c3/Wooden_House.png/revision/latest/scale-to-width-down/150?cb=20220510220649',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

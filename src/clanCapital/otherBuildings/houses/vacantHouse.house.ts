import * as Constants from '@/constants'
import Building from '@IClanCapital/houses/house.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: Building = {
	name: 'Vacant House',
	description: '',
	width: 3,
	height: 3,
	maxLevel: 1,
	districtHallDetails: [
		{
			name: Constants.capitalPeak,
			levels: [
				{ districtHallLevel: 1, availableCount: 50, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 50, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 50, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 50, maxLevel: 1 },
				{ districtHallLevel: 5, availableCount: 50, maxLevel: 1 },
				{ districtHallLevel: 6, availableCount: 50, maxLevel: 1 },
				{ districtHallLevel: 7, availableCount: 50, maxLevel: 1 },
				{ districtHallLevel: 8, availableCount: 50, maxLevel: 1 },
				{ districtHallLevel: 9, availableCount: 50, maxLevel: 1 },
				{ districtHallLevel: 10, availableCount: 50, maxLevel: 1 },
			],
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
			levels: [],
		},
	],
	levels: [
		{
			level: 1,
			hitpoints: 800,
			buildCost: 0,
			buildCostResource: Constants.capitalGold,
			baseImgUrl: 'https://clashofclans.fandom.com/wiki/File:Vacant_House_1A.png',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

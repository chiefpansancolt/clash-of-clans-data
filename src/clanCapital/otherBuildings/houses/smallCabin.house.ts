import * as Constants from '@/constants'
import Building from '@IClanCapital/houses/house.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: Building = {
	name: 'Small Cabin',
	description: 'For the villagers who like their houses fair and square.',
	width: 2,
	height: 2,
	maxLevel: 1,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/1/19/Small_Cabin_Ruin.png/revision/latest/scale-to-width-down/100?cb=20220510220641',
	districtHallDetails: [
		{
			name: Constants.capitalPeak,
			levels: [],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ districtHallLevel: 1, availableCount: 3, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 5, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 5, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 5, maxLevel: 1 },
				{ districtHallLevel: 5, availableCount: 5, maxLevel: 1 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ districtHallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 6, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 8, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 10, maxLevel: 1 },
				{ districtHallLevel: 5, availableCount: 10, maxLevel: 1 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ districtHallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 5, availableCount: 4, maxLevel: 1 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ districtHallLevel: 1, availableCount: 3, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 3, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 3, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 4, maxLevel: 1 },
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
			hitpoints: 400,
			buildCost: 250,
			buildCostResource: Constants.capitalGold,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7c/Small_Cabin.png/revision/latest/scale-to-width-down/100?cb=20220510220642',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

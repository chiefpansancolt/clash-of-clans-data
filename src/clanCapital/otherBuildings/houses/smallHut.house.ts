import * as Constants from '@/constants'
import Building from '@IClanCapital/houses/house.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: Building = {
	name: 'Small Hut',
	description: 'A quaint little house. Not for tall people.',
	width: 2,
	height: 2,
	maxLevel: 1,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/f/f1/Small_Hut_Ruin.png/revision/latest/scale-to-width-down/100?cb=20220510220643',
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
				{ districtHallLevel: 1, availableCount: 7, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 8, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 10, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 10, maxLevel: 1 },
				{ districtHallLevel: 5, availableCount: 10, maxLevel: 1 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 0, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 3, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 6, maxLevel: 1 },
				{ districtHallLevel: 5, availableCount: 8, maxLevel: 1 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 6, maxLevel: 1 },
				{ districtHallLevel: 5, availableCount: 8, maxLevel: 1 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 0, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 0, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 5, availableCount: 4, maxLevel: 1 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 3, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 3, maxLevel: 1 },
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
				'https://static.wikia.nocookie.net/clashofclans/images/3/3e/Small_Hut.png/revision/latest/scale-to-width-down/100?cb=20220510220644',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

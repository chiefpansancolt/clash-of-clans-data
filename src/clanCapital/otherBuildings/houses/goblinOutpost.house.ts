import * as Constants from '@/constants'
import Building from '@IClanCapital/houses/house.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: Building = {
	name: 'Goblin Outpost',
	description: "An abandoned Goblin outpost. Where'd everyone go?",
	width: 2,
	height: 2,
	maxLevel: 1,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/a/af/Goblin_Outpost_Ruin.png/revision/latest?cb=20231212025328',
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
				{ districtHallLevel: 1, availableCount: 9, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 9, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 9, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 9, maxLevel: 1 },
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
				'https://static.wikia.nocookie.net/clashofclans/images/0/03/Goblin_Outpost_House.png/revision/latest?cb=20231212025340',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

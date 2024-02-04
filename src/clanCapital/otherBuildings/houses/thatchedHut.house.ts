import * as Constants from '@/constants'
import Building from '@IClanCapital/houses/house.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: Building = {
	name: 'Thatched Hut',
	description: 'Occupied by Barbarians. Shoddy craftmanship. Highly flammable.',
	width: 3,
	height: 3,
	maxLevel: 1,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/9/91/Thatched_Hut_Ruin.png/revision/latest/scale-to-width-down/150?cb=20220510220645',
	districtHallDetails: [
		{
			name: Constants.capitalPeak,
			levels: [],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ districtHallLevel: 1, availableCount: 6, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 7, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 7, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 9, maxLevel: 1 },
				{ districtHallLevel: 5, availableCount: 9, maxLevel: 1 },
			],
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
			levels: [
				{ districtHallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 6, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 8, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 8, maxLevel: 1 },
				{ districtHallLevel: 5, availableCount: 8, maxLevel: 1 },
			],
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
			hitpoints: 650,
			buildCost: 500,
			buildCostResource: Constants.capitalGold,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Thatched_Hut.png/revision/latest/scale-to-width-down/150?cb=20220510220645',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

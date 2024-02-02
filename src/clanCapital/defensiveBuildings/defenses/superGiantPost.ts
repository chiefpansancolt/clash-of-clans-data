import * as Constants from '@/constants'
import DefenseBuilding from '@IClanCapital/defenses/superGiantPost/defense.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Super Giant Post',
	description: 'Super Giants are ready to deliver a solid punch to any intruding troops.',
	width: 3,
	height: 3,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/8/86/Guard_Post_Ruin.png/revision/latest/scale-to-width-down/100?cb=20231217070455',
	troops: [
		{
			name: 'Super Giant',
			availableCount: 2,
		},
	],
	districtHallDetails: [
		{
			name: Constants.capitalPeak,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 2, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 3, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 4, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 5, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 6, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 7, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 8, availableCount: 1, maxLevel: 3 },
				{ districtHallLevel: 9, availableCount: 1, maxLevel: 4 },
				{ districtHallLevel: 10, availableCount: 1, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 3, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 3, maxLevel: 5 },
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
			troopLevel: 1,
			hitpoints: 800,
			buildCost: 7500,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 8,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d2/Super_Giant_Post1.png/revision/latest/scale-to-width-down/100?cb=20231217050838',
		},
		{
			level: 2,
			troopLevel: 2,
			hitpoints: 920,
			buildCost: 15000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 8,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/42/Super_Giant_Post2.png/revision/latest/scale-to-width-down/100?cb=20231217050843',
		},
		{
			level: 3,
			troopLevel: 3,
			hitpoints: 1065,
			buildCost: 30000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 8,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/86/Super_Giant_Post3.png/revision/latest/scale-to-width-down/100?cb=20231217050847',
		},
		{
			level: 4,
			troopLevel: 4,
			hitpoints: 1225,
			buildCost: 48000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fd/Super_Giant_Post4.png/revision/latest/scale-to-width-down/100?cb=20231217050851',
		},
		{
			level: 5,
			troopLevel: 5,
			hitpoints: 1400,
			buildCost: 80000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/04/Super_Giant_Post5.png/revision/latest/scale-to-width-down/100?cb=20231217050855',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

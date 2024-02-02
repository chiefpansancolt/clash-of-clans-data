import * as Constants from '@/constants'
import DefenseBuilding from '@IClanCapital/defenses/superDragonPost/defense.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Super Dragon Post',
	description: 'Super Dragons are very territorial and will roast any attackers.',
	width: 3,
	height: 3,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/8/86/Guard_Post_Ruin.png/revision/latest/scale-to-width-down/100?cb=20231217070455',
	troops: [
		{
			name: 'Super Dragon',
			availableCount: 1,
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
				{ districtHallLevel: 8, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 9, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 10, availableCount: 1, maxLevel: 5 },
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
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 3, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 4, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 5, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 6, maxLevel: 5 },
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
			troopLevel: 1,
			hitpoints: 800,
			buildCost: 12000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7d/Super_Dragon_Post1.png/revision/latest/scale-to-width-down/100?cb=20231217050852',
		},
		{
			level: 2,
			troopLevel: 2,
			hitpoints: 920,
			buildCost: 24000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/93/Super_Dragon_Post2.png/revision/latest/scale-to-width-down/100?cb=20231217050943',
		},
		{
			level: 3,
			troopLevel: 3,
			hitpoints: 1065,
			buildCost: 48000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/83/Super_Dragon_Post3.png/revision/latest/scale-to-width-down/100?cb=20231217050958',
		},
		{
			level: 4,
			troopLevel: 4,
			hitpoints: 1225,
			buildCost: 75000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a2/Super_Dragon_Post4.png/revision/latest/scale-to-width-down/100?cb=20231217051011',
		},
		{
			level: 5,
			troopLevel: 5,
			hitpoints: 1400,
			buildCost: 125000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a2/Super_Dragon_Post4.png/revision/latest/scale-to-width-down/100?cb=20231217051011',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

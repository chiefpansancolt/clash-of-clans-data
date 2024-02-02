import * as Constants from '@/constants'
import DefenseBuilding from '@IClanCapital/defenses/raidCartPost/defense.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Raid Cart Post',
	description: 'If a Raid Cart could feel happy, blasting at attackers would make it happy',
	width: 3,
	height: 3,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/8/86/Guard_Post_Ruin.png/revision/latest/scale-to-width-down/100?cb=20231217070455',
	troops: [
		{
			name: 'Seige Cart',
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
				{ districtHallLevel: 9, availableCount: 1, maxLevel: 4 },
				{ districtHallLevel: 10, availableCount: 1, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 3, maxLevel: 5 },
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
			buildCost: 9000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Raid_Cart_Post1.png/revision/latest/scale-to-width-down/100?cb=20231217050810',
		},
		{
			level: 2,
			troopLevel: 2,
			hitpoints: 920,
			buildCost: 18000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/92/Raid_Cart_Post2.png/revision/latest/scale-to-width-down/100?cb=20231217050815',
		},
		{
			level: 3,
			troopLevel: 3,
			hitpoints: 1065,
			buildCost: 36000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8d/Raid_Cart_Post3.png/revision/latest/scale-to-width-down/100?cb=20231217050820',
		},
		{
			level: 4,
			troopLevel: 4,
			hitpoints: 1225,
			buildCost: 57000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cb/Raid_Cart_Post4.png/revision/latest/scale-to-width-down/100?cb=20231217050823',
		},
		{
			level: 5,
			troopLevel: 5,
			hitpoints: 1400,
			buildCost: 95000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/ff/Raid_Cart_Post5.png/revision/latest/scale-to-width-down/100?cb=20231217050827',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

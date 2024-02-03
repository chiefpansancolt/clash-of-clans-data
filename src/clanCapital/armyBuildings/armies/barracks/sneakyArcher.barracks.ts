import * as Constants from '@/constants'
import ArmyBuilding from '@IClanCapital/army/barracks/army.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Sneaky Archers Barracks',
	description: 'Training ground for Sneaky Archers. Watch out for sneaky sharp flying objects.',
	width: 3,
	height: 3,
	maxLevel: 5,
	troopUnlocked: 'Sneaky Archers',
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/0/02/Barracks_Ruin.png/revision/latest/scale-to-width-down/100?cb=20220510102114',
	districtHallDetails: [
		{
			name: Constants.capitalPeak,
			levels: [],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ districtHallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 1, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 1, maxLevel: 5 },
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
			hitpoints: 1200,
			buildCost: 0,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/54/Sneaky_Archer_Barracks1.png/revision/latest/scale-to-width-down/100?cb=20231217041418',
		},
		{
			level: 2,
			hitpoints: 1400,
			buildCost: 12500,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bd/Sneaky_Archer_Barracks2.png/revision/latest/scale-to-width-down/100?cb=20231217041423',
		},
		{
			level: 3,
			hitpoints: 1600,
			buildCost: 50000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Sneaky_Archer_Barracks3.png/revision/latest/scale-to-width-down/100?cb=20231217041427',
		},
		{
			level: 4,
			hitpoints: 1800,
			buildCost: 125000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7c/Sneaky_Archer_Barracks4.png/revision/latest/scale-to-width-down/100?cb=20231217041431',
		},
		{
			level: 5,
			hitpoints: 2000,
			buildCost: 250000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/95/Sneaky_Archer_Barracks5.png/revision/latest/scale-to-width-down/100?cb=20231217041435',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

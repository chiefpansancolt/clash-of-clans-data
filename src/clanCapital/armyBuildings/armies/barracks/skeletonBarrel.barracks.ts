import * as Constants from '@/constants'
import ArmyBuilding from '@IClanCapital/army/army.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Skeleton Barrel Barracks',
	description: "It's actually a barrel workshop with a graveyard next to it, run by balloon salesman.",
	width: 3,
	height: 3,
	maxLevel: 5,
	troopUnlocked: 'Skeleton Barrel',
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/0/02/Barracks_Ruin.png/revision/latest/scale-to-width-down/100?cb=20220510102114',
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
			levels: [
				{ districtHallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 1, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 1, maxLevel: 5 },
			],
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
			buildCost: 10000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7c/Skeleton_Barrel_Barracks1.png/revision/latest/scale-to-width-down/100?cb=20231217041357',
		},
		{
			level: 2,
			hitpoints: 1400,
			buildCost: 25000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4f/Skeleton_Barrel_Barracks2.png/revision/latest/scale-to-width-down/100?cb=20231217041402',
		},
		{
			level: 3,
			hitpoints: 1600,
			buildCost: 100000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/75/Skeleton_Barrel_Barracks3.png/revision/latest/scale-to-width-down/100?cb=20231217041406',
		},
		{
			level: 4,
			hitpoints: 1800,
			buildCost: 250000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/40/Skeleton_Barrel_Barracks4.png/revision/latest/scale-to-width-down/100?cb=20231217041410',
		},
		{
			level: 5,
			hitpoints: 2000,
			buildCost: 500000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f8/Skeleton_Barrel_Barracks5.png/revision/latest/scale-to-width-down/100?cb=20231217041413',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

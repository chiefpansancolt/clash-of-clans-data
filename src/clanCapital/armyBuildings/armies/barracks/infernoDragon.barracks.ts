import * as Constants from '@/constants'
import ArmyBuilding from '@IClanCapital/army/army.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Inferno Dragon Barracks',
	description:
		'A fun place for Inferno Dragons to hang out together. Constructed of the most fireproof material Grand Builder could find.',
	width: 3,
	height: 3,
	maxLevel: 4,
	troopUnlocked: 'Inferno Dragon',
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
			levels: [
				{ districtHallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 1, maxLevel: 4 },
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
			hitpoints: 1200,
			buildCost: 0,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/44/Inferno_Dragon_Barracks1.png/revision/latest/scale-to-width-down/100?cb=20231217041220',
		},
		{
			level: 2,
			hitpoints: 1400,
			buildCost: 35000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/66/Inferno_Dragon_Barracks2.png/revision/latest/scale-to-width-down/100?cb=20231217041225',
		},
		{
			level: 3,
			hitpoints: 1600,
			buildCost: 125000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Inferno_Dragon_Barracks3.png/revision/latest/scale-to-width-down/100?cb=20231217041230',
		},
		{
			level: 4,
			hitpoints: 1800,
			buildCost: 275000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e8/Inferno_Dragon_Barracks4.png/revision/latest/scale-to-width-down/100?cb=20231217041234',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

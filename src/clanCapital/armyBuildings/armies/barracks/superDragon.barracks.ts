import * as Constants from '@/constants'
import ArmyBuilding from '@IClanCapital/army/barracks/army.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Super Dragon Barracks',
	description:
		"In hindsight, wood might not be the best material for housing Dragons. It's a wonder the building hasn't caught on fire yet.",
	width: 3,
	height: 3,
	maxLevel: 5,
	troopUnlocked: 'Super Dragon',
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
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 1, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 1, maxLevel: 5 },
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
			hitpoints: 1200,
			buildCost: 10000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/12/Super_Dragon_Barracks1.png/revision/latest/scale-to-width-down/100?cb=20231217041517',
		},
		{
			level: 2,
			hitpoints: 1400,
			buildCost: 25000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/90/Super_Dragon_Barracks2.png/revision/latest/scale-to-width-down/100?cb=20231217041523',
		},
		{
			level: 3,
			hitpoints: 1600,
			buildCost: 100000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6c/Super_Dragon_Barracks3.png/revision/latest/scale-to-width-down/100?cb=20231217041527',
		},
		{
			level: 4,
			hitpoints: 1800,
			buildCost: 250000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a2/Super_Dragon_Barracks4.png/revision/latest/scale-to-width-down/100?cb=20231217041540',
		},
		{
			level: 5,
			hitpoints: 2000,
			buildCost: 500000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Super_Dragon_Barracks5.png/revision/latest/scale-to-width-down/100?cb=20231217041544',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

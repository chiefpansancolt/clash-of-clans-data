import * as Constants from '@/constants'
import ArmyBuilding from '@IClanCapital/army/barracks/army.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Battle Ram Barracks',
	description: 'This bad boy can fit so many Battle Rams inside!',
	width: 3,
	height: 3,
	maxLevel: 5,
	troopUnlocked: 'Battle Ram',
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
			buildCost: 7500,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8a/Battle_Ram_Barracks1.png/revision/latest/scale-to-width-down/100?cb=20231217041141',
		},
		{
			level: 2,
			hitpoints: 1400,
			buildCost: 20000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ec/Battle_Ram_Barracks2.png/revision/latest/scale-to-width-down/100?cb=20231217041145',
		},
		{
			level: 3,
			hitpoints: 1600,
			buildCost: 75000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0a/Battle_Ram_Barracks3.png/revision/latest/scale-to-width-down/100?cb=20231217041150',
		},
		{
			level: 4,
			hitpoints: 1800,
			buildCost: 200000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/39/Battle_Ram_Barracks4.png/revision/latest/scale-to-width-down/100?cb=20231217041153',
		},
		{
			level: 5,
			hitpoints: 2000,
			buildCost: 400000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9a/Battle_Ram_Barracks5.png/revision/latest/scale-to-width-down/100?cb=20231217041157',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

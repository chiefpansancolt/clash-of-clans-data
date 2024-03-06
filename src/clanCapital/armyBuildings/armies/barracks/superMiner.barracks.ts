import * as Constants from '@/constants'
import ArmyBuilding from '@IClanCapital/army/army.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Super Miner Barracks',
	description: 'A happy hangout for Super Miners. Very earthy with a rich note of drill oil.',
	width: 3,
	height: 3,
	maxLevel: 4,
	troopUnlocked: 'Super Miner',
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
			levels: [],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ districtHallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 1, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			hitpoints: 1200,
			buildCost: 17500,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/69/Super_Miner_Barracks1.png/revision/latest/scale-to-width-down/100?cb=20231217041611',
		},
		{
			level: 2,
			hitpoints: 1400,
			buildCost: 50000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/ba/Super_Miner_Barracks2.png/revision/latest/scale-to-width-down/100?cb=20231217041618',
		},
		{
			level: 3,
			hitpoints: 1600,
			buildCost: 150000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fc/Super_Miner_Barracks3.png/revision/latest/scale-to-width-down/100?cb=20231217041621',
		},
		{
			level: 4,
			hitpoints: 1800,
			buildCost: 300000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/83/Super_Miner_Barracks4.png/revision/latest/scale-to-width-down/100?cb=20231217041627',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

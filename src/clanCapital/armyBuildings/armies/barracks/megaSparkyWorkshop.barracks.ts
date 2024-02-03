import * as Constants from '@/constants'
import ArmyBuilding from '@IClanCapital/army/barracks/army.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Mega Sparky Workshop',
	description:
		'Where lightning repeatedly strikes glass orbs to bring a Mega Sparky to life. It’s enough to make passers-by’s hair stand on end.',
	width: 3,
	height: 3,
	maxLevel: 4,
	troopUnlocked: 'Mega Sparky',
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/9/9d/Mega_Sparky_Workshop_Ruin.png/revision/latest/scale-to-width-down/100?cb=20231217040951',
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
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 1 },
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
			buildCost: 37500,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c5/Mega_Sparky_Workshop1.png/revision/latest/scale-to-width-down/100?cb=20231217040955',
		},
		{
			level: 2,
			hitpoints: 1400,
			buildCost: 75000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a6/Mega_Sparky_Workshop2.png/revision/latest/scale-to-width-down/100?cb=20231217040959',
		},
		{
			level: 3,
			hitpoints: 1600,
			buildCost: 200000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0e/Mega_Sparky_Workshop3.png/revision/latest/scale-to-width-down/100?cb=20231217041002',
		},
		{
			level: 4,
			hitpoints: 1800,
			buildCost: 400000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ae/Mega_Sparky_Workshop4.png/revision/latest/scale-to-width-down/100?cb=20231217041006',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

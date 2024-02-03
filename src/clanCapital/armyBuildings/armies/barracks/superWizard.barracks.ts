import * as Constants from '@/constants'
import ArmyBuilding from '@IClanCapital/army/barracks/army.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Super Wizard Barracks',
	description:
		'It looks like a barracks for Super Wizards, but continuous explosions are making it scary to get closer.',
	width: 3,
	height: 3,
	maxLevel: 5,
	troopUnlocked: 'Super Wizard',
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
			levels: [
				{ districtHallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 1, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 1, maxLevel: 5 },
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
			hitpoints: 1200,
			buildCost: 10000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/af/Super_Wizard_Barracks1.png/revision/latest/scale-to-width-down/100?cb=20231217041631',
		},
		{
			level: 2,
			hitpoints: 1400,
			buildCost: 25000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c0/Super_Wizard_Barracks2.png/revision/latest/scale-to-width-down/100?cb=20231217041636',
		},
		{
			level: 3,
			hitpoints: 1600,
			buildCost: 100000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/51/Super_Wizard_Barracks3.png/revision/latest/scale-to-width-down/100?cb=20231217041640',
		},
		{
			level: 4,
			hitpoints: 1800,
			buildCost: 250000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8e/Super_Wizard_Barracks4.png/revision/latest/scale-to-width-down/100?cb=20231217041644',
		},
		{
			level: 5,
			hitpoints: 2000,
			buildCost: 500000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7b/Super_Wizard_Barracks5.png/revision/latest/scale-to-width-down/100?cb=20231217041647',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

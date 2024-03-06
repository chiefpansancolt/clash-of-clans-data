import * as Constants from '@/constants'
import ArmyBuilding from '@IClanCapital/army/army.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Flying Fortress Yard',
	description:
		'A construction yard for Flying Fortresses. High in the mountains perhaps because the builder doubted whether it would fly.',
	width: 3,
	height: 3,
	maxLevel: 5,
	troopUnlocked: 'Flying Fortress',
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/a/a7/Flying_Fortress_Yard_Ruin.png/revision/latest/scale-to-width-down/100?cb=20220510101911',
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
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 1 },
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
			buildCost: 25000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Flying_Fortress_Yard1.png/revision/latest/scale-to-width-down/100?cb=20220510101912',
		},
		{
			level: 2,
			hitpoints: 1400,
			buildCost: 50000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/ca/Flying_Fortress_Yard2.png/revision/latest/scale-to-width-down/100?cb=20220510101913',
		},
		{
			level: 3,
			hitpoints: 1600,
			buildCost: 150000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/62/Flying_Fortress_Yard3.png/revision/latest/scale-to-width-down/100?cb=20220510101914',
		},
		{
			level: 4,
			hitpoints: 1800,
			buildCost: 300000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e2/Flying_Fortress_Yard4.png/revision/latest/scale-to-width-down/100?cb=20220510101915',
		},
		{
			level: 5,
			hitpoints: 2000,
			buildCost: 600000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/54/Flying_Fortress_Yard5.png/revision/latest/scale-to-width-down/100?cb=20220510101916',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

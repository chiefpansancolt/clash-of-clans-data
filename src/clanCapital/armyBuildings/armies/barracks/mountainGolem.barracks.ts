import * as Constants from '@/constants'
import ArmyBuilding from '@IClanCapital/army/barracks/army.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Mountain Golem Quarry',
	description: "A giant, golem shaped hole in the ground. Hopefully a new hole isn't needed every time.",
	width: 3,
	height: 3,
	maxLevel: 5,
	troopUnlocked: 'Mountain Golem',
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/7/78/Mountain_Golem_Quarry_Ruin.png/revision/latest/scale-to-width-down/100?cb=20220510101939',
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
			levels: [
				{ districtHallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 1, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 1, maxLevel: 5 },
			],
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
				'https://static.wikia.nocookie.net/clashofclans/images/1/15/Mountain_Golem_Quarry1.png/revision/latest/scale-to-width-down/100?cb=20220510101940',
		},
		{
			level: 2,
			hitpoints: 1400,
			buildCost: 50000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d5/Mountain_Golem_Quarry2.png/revision/latest/scale-to-width-down/100?cb=20220510101941',
		},
		{
			level: 3,
			hitpoints: 1600,
			buildCost: 150000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Mountain_Golem_Quarry3.png/revision/latest/scale-to-width-down/100?cb=20220510101942',
		},
		{
			level: 4,
			hitpoints: 1800,
			buildCost: 300000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/80/Mountain_Golem_Quarry4.png/revision/latest/scale-to-width-down/100?cb=20220510101943',
		},
		{
			level: 5,
			hitpoints: 2000,
			buildCost: 600000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/47/Mountain_Golem_Quarry5.png/revision/latest/scale-to-width-down/100?cb=20220510101944',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

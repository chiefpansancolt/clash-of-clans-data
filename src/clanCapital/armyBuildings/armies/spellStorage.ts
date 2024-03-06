import * as Constants from '@/constants'
import ArmyBuilding from '@IClanCapital/army/army.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Spell Storage',
	description: "Spell Storage holds the Capital's brewed spells. Upgrade to increase Spell capacity in Raids.",
	width: 3,
	height: 3,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/1/11/Spell_Storage_Ruin.png/revision/latest/scale-to-width-down/100?cb=20220510083824',
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
			capacity: 3,
			hitpoints: 1000,
			buildCost: 0,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7a/Spell_Storage1.png/revision/latest/scale-to-width-down/100?cb=20220510083825',
		},
		{
			level: 2,
			capacity: 4,
			hitpoints: 1150,
			buildCost: 50000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c8/Spell_Storage2.png/revision/latest/scale-to-width-down/100?cb=20220510083826',
		},
		{
			level: 3,
			capacity: 5,
			hitpoints: 1350,
			buildCost: 100000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e6/Spell_Storage3.png/revision/latest/scale-to-width-down/100?cb=20220510083827',
		},
		{
			level: 4,
			capacity: 6,
			hitpoints: 1550,
			buildCost: 200000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8d/Spell_Storage4.png/revision/latest/scale-to-width-down/100?cb=20220510083828',
		},
		{
			level: 5,
			capacity: 7,
			hitpoints: 1750,
			buildCost: 400000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a1/Spell_Storage5.png/revision/latest/scale-to-width-down/100?cb=20220510083829',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

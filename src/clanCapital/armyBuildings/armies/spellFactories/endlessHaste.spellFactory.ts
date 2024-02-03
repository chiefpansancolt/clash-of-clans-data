import * as Constants from '@/constants'
import ArmyBuilding from '@IClanCapital/army/spellFactory/army.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Endless Haste Spell Factory',
	description: 'Brews big kegs of Endless Haste. Passing Villagers always hurry up when they pass by.',
	width: 3,
	height: 3,
	maxLevel: 5,
	spellUnlocked: 'Endless Haste Spell',
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/a/a1/Spell_Factory_Ruin.png/revision/latest/scale-to-width-down/120?cb=20231214044444',
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
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 1, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			hitpoints: 1000,
			buildCost: 25000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b8/Endless_Haste_Spell_Factory1.png/revision/latest/scale-to-width-down/100?cb=20231214044202',
		},
		{
			level: 2,
			hitpoints: 1150,
			buildCost: 50000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fd/Endless_Haste_Spell_Factory2.png/revision/latest/scale-to-width-down/100?cb=20231214044206',
		},
		{
			level: 3,
			hitpoints: 1300,
			buildCost: 125000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f7/Endless_Haste_Spell_Factory3.png/revision/latest/scale-to-width-down/100?cb=20231214044210',
		},
		{
			level: 4,
			hitpoints: 1450,
			buildCost: 250000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9e/Endless_Haste_Spell_Factory4.png/revision/latest/scale-to-width-down/100?cb=20231214044214',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

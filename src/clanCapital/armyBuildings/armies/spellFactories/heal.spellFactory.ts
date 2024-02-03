import * as Constants from '@/constants'
import ArmyBuilding from '@IClanCapital/army/spellFactory/army.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Heal Spell Factory',
	description: 'Brews big kegs of Heal Spell. The flowery smell makes headaches magically go away!',
	width: 3,
	height: 3,
	maxLevel: 5,
	spellUnlocked: 'Healing Spell',
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
			hitpoints: 1000,
			buildCost: 0,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d1/Heal_Spell_Factory1.png/revision/latest/scale-to-width-down/100?cb=20231214044258',
		},
		{
			level: 2,
			hitpoints: 1150,
			buildCost: 25000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f4/Heal_Spell_Factory2.png/revision/latest/scale-to-width-down/100?cb=20231214044304',
		},
		{
			level: 3,
			hitpoints: 1300,
			buildCost: 50000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Heal_Spell_Factory3.png/revision/latest/scale-to-width-down/100?cb=20231214044308',
		},
		{
			level: 4,
			hitpoints: 1450,
			buildCost: 100000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9f/Heal_Spell_Factory4.png/revision/latest/scale-to-width-down/100?cb=20231214044311',
		},
		{
			level: 5,
			hitpoints: 1600,
			buildCost: 200000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Heal_Spell_Factory5.png/revision/latest/scale-to-width-down/100?cb=20231214044315',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

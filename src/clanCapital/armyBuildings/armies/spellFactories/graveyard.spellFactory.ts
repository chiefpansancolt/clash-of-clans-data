import * as Constants from '@/constants'
import ArmyBuilding from '@IClanCapital/army/spellFactory/army.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Graveyard Spell Factory',
	description: 'Brews big kegs of Graveyard Spell. Please kindly ignore the sound of rattling bones.',
	width: 3,
	height: 3,
	maxLevel: 4,
	spellUnlocked: 'Graveyard Spell',
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
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 1, maxLevel: 4 },
			],
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
			buildCost: 20000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/88/Graveyard_Spell_Factory1.png/revision/latest/scale-to-width-down/100?cb=20231214044239',
		},
		{
			level: 2,
			hitpoints: 1150,
			buildCost: 40000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d8/Graveyard_Spell_Factory2.png/revision/latest/scale-to-width-down/100?cb=20231214044244',
		},
		{
			level: 3,
			hitpoints: 1300,
			buildCost: 75000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7a/Graveyard_Spell_Factory3.png/revision/latest/scale-to-width-down/100?cb=20231214044249',
		},
		{
			level: 4,
			hitpoints: 1450,
			buildCost: 150000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/19/Graveyard_Spell_Factory4.png/revision/latest/scale-to-width-down/100?cb=20231214044254',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

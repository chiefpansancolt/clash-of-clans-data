import * as Constants from '@/constants'
import TrapBuilding from '@IClanCapital/traps/spearTrap/trap.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: TrapBuilding = {
	name: 'Spear Trap',
	description:
		'Awaits a group of units to pass by and become the unwilling recipients of a flock of lethally spiky spears."',
	width: 2,
	height: 2,
	maxLevel: 4,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/c/c1/Spear_Trap_Ruin.png/revision/latest?cb=20231212023926',
	mode: {
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.groundAndAir,
		minTriggerRange: 0,
		maxTriggerRange: 10,
		favoriteTarget: Constants.any,
	},
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
				{ districtHallLevel: 1, availableCount: 3, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 5, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 6, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damage: 120,
			projectileCount: 4,
			buildCost: 3000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6b/Spear_Trap1.png/revision/latest?cb=20231212023927',
		},
		{
			level: 2,
			damage: 140,
			projectileCount: 5,
			buildCost: 6000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7a/Spear_Trap2.png/revision/latest?cb=20231212023931',
		},
		{
			level: 3,
			damage: 160,
			projectileCount: 6,
			buildCost: 12000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/75/Spear_Trap3.png/revision/latest?cb=20231212023935',
		},
		{
			level: 4,
			damage: 180,
			projectileCount: 7,
			buildCost: 20000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b8/Spear_Trap4.png/revision/latest?cb=20231212023938',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

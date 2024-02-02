import * as Constants from '@/constants'
import DefenseBuilding from '@IClanCapital/defenses/defense.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Blast Bow',
	description:
		'Blast Bow finally gives a definitive answer to an age-old question: how dangerous would arrows the size of tree trunks be? Perhaps not surprisingly, very dangerous.',
	width: 4,
	height: 4,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/3/3f/Blast_Bow_Ruin.png/revision/latest/scale-to-width-down/100?cb=20220508102214',
	mode: {
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.groundAndAir,
		minRange: 3.5,
		maxRange: 14,
		attackSpeed: 4,
	},
	districtHallDetails: [
		{
			name: Constants.capitalPeak,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 2, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 3, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 4, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 5, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 6, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 7, availableCount: 1, maxLevel: 2 },
				{ districtHallLevel: 8, availableCount: 1, maxLevel: 3 },
				{ districtHallLevel: 9, availableCount: 1, maxLevel: 4 },
				{ districtHallLevel: 10, availableCount: 2, maxLevel: 5 },
			],
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
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 1, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ districtHallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 1, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 1, maxLevel: 5 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ districtHallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 0, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 0, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 1, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 170,
			damagePerShot: 680,
			hitpoints: 4800,
			buildCost: 20000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 6,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Blast_Bow1.png/revision/latest/scale-to-width-down/100?cb=20220508102215',
		},
		{
			level: 2,
			damagePerSecond: 185,
			damagePerShot: 740,
			hitpoints: 5400,
			buildCost: 40000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 7,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/82/Blast_Bow2.png/revision/latest/scale-to-width-down/100?cb=20220508102216',
		},
		{
			level: 3,
			damagePerSecond: 200,
			damagePerShot: 800,
			hitpoints: 6000,
			buildCost: 80000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 8,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b7/Blast_Bow3.png/revision/latest/scale-to-width-down/100?cb=20220508102217',
		},
		{
			level: 4,
			damagePerSecond: 215,
			damagePerShot: 860,
			hitpoints: 6600,
			buildCost: 133000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Blast_Bow4.png/revision/latest/scale-to-width-down/100?cb=20220508102218',
		},
		{
			level: 5,
			damagePerSecond: 230,
			damagePerShot: 920,
			hitpoints: 7200,
			buildCost: 205000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/79/Blast_Bow5.png/revision/latest/scale-to-width-down/100?cb=20220508102219',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

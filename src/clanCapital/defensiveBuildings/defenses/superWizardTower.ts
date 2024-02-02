import * as Constants from '@/constants'
import DefenseBuilding from '@IClanCapital/defenses/defense.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Super Wizard Tower',
	description:
		"Super Wizards' electrickery is shockingly powerful against swarms of attackers, as it bounces to everyone too close to the initial target.",
	width: 2,
	height: 2,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/3/3e/Super_Wizard_Tower_Ruin.png/revision/latest/scale-to-width-down/100?cb=20221225050434',
	mode: {
		damageType: Constants.singleTargetChainLighting,
		unitTypeTarget: Constants.groundAndAir,
		minRange: 0,
		maxRange: 5.5,
		attackSpeed: 2,
	},
	districtHallDetails: [
		{
			name: Constants.capitalPeak,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 2, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 3, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 4, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 5, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 6, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 7, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 8, availableCount: 2, maxLevel: 4 },
				{ districtHallLevel: 9, availableCount: 2, maxLevel: 5 },
				{ districtHallLevel: 10, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ districtHallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 5, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 6, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 6, maxLevel: 5 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 3, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 4, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 4, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ districtHallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 4, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 4, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 2, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 60,
			damagePerShot: 120,
			hitpoints: 48,
			buildCost: 1800,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 6500,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/68/Super_Wizard_Tower1.png/revision/latest/scale-to-width-down/100?cb=20221225050441',
		},
		{
			level: 2,
			damagePerSecond: 70,
			damagePerShot: 140,
			hitpoints: 56,
			buildCost: 2100,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 13000,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Super_Wizard_Tower2.png/revision/latest/scale-to-width-down/100?cb=20221225050448',
		},
		{
			level: 3,
			damagePerSecond: 80,
			damagePerShot: 160,
			hitpoints: 64,
			buildCost: 2400,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 26000,
			districtHallLevel: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e5/Super_Wizard_Tower3.png/revision/latest/scale-to-width-down/100?cb=20221225050455',
		},
		{
			level: 4,
			damagePerSecond: 90,
			damagePerShot: 180,
			hitpoints: 72,
			buildCost: 2700,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 42000,
			districtHallLevel: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dc/Super_Wizard_Tower4.png/revision/latest/scale-to-width-down/100?cb=20221225050501',
		},
		{
			level: 5,
			damagePerSecond: 100,
			damagePerShot: 200,
			hitpoints: 80,
			buildCost: 3000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 70000,
			districtHallLevel: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e6/Super_Wizard_Tower5.png/revision/latest/scale-to-width-down/100?cb=20221225050508',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

import * as Constants from '@/constants'
import DefenseBuilding from '@IClanCapital/defenses/defense.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Reflector',
	description:
		"Nobody would expect a whirling contraption of shields to reflect any attack back at the attacker... But that's exactly what the Reflector does.",
	width: 2,
	height: 2,
	maxLevel: 4,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/8/81/Reflector_Ruin.png/revision/latest/scale-to-width-down/130?cb=20221212223837',
	mode: {
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.groundAndAir,
		minRange: 0,
		maxRange: 10,
		attackSpeed: 0.575,
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
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 3, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 5, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 6, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 4, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 260,
			damagePerShot: 149.5,
			hitpoints: 3300,
			buildCost: 7500,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f8/Reflector1.png/revision/latest/scale-to-width-down/90?cb=20221212223853',
		},
		{
			level: 2,
			damagePerSecond: 290,
			damagePerShot: 166.75,
			hitpoints: 3600,
			buildCost: 15000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/95/Reflector2.png/revision/latest/scale-to-width-down/90?cb=20221212223858',
		},
		{
			level: 3,
			damagePerSecond: 320,
			damagePerShot: 184,
			hitpoints: 3900,
			buildCost: 30000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Reflector3.png/revision/latest/scale-to-width-down/90?cb=20221212223905',
		},
		{
			level: 4,
			damagePerSecond: 350,
			damagePerShot: 201.25,
			hitpoints: 4200,
			buildCost: 48000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/26/Reflector4.png/revision/latest/scale-to-width-down/90?cb=20221212223911',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

import * as Constants from '@/constants'
import DefenseBuilding from '@IClanCapital/defenses/miniMinionHive/defense.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Mini-Minion Hive',
	description:
		'Built over an underground hive, this defense opens to release a swarm of extremely territorial and extremely dangerous Mini-Minions to take down any attacker.',
	width: 3,
	height: 3,
	maxLevel: 4,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/7/72/Mini-Minion_Hive_Ruin.png/revision/latest/scale-to-width-down/100?cb=20221213031340',
	mode: {
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.groundAndAir,
		minRange: 0,
		maxRange: 14,
		miniMinionsPerBurst: 12,
		attackSpeed: 1.5,
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
				{ districtHallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 2, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 0, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 1, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 209,
			damagePerShot: 75,
			hitpoints: 4400,
			buildCost: 17500,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/88/Mini-Minion_Hive1.png/revision/latest/scale-to-width-down/100?cb=20221213031353',
		},
		{
			level: 2,
			damagePerSecond: 251,
			damagePerShot: 90,
			hitpoints: 4800,
			buildCost: 35000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c5/Mini-Minion_Hive2.png/revision/latest/scale-to-width-down/100?cb=20221213031358',
		},
		{
			level: 3,
			damagePerSecond: 293,
			damagePerShot: 105,
			hitpoints: 5200,
			buildCost: 70000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/81/Mini-Minion_Hive3.png/revision/latest/scale-to-width-down/100?cb=20221213031404',
		},
		{
			level: 4,
			damagePerSecond: 335,
			damagePerShot: 120,
			hitpoints: 5600,
			buildCost: 113000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a4/Mini-Minion_Hive4.png/revision/latest/scale-to-width-down/100?cb=20221213031534',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

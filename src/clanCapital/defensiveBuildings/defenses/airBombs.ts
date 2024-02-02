import * as Constants from '@/constants'
import DefenseBuilding from '@IClanCapital/defenses/defense.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Air Bombs',
	description:
		'For heavyweight air defense, Air Bombs do the trick. An endless supply of explosive barrels launch into the sky to ravage flying enemies!',
	width: 2,
	height: 2,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/c/cf/Air_Bombs_Ruin.png/revision/latest/scale-to-width-down/100?cb=20231217073744',
	mode: {
		name: Constants.mainMode,
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.air,
		minRange: 0,
		maxRange: 8.5,
		attackSpeed: 3,
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
				{ districtHallLevel: 9, availableCount: 2, maxLevel: 4 },
				{ districtHallLevel: 10, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 3, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ districtHallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 3, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 3, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 3, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 3, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ districtHallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 3, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ districtHallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 2, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 225,
			damagePerShot: 675,
			hitpoints: 2300,
			buildCost: 6000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 3,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9c/Air_Bombs1C.png/revision/latest/scale-to-width-down/100?cb=20231217073748',
		},
		{
			level: 2,
			damagePerSecond: 250,
			damagePerShot: 750,
			hitpoints: 2550,
			buildCost: 12000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 4,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/21/Air_Bombs2C.png/revision/latest/scale-to-width-down/100?cb=20231217073753',
		},
		{
			level: 3,
			damagePerSecond: 275,
			damagePerShot: 825,
			hitpoints: 2700,
			buildCost: 24000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 6,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0a/Air_Bombs3C.png/revision/latest/scale-to-width-down/100?cb=20231217073757',
		},
		{
			level: 4,
			damagePerSecond: 300,
			damagePerShot: 900,
			hitpoints: 2950,
			buildCost: 39000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 8,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/70/Air_Bombs4C.png/revision/latest/scale-to-width-down/100?cb=20231217073801',
		},
		{
			level: 5,
			damagePerSecond: 325,
			damagePerShot: 975,
			hitpoints: 3200,
			buildCost: 65000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ae/Air_Bombs5C.png/revision/latest/scale-to-width-down/100?cb=20231217073805',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

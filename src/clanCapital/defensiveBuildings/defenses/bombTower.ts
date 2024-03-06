import * as Constants from '../../../constants'
import DefenseBuilding from '@IClanCapital/defenses/defense.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Bomb Tower',
	description:
		'Bomb Towers bombard nearby ground troops and go up in a big BOOM when destroyed! Melee units best stand clear!',
	width: 2,
	height: 2,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/8/86/Bomb_Tower_Ruin.png/revision/latest/scale-to-width-down/100?cb=20221225050354',
	mode: {
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		minRange: 0,
		maxRange: 5,
		attackSpeed: 1.1,
	},
	districtHallDetails: [
		{
			name: Constants.capitalPeak,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 4, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 5, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 6, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 7, availableCount: 2, maxLevel: 4 },
				{ districtHallLevel: 8, availableCount: 2, maxLevel: 4 },
				{ districtHallLevel: 9, availableCount: 2, maxLevel: 5 },
				{ districtHallLevel: 10, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 3, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 4, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 3, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 3, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ districtHallLevel: 1, availableCount: 3, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 4, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 4, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ districtHallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 2, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 65,
			damagePerShot: 71.5,
			damageWhenDestroyed: 300,
			hitpoints: 2000,
			buildCost: 4500,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 2,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/86/Bomb_Tower1C.png/revision/latest/scale-to-width-down/100?cb=20221225050400',
		},
		{
			level: 2,
			damagePerSecond: 75,
			damagePerShot: 82.5,
			damageWhenDestroyed: 350,
			hitpoints: 2250,
			buildCost: 9000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 3,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e8/Bomb_Tower2C.png/revision/latest/scale-to-width-down/100?cb=20221225050406',
		},
		{
			level: 3,
			damagePerSecond: 85,
			damagePerShot: 93.5,
			damageWhenDestroyed: 400,
			hitpoints: 2500,
			buildCost: 18000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 5,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/14/Bomb_Tower3C.png/revision/latest/scale-to-width-down/100?cb=20221225050412',
		},
		{
			level: 4,
			damagePerSecond: 95,
			damagePerShot: 104.5,
			damageWhenDestroyed: 450,
			hitpoints: 2750,
			buildCost: 30000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 7,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/22/Bomb_Tower4C.png/revision/latest/scale-to-width-down/100?cb=20221225050419',
		},
		{
			level: 5,
			damagePerSecond: 105,
			damagePerShot: 115.5,
			damageWhenDestroyed: 500,
			hitpoints: 3000,
			buildCost: 50000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4c/Bomb_Tower5C.png/revision/latest/scale-to-width-down/100?cb=20221225050425',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building

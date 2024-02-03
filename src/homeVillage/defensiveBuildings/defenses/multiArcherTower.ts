import * as Constants from '@/constants'
import DefenseBuilding from '@IHomeVillage/defenses/defense.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Multi Archer Tower',
	description:
		'These Archers have teamed up to take out attackers faster and more furiously than ever. Teamwork makes the dream work!',
	maxCount: 2,
	width: 3,
	height: 3,
	maxLevel: 2,
	mode: {
		damageType: Constants.multipleTargets,
		unitTypeTarget: Constants.groundAndAir,
		minRange: 0,
		maxRange: 10,
		attackSpeed: 0.5,
	},
	townHallDetails: [
		{ townHallLevel: 1, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 2, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 3, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 4, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 5, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 6, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 7, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 8, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 9, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 10, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 11, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 12, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 13, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 14, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 15, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 16, availableCount: 2, maxLevel: 2 },
	],
	levels: [
		{
			level: 0,
			damagePerSecond: 0,
			damagePerShot: 0,
			hitpoints: 0,
			buildCost: 0,
			buildCostResource: '',
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/85/Multi-Archer_Tower_Ruin.png/revision/latest/scale-to-width-down/120?cb=20231213213550',
		},
		{
			level: 1,
			damagePerSecond: 110,
			damagePerShot: 55,
			hitpoints: 5000,
			buildCost: 20000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 14,
			exp: 1099,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/31/Multi-Archer_Tower1.png/revision/latest/scale-to-width-down/120?cb=20231213213611',
		},
		{
			level: 2,
			damagePerSecond: 120,
			damagePerShot: 60,
			hitpoints: 5200,
			buildCost: 22000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 15,
			exp: 1157,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Multi-Archer_Tower2.png/revision/latest/scale-to-width-down/120?cb=20231213213624',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getTownHallLevel: (level: number) =>
		getHallLevel(building.townHallDetails, level, 'townHallLevel'),
}

export default building

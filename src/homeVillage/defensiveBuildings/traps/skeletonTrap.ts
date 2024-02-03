import * as Constants from '@/constants'
import TrapBuildingfrom '@IHomeVillage/traps/skeletonTrap/trap.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: TrapBuilding = {
	name: 'Skeleton Trap',
	description:
		'Ambush and distract unsuspecting foes with a surprise skirmish of short-lived, but sneaky skeleton troops! Skeleton Traps can be configured to pursue ground or air troops.',
	maxCount: 4,
	width: 1,
	height: 1,
	maxLevel: 4,
	mode: [
		{
			name: Constants.airMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.air,
			minTriggerRange: 0,
			maxTriggerRange: 5,
			favoriteTarget: Constants.none,
			attackType: Constants.melee,
			attackSpeed: 0.7,
			range: 0.4,
			movementSpeed: 17.6,
			damagePerSecond: 25,
			damagePerHit: 17.5,
			hitpoints: 30,
		},
		{
			name: Constants.groundMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.air,
			minTriggerRange: 0,
			maxTriggerRange: 5,
			favoriteTarget: Constants.none,
			attackType: Constants.melee,
			attackSpeed: 0.7,
			range: 0.4,
			movementSpeed: 24,
			damagePerSecond: 25,
			damagePerHit: 17.5,
			hitpoints: 30,
		},
	],
	townHallDetails: [
		{ townHallLevel: 1, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 2, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 3, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 4, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 5, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 6, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 7, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 8, availableCount: 2, maxLevel: 2 },
		{ townHallLevel: 9, availableCount: 2, maxLevel: 3 },
		{ townHallLevel: 10, availableCount: 3, maxLevel: 4 },
		{ townHallLevel: 11, availableCount: 3, maxLevel: 4 },
		{ townHallLevel: 12, availableCount: 3, maxLevel: 4 },
		{ townHallLevel: 13, availableCount: 3, maxLevel: 4 },
		{ townHallLevel: 14, availableCount: 4, maxLevel: 4 },
		{ townHallLevel: 15, availableCount: 4, maxLevel: 4 },
		{ townHallLevel: 16, availableCount: 4, maxLevel: 4 },
	],
	levels: [
		{
			level: 1,
			spawnedUnits: 2,
			buildCost: 6000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0c/SkeletonTrap1_Ground.png/revision/latest?cb=20170828102715',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3c/SkeletonTrap1_Air.png/revision/latest?cb=20170828102744',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/67/SkeletonTrap1_unarmed.png/revision/latest/scale-to-width-down/75?cb=20210204080350',
		},
		{
			level: 2,
			spawnedUnits: 3,
			buildCost: 300000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 5,
			buildTimeDay: 0,
			exp: 134,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0c/SkeletonTrap1_Ground.png/revision/latest?cb=20170828102715',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3c/SkeletonTrap1_Air.png/revision/latest?cb=20170828102744',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/67/SkeletonTrap1_unarmed.png/revision/latest/scale-to-width-down/75?cb=20210204080350',
		},
		{
			level: 3,
			spawnedUnits: 4,
			buildCost: 800000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 10,
			buildTimeDay: 0,
			exp: 189,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4f/SkeletonTrap3_Ground.png/revision/latest?cb=20170828102728',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/52/SkeletonTrap3_Air.png/revision/latest?cb=20170828102755',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9f/SkeletonTrap3_unarmed.png/revision/latest/scale-to-width-down/75?cb=20171106190515',
		},
		{
			level: 4,
			spawnedUnits: 5,
			buildCost: 1100000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 20,
			buildTimeDay: 0,
			exp: 268,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4f/SkeletonTrap3_Ground.png/revision/latest?cb=20170828102728',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/52/SkeletonTrap3_Air.png/revision/latest?cb=20170828102755',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9f/SkeletonTrap3_unarmed.png/revision/latest/scale-to-width-down/75?cb=20171106190515',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getTownHallLevel: (level: number) =>
		getHallLevel(building.townHallDetails, level, 'townHallLevel'),
}

export default building

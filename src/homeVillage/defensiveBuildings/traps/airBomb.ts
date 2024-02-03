import * as Constants from '@/constants'
import TrapBuildingfrom '@IHomeVillage/traps/airBomb/trap.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: TrapBuilding = {
	name: 'Air Bomb',
	description:
		'Latest invention in the field of flying pest control. This trap can blast multiple air units in a small area.',
	maxCount: 7,
	width: 1,
	height: 1,
	maxLevel: 11,
	mode: {
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.air,
		minTriggerRange: 0,
		maxTriggerRange: 4,
		damageRadius: 3,
		favoriteTarget: Constants.none,
	},
	townHallDetails: [
		{ townHallLevel: 1, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 2, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 3, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 4, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 5, availableCount: 2, maxLevel: 2 },
		{ townHallLevel: 6, availableCount: 2, maxLevel: 2 },
		{ townHallLevel: 7, availableCount: 2, maxLevel: 3 },
		{ townHallLevel: 8, availableCount: 4, maxLevel: 3 },
		{ townHallLevel: 9, availableCount: 4, maxLevel: 4 },
		{ townHallLevel: 10, availableCount: 5, maxLevel: 4 },
		{ townHallLevel: 11, availableCount: 5, maxLevel: 5 },
		{ townHallLevel: 12, availableCount: 6, maxLevel: 6 },
		{ townHallLevel: 13, availableCount: 6, maxLevel: 8 },
		{ townHallLevel: 14, availableCount: 7, maxLevel: 9 },
		{ townHallLevel: 15, availableCount: 7, maxLevel: 10 },
		{ townHallLevel: 16, availableCount: 7, maxLevel: 11 },
	],
	levels: [
		{
			level: 1,
			damage: 100,
			buildCost: 4000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Air_Bomb1.png/revision/latest/scale-to-width-down/70?cb=20231213085607',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Air_Bomb_unarmed.png/revision/latest?cb=20171009072924',
		},
		{
			level: 2,
			damage: 120,
			buildCost: 20000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 1,
			buildTimeDay: 0,
			exp: 60,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Air_Bomb1.png/revision/latest/scale-to-width-down/70?cb=20231213085607',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Air_Bomb_unarmed.png/revision/latest?cb=20171009072924',
		},
		{
			level: 3,
			damage: 144,
			buildCost: 150000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 2,
			buildTimeDay: 0,
			exp: 84,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5c/Air_Bomb3.png/revision/latest/scale-to-width-down/70?cb=20231213085557',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Air_Bomb_unarmed.png/revision/latest?cb=20171009072924',
		},
		{
			level: 4,
			damage: 173,
			buildCost: 540000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5c/Air_Bomb3.png/revision/latest/scale-to-width-down/70?cb=20231213085557',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Air_Bomb_unarmed.png/revision/latest?cb=20171009072924',
		},
		{
			level: 5,
			damage: 208,
			buildCost: 1100000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/99/Air_Bomb5.png/revision/latest/scale-to-width-down/70?cb=20231213085548',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Air_Bomb_unarmed.png/revision/latest?cb=20171009072924',
		},
		{
			level: 6,
			damage: 232,
			buildCost: 1900000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/99/Air_Bomb5.png/revision/latest/scale-to-width-down/70?cb=20231213085548',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Air_Bomb_unarmed.png/revision/latest?cb=20171009072924',
		},
		{
			level: 7,
			damage: 252,
			buildCost: 2000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 2,
			exp: 464,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/15/Air_Bomb7.png/revision/latest/scale-to-width-down/70?cb=20231213085536',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Air_Bomb_unarmed.png/revision/latest?cb=20171009072924',
		},
		{
			level: 8,
			damage: 280,
			buildCost: 2600000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 3,
			exp: 549,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/15/Air_Bomb7.png/revision/latest/scale-to-width-down/70?cb=20231213085536',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Air_Bomb_unarmed.png/revision/latest?cb=20171009072924',
		},
		{
			level: 9,
			damage: 325,
			buildCost: 5000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b1/Air_Bomb9.png/revision/latest/scale-to-width-down/70?cb=20231213085519',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Air_Bomb_unarmed.png/revision/latest?cb=20171009072924',
		},
		{
			level: 10,
			damage: 350,
			buildCost: 9000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 9,
			exp: 881,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b1/Air_Bomb9.png/revision/latest/scale-to-width-down/70?cb=20231213085519',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Air_Bomb_unarmed.png/revision/latest?cb=20171009072924',
		},
		{
			level: 11,
			damage: 375,
			buildCost: 10000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 9,
			exp: 905,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a6/Air_Bomb11.png/revision/latest/scale-to-width-down/70?cb=20231213085327',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Air_Bomb_unarmed.png/revision/latest?cb=20171009072924',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getTownHallLevel: (level: number) =>
		getHallLevel(building.townHallDetails, level, 'townHallLevel'),
}

export default building

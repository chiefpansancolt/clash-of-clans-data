import * as Constants from '@/constants'
import TrapBuilding from '@IHomeVillage/traps/trap.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: TrapBuilding = {
	name: 'Spring Trap',
	description: 'This bouncy little number will toss unwanted visitors right off your property!',
	maxCount: 9,
	width: 1,
	height: 1,
	maxLevel: 5,
	mode: {
		damageType: Constants.bounceAwayTroops,
		unitTypeTarget: Constants.ground,
		minTriggerRange: 0,
		maxTriggerRange: 0.8,
		favoriteTarget: Constants.none,
	},
	townHallDetails: [
		{ townHallLevel: 1, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 2, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 3, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 4, availableCount: 2, maxLevel: 1 },
		{ townHallLevel: 5, availableCount: 2, maxLevel: 1 },
		{ townHallLevel: 6, availableCount: 4, maxLevel: 1 },
		{ townHallLevel: 7, availableCount: 4, maxLevel: 2 },
		{ townHallLevel: 8, availableCount: 6, maxLevel: 3 },
		{ townHallLevel: 9, availableCount: 6, maxLevel: 4 },
		{ townHallLevel: 10, availableCount: 6, maxLevel: 5 },
		{ townHallLevel: 11, availableCount: 6, maxLevel: 5 },
		{ townHallLevel: 12, availableCount: 8, maxLevel: 5 },
		{ townHallLevel: 13, availableCount: 9, maxLevel: 5 },
		{ townHallLevel: 14, availableCount: 9, maxLevel: 5 },
		{ townHallLevel: 15, availableCount: 9, maxLevel: 5 },
		{ townHallLevel: 16, availableCount: 9, maxLevel: 5 },
	],
	levels: [
		{
			level: 1,
			springCapacity: 10,
			buildCost: 2000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/74/Spring_Trap1.png/revision/latest/scale-to-width-down/90?cb=20221218092202',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e7/Spring_Trap1_unarmed.png/revision/latest?cb=20221218092334',
		},
		{
			level: 2,
			springCapacity: 12,
			buildCost: 250000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/74/Spring_Trap1.png/revision/latest/scale-to-width-down/90?cb=20221218092202',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e7/Spring_Trap1_unarmed.png/revision/latest?cb=20221218092334',
		},
		{
			level: 3,
			springCapacity: 14,
			buildCost: 375000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 9,
			buildTimeDay: 0,
			exp: 180,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e2/Spring_Trap3.png/revision/latest/scale-to-width-down/90?cb=20221218092328',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/28/Spring_Trap3_unarmed.png/revision/latest?cb=20221218092334',
		},
		{
			level: 4,
			springCapacity: 16,
			buildCost: 700000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 0,
			exp: 254,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e2/Spring_Trap3.png/revision/latest/scale-to-width-down/90?cb=20221218092328',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/28/Spring_Trap3_unarmed.png/revision/latest?cb=20221218092334',
		},
		{
			level: 5,
			springCapacity: 18,
			buildCost: 800000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 1,
			exp: 388,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d5/Spring_Trap5.png/revision/latest/scale-to-width-down/90?cb=20221218092228',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/28/Spring_Trap3_unarmed.png/revision/latest?cb=20221218092334',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getTownHallLevel: (level: number) => getHallLevel(building.townHallDetails, level, 'townHallLevel'),
}

export default building

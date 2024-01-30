import * as Constants from '@/constants'
import Trap from '@IBuilderBase/traps/springTrap/trap.interface'
import Level from '@IBuilderBase/traps/springTrap/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const springTrap: Trap = {
	name: 'Spring Trap',
	description: 'This bouncy little number will toss unwanted visitors right off your property!',
	maxCount: 6,
	width: 1,
	height: 1,
	maxLevel: 4,
	mode: {
		damageType: Constants.bounceAwayTroops,
		unitTypeTarget: Constants.ground,
		minTriggerRange: 0,
		maxTriggerRange: 0.7,
		favoriteTarget: Constants.none,
	},
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 2, maxLevel: 1 },
		{ townHall: 4, availableCount: 2, maxLevel: 2 },
		{ townHall: 5, availableCount: 3, maxLevel: 2 },
		{ townHall: 6, availableCount: 3, maxLevel: 3 },
		{ townHall: 7, availableCount: 4, maxLevel: 3 },
		{ townHall: 8, availableCount: 5, maxLevel: 4 },
		{ townHall: 9, availableCount: 6, maxLevel: 4 },
		{ townHall: 10, availableCount: 6, maxLevel: 4 },
	],
	levels: [
		{
			level: 1,
			springCapacity: 4,
			buildCost: 10000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/74/Spring_Trap1.png/revision/latest/scale-to-width-down/90?cb=20221218092202',
		},
		{
			level: 2,
			springCapacity: 6,
			buildCost: 30000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 1,
			buildTimeDay: 0,
			exp: 60,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e2/Spring_Trap3.png/revision/latest/scale-to-width-down/90?cb=20221218092328',
		},
		{
			level: 3,
			springCapacity: 7,
			buildCost: 100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e2/Spring_Trap3.png/revision/latest/scale-to-width-down/90?cb=20221218092328',
		},
		{
			level: 4,
			springCapacity: 8,
			buildCost: 300000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d5/Spring_Trap5.png/revision/latest/scale-to-width-down/90?cb=20221218092228',
		},
	],
	getSize(): string {
		return `${this.width}x${this.height}`
	},
	getLevel(level: number): Level | undefined {
		if (level >= 1 && level <= this.levels.length) {
			return this.levels[level - 1]
		} else {
			console.error(`Invalid ${this.name} level: ${level}`)
			return undefined
		}
	},
	getTownHallLevel(level: number): TownHallDetails | undefined {
		if (level >= 1 && level <= this.townHallDetails.length) {
			return this.townHallDetails[level - 1]
		} else {
			console.error(`Invalid Town Hall level: ${level}`)
			return undefined
		}
	},
}

export default springTrap